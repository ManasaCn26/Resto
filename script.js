// Cart functionality
        let cart = [];
        const cartCount = document.querySelector('.cart-count');
        const cartIcon = document.querySelector('.cart-icon');
        const checkoutSection = document.querySelector('.checkout-section');
        const cartItemsContainer = document.querySelector('.cart-items-container');
        const emptyCart = document.querySelector('.empty-cart');
        const backToMenuBtn = document.querySelector('.back-to-menu');
        const subtotalEl = document.getElementById('subtotal');
        const taxEl = document.getElementById('tax');
        const totalEl = document.getElementById('total');
        const deliveryEl = document.getElementById('delivery');

        // Sample food data
        const foodItems = {
            1: {
                id: 1,
                title: "Classic Pancakes",
                price: 12.99,
                desc: "Fluffy buttermilk pancakes served with maple syrup and fresh berries. Our pancakes are made from scratch daily using premium ingredients and cooked to golden perfection.",
                img: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
                category: "breakfast"
            },
            2: {
                id: 2,
                title: "Avocado Toast",
                price: 14.50,
                desc: "Sourdough bread with smashed avocado, cherry tomatoes, and poached eggs. Topped with microgreens and a drizzle of olive oil for a perfect breakfast or brunch option.",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
                category: "breakfast"
            },
            3: {
                id: 3,
                title: "French Toast",
                price: 13.75,
                desc: "Brioche bread dipped in vanilla custard, served with caramelized bananas. Dusted with powdered sugar and served with warm maple syrup on the side.",
                img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
                category: "breakfast"
            },
            4: {
                id: 4,
                title: "Eggs Benedict",
                price: 16.99,
                desc: "English muffin with Canadian bacon, poached eggs, and hollandaise sauce. Served with a side of breakfast potatoes or fresh fruit.",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
                category: "breakfast"
            },
            5: {
                id: 5,
                title: "Breakfast Burrito",
                price: 15.25,
                desc: "Flour tortilla filled with scrambled eggs, chorizo, potatoes, and cheese. Served with fresh salsa and sour cream on the side.",
                img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
                category: "breakfast"
            },
            6: {
                id: 6,
                title: "Greek Yogurt Parfait",
                price: 10.99,
                desc: "Greek yogurt with granola, honey, and seasonal fresh fruits. A light and healthy option packed with protein and nutrients.",
                img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
                category: "breakfast"
            },
            7: {
                id: 7,
                title: "Quinoa Salad",
                price: 16.50,
                desc: "Quinoa with roasted vegetables, feta cheese, and lemon vinaigrette. Packed with nutrients and flavors, this salad is both satisfying and healthy.",
                img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                category: "lunch"
            },
            8: {
                id: 8,
                title: "Gourmet Burger",
                price: 18.99,
                desc: "Angus beef patty with cheddar, bacon, caramelized onions, and truffle aioli. Served on a brioche bun with lettuce, tomato, and pickle.",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
                category: "lunch"
            },
            9: {
                id: 9,
                title: "Truffle Pasta",
                price: 22.75,
                desc: "Fettuccine with wild mushrooms, parmesan, and black truffle oil. A rich and decadent dish that's perfect for special occasions.",
                img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
                category: "lunch"
            },
            10: {
                id: 10,
                title: "Chicken Club",
                price: 17.50,
                desc: "Grilled chicken with avocado, bacon, lettuce, and tomato on sourdough. Served with your choice of side salad or fries.",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
                category: "lunch"
            },
            11: {
                id: 11,
                title: "Margherita Pizza",
                price: 19.99,
                desc: "Wood-fired pizza with tomato sauce, fresh mozzarella, and basil. Our classic pizza cooked in our traditional wood-burning oven.",
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                category: "lunch"
            },
            12: {
                id: 12,
                title: "Filet Mignon",
                price: 32.99,
                desc: "8oz grass-fed beef with roasted potatoes and seasonal vegetables. Cooked to your preference and served with our house-made steak sauce.",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947",
                category: "lunch"
            },
            13: {
                id: 13,
                title: "Grilled Salmon",
                price: 28.50,
                desc: "Atlantic salmon with lemon butter sauce and asparagus. Sourced from sustainable fisheries and grilled to perfection.",
                img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
                category: "dinner"
            },
            14: {
                id: 14,
                title: "Mushroom Risotto",
                price: 24.99,
                desc: "Arborio rice with wild mushrooms, white wine, and parmesan. Creamy and rich, this dish is a vegetarian favorite.",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
                category: "dinner"
            },
            15: {
                id: 15,
                title: "Rack of Lamb",
                price: 36.75,
                desc: "Herb-crusted lamb with mint jus and potato gratin. A classic dish prepared with New Zealand lamb and fresh herbs.",
                img: "https://images.unsplash.com/photo-1544025162-d76694265947",
                category: "dinner"
            },
            16: {
                id: 16,
                title: "Lobster Pasta",
                price: 38.50,
                desc: "Linguine with fresh lobster meat in a creamy tomato sauce. Featuring fresh Atlantic lobster and handmade pasta.",
                img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
                category: "dinner"
            },
            17: {
                id: 17,
                title: "Duck Confit",
                price: 34.99,
                desc: "Slow-cooked duck leg with cherry reduction and roasted vegetables. Tender duck cooked in its own fat for maximum flavor.",
                img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                category: "dinner"
            },
            18: {
                id: 18,
                title: "Vegetable Wellington",
                price: 26.99,
                desc: "Seasonal vegetables wrapped in puff pastry with herb cream sauce. A vegetarian twist on the classic beef Wellington.",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
                category: "dinner"
            }
        };

        // Update cart count
        function updateCartCount() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        // Update cart summary
        function updateCartSummary() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const tax = subtotal * 0.1; // 10% tax
            const delivery = 5.00;
            const total = subtotal + tax + delivery;

            subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
            taxEl.textContent = `$${tax.toFixed(2)}`;
            totalEl.textContent = `$${total.toFixed(2)}`;
        }

        // Render cart items
        function renderCartItems() {
            if (cart.length === 0) {
                emptyCart.style.display = 'block';
                cartItemsContainer.innerHTML = '';
                cartItemsContainer.appendChild(emptyCart);
                return;
            }

            emptyCart.style.display = 'none';
            cartItemsContainer.innerHTML = '';

            cart.forEach(item => {
                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.dataset.id = item.id;

                cartItemEl.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                        <div>
                            <h4 class="cart-item-name">${item.title}</h4>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        </div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="cart-item-quantity-btn minus">-</button>
                        <input type="number" class="cart-item-quantity-input" value="${item.quantity}" min="1">
                        <button class="cart-item-quantity-btn plus">+</button>
                    </div>
                    <div class="cart-item-remove">Remove</div>
                `;

                cartItemsContainer.appendChild(cartItemEl);
            });

            // Add event listeners to quantity buttons
            document.querySelectorAll('.cart-item-quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.closest('.cart-item').dataset.id);
                    const cartItem = cart.find(item => item.id === itemId);
                    
                    if (cartItem.quantity > 1) {
                        cartItem.quantity--;
                        updateCart();
                    }
                });
            });

            document.querySelectorAll('.cart-item-quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.closest('.cart-item').dataset.id);
                    const cartItem = cart.find(item => item.id === itemId);
                    
                    cartItem.quantity++;
                    updateCart();
                });
            });

            document.querySelectorAll('.cart-item-quantity-input').forEach(input => {
                input.addEventListener('change', function() {
                    const itemId = parseInt(this.closest('.cart-item').dataset.id);
                    const cartItem = cart.find(item => item.id === itemId);
                    const newQuantity = parseInt(this.value) || 1;
                    
                    cartItem.quantity = newQuantity;
                    updateCart();
                });
            });

            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.closest('.cart-item').dataset.id);
                    cart = cart.filter(item => item.id !== itemId);
                    updateCart();
                });
            });
        }

        // Update cart
        function updateCart() {
            updateCartCount();
            updateCartSummary();
            renderCartItems();
            saveCartToLocalStorage();
        }

        // Save cart to localStorage
        function saveCartToLocalStorage() {
            localStorage.setItem('gourmetDelightCart', JSON.stringify(cart));
        }

        // Load cart from localStorage
        function loadCartFromLocalStorage() {
            const savedCart = localStorage.getItem('gourmetDelightCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCart();
            }
        }

        // Initialize cart
        loadCartFromLocalStorage();

        // Cart icon click event
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show checkout section
            checkoutSection.style.display = 'block';
            
            // Scroll to checkout
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Back to menu button
        backToMenuBtn.addEventListener('click', function() {
            // Hide checkout section
            checkoutSection.style.display = 'none';
            
            // Show all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'block';
            });
            
            // Scroll to menu
            document.querySelector('#menu').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Checkout button
        document.querySelector('.checkout-btn').addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty. Please add some items before checking out.');
                return;
            }
            
            alert('Thank you for your order! Your food will be prepared shortly.');
            cart = [];
            updateCart();
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#checkout') return;
                
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Image Slider Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.slider-image');
            let currentImage = 0;
            
            function changeImage() {
                // Remove active class from current image
                images[currentImage].classList.remove('active');
                
                // Move to next image
                currentImage = (currentImage + 1) % images.length;
                
                // Add active class to new current image
                images[currentImage].classList.add('active');
            }
            
            // Change image every 3 seconds
            if(images.length > 0) {
                setInterval(changeImage, 3000);
            }
            
            // Animate features on scroll with staggered timing
            const featureBoxes = document.querySelectorAll('.feature-box');
            const aboutImages = document.querySelectorAll('.about-image');
            
            function checkVisibility() {
                const triggerBottom = window.innerHeight / 5 * 4;
                
                // Feature boxes
                featureBoxes.forEach((box, index) => {
                    const boxTop = box.getBoundingClientRect().top;
                    
                    if(boxTop < triggerBottom) {
                        setTimeout(() => {
                            box.classList.add('visible');
                        }, index * 200);
                    }
                });
                
                // About images
                aboutImages.forEach((image, index) => {
                    const imageTop = image.getBoundingClientRect().top;
                    
                    if(imageTop < triggerBottom) {
                        setTimeout(() => {
                            image.classList.add('visible');
                        }, index * 200);
                    }
                });
            }
            
            // Initial check
            checkVisibility();
            
            // Check on scroll with debounce
            let isScrolling;
            window.addEventListener('scroll', function() {
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout(checkVisibility, 50);
            }, false);
        });

        // Menu Section Functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Category switching
            const categoryBtns = document.querySelectorAll('.category-btn');
            const menuContainers = document.querySelectorAll('.menu-items-container');
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons and containers
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    menuContainers.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Show corresponding menu container
                    const category = this.getAttribute('data-category');
                    document.getElementById(`${category}-menu`).classList.add('active');
                });
            });
            
            // Food item modal
            const menuItems = document.querySelectorAll('.menu-item');
            const foodModal = document.querySelector('.food-modal');
            const modalImg = foodModal.querySelector('.modal-img');
            const modalTitle = foodModal.querySelector('.modal-title');
            const modalPrice = foodModal.querySelector('.modal-price');
            const modalDesc = foodModal.querySelector('.modal-desc');
            const closeModal = foodModal.querySelector('.close-modal');
            const minusBtn = foodModal.querySelector('.minus');
            const plusBtn = foodModal.querySelector('.plus');
            const quantityInput = foodModal.querySelector('.quantity-input');
            const addToCartBtn = foodModal.querySelector('.add-to-cart');
            
            // Open modal when menu item is clicked
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    const itemId = this.getAttribute('data-item');
                    const foodItem = foodItems[itemId];
                    
                    modalImg.src = foodItem.img;
                    modalImg.alt = foodItem.title;
                    modalTitle.textContent = foodItem.title;
                    modalPrice.textContent = `$${foodItem.price.toFixed(2)}`;
                    modalDesc.textContent = foodItem.desc;
                    
                    // Reset quantity to 1 when opening modal for a new item
                    quantityInput.value = 1;
                    
                    foodModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Close modal
            closeModal.addEventListener('click', function() {
                foodModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            // Close modal when clicking outside
            foodModal.addEventListener('click', function(e) {
                if (e.target === foodModal) {
                    foodModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Quantity controls
            minusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
            
            plusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
            
            // Add to cart functionality
            addToCartBtn.addEventListener('click', function() {
                const itemTitle = modalTitle.textContent;
                const itemId = parseInt(Object.keys(foodItems).find(key => foodItems[key].title === itemTitle));
                const foodItem = foodItems[itemId];
                const quantity = parseInt(quantityInput.value);
                
                // Check if item already exists in cart
                const existingItem = cart.find(item => item.id === itemId);
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({
                        id: foodItem.id,
                        title: foodItem.title,
                        price: foodItem.price,
                        img: foodItem.img,
                        quantity: quantity
                    });
                }
                
                // Update cart
                updateCart();
                
                // Close the modal
                foodModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
        
        // Reservation Form Handling
        document.getElementById('reservationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('res-name').value;
            const guests = document.getElementById('res-guests').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;
            
            // Format the date
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Format the time
            const timeParts = time.split(':');
            const hours = parseInt(timeParts[0]);
            const minutes = timeParts[1];
            const period = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedTime = `${formattedHours}:${minutes} ${period}`;
            
            // Show confirmation
            alert(`Thank you ${name}!\nYour table for ${guests} guests is reserved for:\n${formattedDate} at ${formattedTime}`);
            this.reset();
        });
        
        // Set min date for reservation form (today)
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('res-date').min = today;