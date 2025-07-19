const list = document.querySelector('ul');
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched successfully');
    const first10 = data.slice(0, 10);
    first10.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.title + ' (ID: ' + todo.id + ')';
      listItem.style.fontSize = '20px';
      listItem.style.fontWeight = 'bold';
      listItem.style.margin = '10px 0';
      listItem.style.alignContent = 'center';
      if (todo.completed === true) {
        listItem.style.textDecoration = 'line-through';
        listItem.style.color = 'green';
      }
      if (todo.completed === false) {
        listItem.style.color = 'red';
      }
      list.appendChild(listItem);
      
    });
  })
  
  .catch(error => {
    console.error('Error fetching data:', error);
  });
