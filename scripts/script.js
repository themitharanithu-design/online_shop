 // Open Modal Function
        function openDetails(title, details) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDesc').innerHTML = details;
            document.getElementById('productModal').style.display = 'flex';
        }

        // Close Modal Function
        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
        }

        // Search Functionality
        function searchProducts() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let cards = document.getElementsByClassName('product-card');

            for (let i = 0; i < cards.length; i++) {
                let name = cards[i].getAttribute('data-name');
                cards[i].style.display = name.toLowerCase().includes(input) ? "block" : "none";
            }
        }