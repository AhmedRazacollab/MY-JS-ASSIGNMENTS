
const API_KEY = "c8ACp0S1wsEoErloEzGQBA5JJxxIr7KP";
const API_BASE = "https://dataservice.accuweather.com";


const els = {
  form: document.getElementById("search-form"),
  cityInput: document.getElementById("city-input"),
  loader: document.getElementById("loader"),
  error: document.getElementById("error"),
  weather: document.getElementById("weather"),
  cityName: document.getElementById("city-name"),
  lastUpdated: document.getElementById("last-updated"),
  currentIcon: document.getElementById("current-icon"),
  currentTemp: document.getElementById("current-temp"),
  currentDesc: document.getElementById("current-desc"),
  minTemp: document.getElementById("min-temp"),
  maxTemp: document.getElementById("max-temp"),
  extraDetails: document.getElementById("extra-details"),
  forecast: document.getElementById("forecast"),
  unitToggle: document.getElementById("unit-toggle"),
  geoBtn: document.getElementById("geo-btn")
};

let isImperial = false;
let lastLocationKey = null;


document.addEventListener("DOMContentLoaded", () => {
  const last = localStorage.getItem("lastCity");
  if (last) {
    els.cityInput.value = last;
    handleSearch(last);
  }
});

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = els.cityInput.value.trim();
  if (!city) return;
  handleSearch(city);
});

els.unitToggle.addEventListener("change", () => {
  isImperial = els.unitToggle.checked;
  if (lastLocationKey) {
    renderAllByLocationKey(lastLocationKey).catch(console.error);
  }
});

els.geoBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showError("Geolocation is not supported by your browser.");
    return;
  }
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
});


function onGeoSuccess(pos) {
  const { latitude, longitude } = pos.coords;
  showLoader();
  hideError();

  fetchJson(
    `${API_BASE}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
  )
    .then((locKeyData) => {
      const { Key, LocalizedName } = locKeyData;
      els.cityInput.value = LocalizedName;
      localStorage.setItem("lastCity", LocalizedName);
      return renderAllByLocationKey(Key, LocalizedName);
    })
    .catch(() => {
      showError("Unable to find city from GPS.");
    })
    .finally(() => hideLoader());
}

function onGeoError() {
  showError("Location access is denied.");
}

function handleSearch(city) {
  showLoader();
  hideError();

  getLocationKey(city)
    .then((locationKey) => {
      if (!locationKey) {
        showError("City not found. Please check spelling.");
        throw new Error("NOT_FOUND");
      }
      localStorage.setItem("lastCity", city);
      return renderAllByLocationKey(locationKey, city);
    })
    .catch((err) => {
      if (err.message !== "NOT_FOUND") {
        console.error(err);
        showError("Some error occurred.");
      }
    })
    .finally(() => hideLoader());
}

function renderAllByLocationKey(locationKey, fallbackCityName = "") {
  lastLocationKey = locationKey;

  return Promise.all([
    getCurrentConditions(locationKey),
    getFiveDayForecast(locationKey),
    getLocationInfo(locationKey)
  ]).then(([current, forecast, locationInfo]) => {
    const cityName = fallbackCityName || locationInfo.LocalizedName || "Unknown City";
    renderCurrent(cityName, current[0], forecast);
    renderForecast(forecast);
    els.weather.classList.remove("d-none");
  });
}


function getLocationKey(city) {
  const url = `${API_BASE}/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURIComponent(city)}`;
  return fetchJson(url).then((data) => (data && data.length ? data[0].Key : null));
}

function getCurrentConditions(locationKey) {
  const url = `${API_BASE}/currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;
  return fetchJson(url);
}

function getFiveDayForecast(locationKey) {
  const url = `${API_BASE}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${!isImperial}`;
  return fetchJson(url);
}


function getLocationInfo(locationKey) {
  const url = `${API_BASE}/locations/v1/${locationKey}?apikey=${API_KEY}`;
  return fetchJson(url);
}


