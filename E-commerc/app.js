
        // Product data with image URLs
        const products = [
            { id: 1, name: "Wireless Bluetooth Earbuds", price: 2999, rating: 4.5, category: "Electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 2, name: "Smart Fitness Watch", price: 2499, rating: 4.2, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 3, name: "Cotton T-Shirt", price: 1499, rating: 4.0, category: "Clothing", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 4, name: "Stainless Steel Water Bottle", price: 999, rating: 4.8, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 5, name: "Facial Moisturizer", price: 499, rating: 4.3, category: "Beauty", image: "f.avif" },
            { id: 6, name: "Running Shoes", price: 399, rating: 4.6, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 7, name: "Portable Bluetooth Speaker", price: 599, rating: 4.1, category: "Electronics", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 8, name: "Denim Jacket", price: 6500, rating: 4.4, category: "Clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 9, name: "Non-Stick Cookware Set", price: 14999, rating: 4.7, category: "Home & Kitchen", image: "GlSet.webp" },
            { id: 10, name: "Vitamin C Serum", price: 3499, rating: 4.5, category: "Beauty", image: "Vitamin_C.webp" },
            { id: 11, name: "Yoga Mat", price: 2599, rating: 4.0, category: "Sports", image: "Yoga-mat.jpg" },
            { id: 12, name: "Gaming Keyboard", price: 7599, rating: 4.3, category: "Electronics", image: "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 13, name: "Winter Beanie", price: 1850, rating: 3.9, category: "Clothing", image: "Beanie.webp" },
            { id: 14, name: "Air Fryer", price: 1300, rating: 4.6, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 15, name: "Hair Dryer", price: 4500, rating: 4.2, category: "Beauty", image:"hair-dryer.webp" },
            { id: 16, name: "Dumbbell Set", price: 7995, rating: 4.4, category: "Sports", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 17, name: "Noise Cancelling Headphones", price: 19999, rating: 4.8, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 18, name: "Summer Dress", price: 4599, rating: 4.1, category: "Clothing", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 19, name: "Coffee Maker", price: 8999, rating: 4.5, category: "Home & Kitchen", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" },
            { id: 20, name: "Sunscreen Lotion", price: 1599, rating: 4.7, category: "Beauty", image: "sunblock30.webp" }
        ];

        // App state
        const state = {
            filteredProducts: [...products],
            currentPage: 1,
            itemsPerPage: 8,
            selectedCategories: [],
            minPrice: null,
            maxPrice: null,
            minRating: null,
            searchQuery: '',
            sortOption: 'default'
        };

        // DOM Elements
        const productsGrid = document.getElementById('products-grid');
        const pagination = document.getElementById('pagination');
        const categoryFilters = document.querySelectorAll('#category-filters input[type="checkbox"]');
        const minPriceInput = document.getElementById('min-price');
        const maxPriceInput = document.getElementById('max-price');
        const ratingStars = document.querySelectorAll('#rating-filter .star');
        const clearAllBtn = document.getElementById('clear-all');
        const sortSelect = document.getElementById('sort-select');
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const filterChips = document.getElementById('filter-chips');

        // Initialize the app
        function init() {
            renderProducts();
            setupEventListeners();
            updateFilterChips();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Category filters
            categoryFilters.forEach(checkbox => {
                checkbox.addEventListener('change', handleCategoryChange);
            });

            // Price filters
            minPriceInput.addEventListener('input', handlePriceFilter);
            maxPriceInput.addEventListener('input', handlePriceFilter);

            // Rating filter
            ratingStars.forEach(star => {
                star.addEventListener('click', handleRatingFilter);
            });

            // Clear all button
            clearAllBtn.addEventListener('click', clearAllFilters);

            // Sort select
            sortSelect.addEventListener('change', handleSortChange);

            // Search
            searchInput.addEventListener('input', handleSearch);
            searchBtn.addEventListener('click', handleSearch);
        }

        // Handle category filter change
        function handleCategoryChange(e) {
            const category = e.target.value;
            
            if (e.target.checked) {
                state.selectedCategories.push(category);
            } else {
                state.selectedCategories = state.selectedCategories.filter(c => c !== category);
            }
            
            filterProducts();
        }

        // Handle price filter change
        function handlePriceFilter() {
            state.minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : null;
            state.maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : null;
            filterProducts();
        }

        // Handle rating filter change
        function handleRatingFilter(e) {
            const rating = parseInt(e.currentTarget.dataset.rating);
            state.minRating = rating;
            
            // Update star display
            ratingStars.forEach(star => {
                const starRating = parseInt(star.dataset.rating);
                if (starRating <= rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
            
            filterProducts();
        }

        // Handle sort change
        function handleSortChange(e) {
            state.sortOption = e.target.value;
            filterProducts();
        }

        // Handle search
        function handleSearch() {
            state.searchQuery = searchInput.value.trim().toLowerCase();
            state.currentPage = 1;
            filterProducts();
        }

        // Clear all filters
        function clearAllFilters() {
            // Reset category filters
            categoryFilters.forEach(checkbox => {
                checkbox.checked = false;
            });
            state.selectedCategories = [];
            
            // Reset price filters
            minPriceInput.value = '';
            maxPriceInput.value = '';
            state.minPrice = null;
            state.maxPrice = null;
            
            // Reset rating filter
            ratingStars.forEach(star => {
                star.classList.remove('active');
            });
            state.minRating = null;
            
            // Reset search
            searchInput.value = '';
            state.searchQuery = '';
            
            // Reset sort
            sortSelect.value = 'default';
            state.sortOption = 'default';
            
            filterProducts();
        }

        // Filter products based on current state
        function filterProducts() {
            let filtered = [...products];
            
            // Apply category filter
            if (state.selectedCategories.length > 0) {
                filtered = filtered.filter(product => 
                    state.selectedCategories.includes(product.category)
                );
            }
            
            // Apply price filter
            if (state.minPrice !== null) {
                filtered = filtered.filter(product => product.price >= state.minPrice);
            }
            
            if (state.maxPrice !== null) {
                filtered = filtered.filter(product => product.price <= state.maxPrice);
            }
            
            // Apply rating filter
            if (state.minRating !== null) {
                filtered = filtered.filter(product => product.rating >= state.minRating);
            }
            
            // Apply search filter
            if (state.searchQuery) {
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(state.searchQuery) ||
                    product.category.toLowerCase().includes(state.searchQuery)
                );
            }
            
            // Apply sorting
            switch (state.sortOption) {
                case 'price_asc':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price_desc':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'rating_asc':
                    filtered.sort((a, b) => a.rating - b.rating);
                    break;
                case 'rating_desc':
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                default:
                    // Default sorting (by id)
                    filtered.sort((a, b) => a.id - b.id);
            }
            
            state.filteredProducts = filtered;
            state.currentPage = 1;
            updateFilterChips();
            renderProducts();
        }

        // Render products to the grid
        function renderProducts() {
            // Show loading state
            productsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i>Loading products...</div>';
            
            // Simulate loading delay
            setTimeout(() => {
                const startIndex = (state.currentPage - 1) * state.itemsPerPage;
                const endIndex = startIndex + state.itemsPerPage;
                const paginatedItems = state.filteredProducts.slice(startIndex, endIndex);
                
                // Clear products grid
                productsGrid.innerHTML = '';
                
                if (paginatedItems.length === 0) {
                    productsGrid.innerHTML = '<div class="no-results">No products found matching your criteria.</div>';
                    pagination.innerHTML = '';
                    return;
                }
                
                // Render products
                paginatedItems.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    
                    // Generate star rating HTML
                    let starsHtml = '';
                    for (let i = 1; i <= 5; i++) {
                        if (i <= Math.floor(product.rating)) {
                            starsHtml += '<i class="fas fa-star"></i>';
                        } else if (i - 0.5 <= product.rating) {
                            starsHtml += '<i class="fas fa-star-half-alt"></i>';
                        } else {
                            starsHtml += '<i class="far fa-star"></i>';
                        }
                    }
                    
                    // Add badge for top-rated products
                    let badgeHtml = '';
                    if (product.rating >= 4.5) {
                        badgeHtml = '<span class="product-badge">Top Rated</span>';
                    } else if (product.price < 30) {
                        badgeHtml = '<span class="product-badge">Sale</span>';
                    }
                    
                    productCard.innerHTML = `
                        <div class="product-image">
                            ${badgeHtml}
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <div class="product-category">${product.category}</div>
                            <h3 class="product-name">${product.name}</h3>
                            <div class="product-rating">
                                <div class="stars">${starsHtml}</div>
                                <span>${product.rating.toFixed(1)}</span>
                            </div>
                            <div class="product-price">RS.${product.price.toFixed(2)}</div>
                        </div>
                    `;
                    
                    productsGrid.appendChild(productCard);
                });
                
                renderPagination();
            }, 500);
        }

        // Render pagination controls
        function renderPagination() {
            const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
            
            if (totalPages <= 1) {
                pagination.innerHTML = '';
                return;
            }
            
            let paginationHtml = '';
            
            // Previous button
            paginationHtml += `
                <button id="prev-page" ${state.currentPage === 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i>
                </button>
            `;
            
            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                paginationHtml += `
                    <button class="page-number ${i === state.currentPage ? 'active' : ''}" data-page="${i}">
                        ${i}
                    </button>
                `;
            }
            
            // Next button
            paginationHtml += `
                <button id="next-page" ${state.currentPage === totalPages ? 'disabled' : ''}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            `;
            
            pagination.innerHTML = paginationHtml;
            
            // Add event listeners to pagination buttons
            document.getElementById('prev-page')?.addEventListener('click', () => {
                state.currentPage--;
                renderProducts();
            });
            
            document.getElementById('next-page')?.addEventListener('click', () => {
                state.currentPage++;
                renderProducts();
            });
            
            document.querySelectorAll('.page-number').forEach(button => {
                button.addEventListener('click', () => {
                    state.currentPage = parseInt(button.dataset.page);
                    renderProducts();
                });
            });
        }

        // Update filter chips display
        function updateFilterChips() {
            filterChips.innerHTML = '';
            
            // Category chips
            state.selectedCategories.forEach(category => {
                const chip = createChip(category, 'category');
                filterChips.appendChild(chip);
            });
            
            // Price chip
            if (state.minPrice !== null || state.maxPrice !== null) {
                let priceText = 'Price: ';
                if (state.minPrice !== null && state.maxPrice !== null) {
                    priceText += `RS.${state.minPrice} - RS.${state.maxPrice}`;
                } else if (state.minPrice !== null) {
                    priceText += `From RS.${state.minPrice}`;
                } else {
                    priceText += `Up to RS.${state.maxPrice}`;
                }
                
                const chip = createChip(priceText, 'price');
                filterChips.appendChild(chip);
            }
            
            // Rating chip
            if (state.minRating !== null) {
                const chip = createChip(`Rating: ${state.minRating}+ Stars`, 'rating');
                filterChips.appendChild(chip);
            }
            
            // Search chip
            if (state.searchQuery) {
                const chip = createChip(`Search: "${state.searchQuery}"`, 'search');
                filterChips.appendChild(chip);
            }
        }

        // Create a filter chip
        function createChip(text, type) {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.innerHTML = `
                <span>${text}</span>
                <button class="remove-chip" data-type="${type}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            // Add event listener to remove button
            const removeBtn = chip.querySelector('.remove-chip');
            removeBtn.addEventListener('click', () => removeFilter(type));
            
            return chip;
        }

        // Remove a specific filter
        function removeFilter(type) {
            switch (type) {
                case 'category':
                    // Clear all categories
                    categoryFilters.forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    state.selectedCategories = [];
                    break;
                    
                case 'price':
                    minPriceInput.value = '';
                    maxPriceInput.value = '';
                    state.minPrice = null;
                    state.maxPrice = null;
                    break;
                    
                case 'rating':
                    ratingStars.forEach(star => {
                        star.classList.remove('active');
                    });
                    state.minRating = null;
                    break;
                    
                case 'search':
                    searchInput.value = '';
                    state.searchQuery = '';
                    break;
            }
            
            filterProducts();
        }

        // Initialize the app
        init();
   