function renderCurrent(city, cc, forecastData) {
  const desc = cc.WeatherText;
  const icon = cc.WeatherIcon;
  const tempC = cc.Temperature.Metric.Value;
  const tempF = cc.Temperature.Imperial.Value;

  const feelsC = cc.RealFeelTemperature.Metric.Value;
  const feelsF = cc.RealFeelTemperature.Imperial.Value;

  const humidity = cc.RelativeHumidity;
  const windKph = cc.Wind.Speed.Metric.Value;
  const windMph = cc.Wind.Speed.Imperial.Value;

  els.cityName.textContent = city;
  els.lastUpdated.textContent = `Last updated: ${new Date(cc.LocalObservationDateTime).toLocaleString()}`;
  els.currentIcon.className = `fa-solid ${mapAccuIconToFA(icon)} fa-3x`;
  els.currentDesc.textContent = desc;

  els.currentTemp.innerHTML = isImperial
    ? `${Math.round(tempF)}<sup>°F</sup>`
    : `${Math.round(tempC)}<sup>°C</sup>`;

  if (forecastData && forecastData.DailyForecasts && forecastData.DailyForecasts.length > 0) {
    const today = forecastData.DailyForecasts[0].Temperature;
    els.minTemp.textContent = `${Math.round(today.Minimum.Value)}°`;
    els.maxTemp.textContent = `${Math.round(today.Maximum.Value)}°`;
  }

  els.extraDetails.innerHTML = `
    <div class="col-auto">Feels like: <strong>${Math.round(isImperial ? feelsF : feelsC)}°${isImperial ? "F" : "C"}</strong></div>
    <div class="col-auto">Humidity: <strong>${humidity}%</strong></div>
    <div class="col-auto">Wind: <strong>${Math.round(isImperial ? windMph : windKph)} ${isImperial ? "mph" : "km/h"}</strong></div>
  `;
}

function renderForecast(forecastData) {
  const daily = forecastData.DailyForecasts;
  els.forecast.innerHTML = "";

  const unitSymbol = isImperial ? "°F" : "°C";

  daily.forEach((d) => {
    const date = new Date(d.Date);
    const dayName = date.toLocaleDateString(undefined, { weekday: "short" });

    const min = Math.round(d.Temperature.Minimum.Value);
    const max = Math.round(d.Temperature.Maximum.Value);
    const icon = d.Day.Icon;

    const card = document.createElement("div");
    card.className = "col-4 col-sm-2 day-card text-white";
    card.innerHTML = `
      <div class="fw-semibold">${dayName}</div>
      <i class="fa-solid ${mapAccuIconToFA(icon)} my-2"></i>
      <div class="small">${max}${unitSymbol}/${min}${unitSymbol}</div>
    `;
    els.forecast.appendChild(card);
  });
}


function mapAccuIconToFA(num) {
  switch (true) {
    case [1, 2, 3, 4, 5].includes(num): return "fa-sun";
    case [6, 7].includes(num): return "fa-cloud-sun";
    case [8, 11].includes(num): return "fa-cloud";
    case [12, 13, 14, 18].includes(num): return "fa-cloud-showers-heavy";
    case [15, 16, 17].includes(num): return "fa-cloud-bolt";
    case [19, 20, 21, 22].includes(num): return "fa-snowflake";
    case [23, 24].includes(num): return "fa-wind";
    case [25, 26, 29].includes(num): return "fa-cloud-rain";
    case [30, 31, 32].includes(num): return "fa-temperature-half";
    case [33, 34, 35, 36, 37, 38, 39].includes(num): return "fa-moon";
    case [40, 41, 42, 43, 44].includes(num): return "fa-cloud-moon-rain";
    default: return "fa-cloud";
  }
}

function fetchJson(url) {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
}

function showLoader() { els.loader.classList.remove("d-none"); }
function hideLoader() { els.loader.classList.add("d-none"); }
function showError(msg) {
  els.error.textContent = msg;
  els.error.classList.remove("d-none");
}
function hideError() { els.error.classList.add("d-none"); }
