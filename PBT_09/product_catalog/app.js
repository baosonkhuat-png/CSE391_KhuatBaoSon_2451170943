// ================= DATA =================
const products = [
    { id: 1, name: "iPhone 16 Pro Max", price: 34990000, category: "phone", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 2, name: "iPhone 16", price: 22990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 3, name: "Samsung Galaxy S24 Ultra", price: 29990000, category: "phone", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 4, name: "MacBook Pro M3", price: 39990000, category: "laptop", image: "https://placehold.co/200", rating: 4.9, inStock: true },
    { id: 5, name: "Asus ROG Strix G16", price: 31490000, category: "laptop", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 6, name: "Dell XPS 13", price: 28500000, category: "laptop", image: "https://placehold.co/200", rating: 4.4, inStock: false },
    { id: 7, name: "iPad Pro M4", price: 26990000, category: "tablet", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 8, name: "Samsung Galaxy Tab S9", price: 17990000, category: "tablet", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 9, name: "Sony WH-1000XM5", price: 6490000, category: "accessories", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 10, name: "Apple Watch Ultra 2", price: 21990000, category: "accessories", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 11, name: "AirPods Pro 2", price: 5790000, category: "accessories", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 12, name: "Keychron K2 V2", price: 1850000, category: "accessories", image: "https://placehold.co/200", rating: 4.2, inStock: false },
    { id: 13, name: "Logitech MX Master 3S", price: 2490000, category: "accessories", image: "https://placehold.co/200", rating: 4.8, inStock: true }
];

let cartCount = 0;
let currentCategory = "all";
let searchQuery = "";
let currentSort = "default";

const app = document.getElementById("app");

function initLayout() {
    const header = document.createElement("header");
    
    const title = document.createElement("h1");
    title.textContent = "Product Catalog";
    
    const headerActions = document.createElement("div");
    headerActions.className = "header-actions";
    
    const modeBtn = document.createElement("button");
    modeBtn.id = "dark-mode-toggle";
    modeBtn.textContent = "Dark Mode";
    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
    
    const cartWrapper = document.createElement("div");
    cartWrapper.className = "cart-icon-wrapper";
    cartWrapper.innerHTML = "🛒";
    const badge = document.createElement("span");
    badge.id = "cart-badge";
    badge.className = "cart-badge";
    badge.textContent = "0";
    cartWrapper.appendChild(badge);
    
    headerActions.append(modeBtn, cartWrapper);
    header.append(title, headerActions);
    
    const controlsPanel = document.createElement("div");
    controlsPanel.className = "controls-panel";
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Tìm kiếm sản phẩm...";
    searchInput.addEventListener("input", (e) => searchProducts(e.target.value));
    
    const categoryGroup = document.createElement("div");
    categoryGroup.className = "category-group";
    const categories = ["all", "phone", "laptop", "tablet", "accessories"];
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat.toUpperCase();
        if(cat === "all") btn.classList.add("active");
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".category-group button").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            filterByCategory(cat);
        });
        categoryGroup.appendChild(btn);
    });
    
    const sortSelect = document.createElement("select");
    sortSelect.innerHTML = `
        <option value="default">Sắp xếp: Mặc định</option>
        <option value="price-asc">Giá: Thấp đến Cao</option>
        <option value="price-desc">Giá: Cao đến Thấp</option>
        <option value="name-az">Tên: A -> Z</option>
        <option value="rating-desc">Đánh giá cao nhất</option>
    `;
    sortSelect.addEventListener("change", (e) => sortProducts(e.target.value));
    
    controlsPanel.append(searchInput, categoryGroup, sortSelect);
    
    const productGrid = document.createElement("div");
    productGrid.className = "product-grid";
    productGrid.id = "product-grid";
    
    app.append(header, controlsPanel, productGrid);
}

function renderProducts(productsToRender) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; 
    
    if(productsToRender.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Không tìm thấy sản phẩm nào.</p>";
        return;
    }

    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.addEventListener("click", (e) => {
            if(!e.target.classList.contains("add-to-cart-btn")) {
                openProductModal(product);
            }
        });
        
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        
        const info = document.createElement("div");
        info.className = "product-info";
        info.innerHTML = `
            <h3>${product.name}</h3>
            <div class="product-price">${product.price.toLocaleString('vi-VN')} đ</div>
            <div style="font-size: 0.9rem; margin-bottom:10px;">⭐ ${product.rating} | ${product.inStock ? "🟢 Còn hàng" : "🔴 Hết hàng"}</div>
        `;
        
        const addToCartBtn = document.createElement("button");
        addToCartBtn.className = "add-to-cart-btn";
        addToCartBtn.textContent = "Thêm giỏ";
        addToCartBtn.disabled = !product.inStock;
        if(!product.inStock) addToCartBtn.style.opacity = 0.5;
        
        addToCartBtn.addEventListener("click", () => {
            cartCount++;
            document.getElementById("cart-badge").textContent = cartCount;
        });
        
        card.append(img, info, addToCartBtn);
        grid.appendChild(card);
    });
}

function applyFilterAndSort() {
    let filtered = products;
    
    if (currentCategory !== "all") {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    if (searchQuery.trim() !== "") {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    if (currentSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name-az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "rating-desc") {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    
    renderProducts(filtered);
}

function filterByCategory(category) {
    currentCategory = category;
    applyFilterAndSort();
}

function searchProducts(query) {
    searchQuery = query;
    applyFilterAndSort();
}

function sortProducts(sortType) {
    currentSort = sortType;
    applyFilterAndSort();
}

function openProductModal(product) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    
    const modal = document.createElement("div");
    modal.className = "modal-content";
    
    const closeBtn = document.createElement("span");
    closeBtn.className = "close-modal";
    closeBtn.innerHTML = "&times;";
    
    const details = document.createElement("div");
    details.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:100%; max-height:250px; object-fit:contain; border-radius:8px; margin-bottom:15px;">
        <h2>${product.name}</h2>
        <p><strong>Danh mục:</strong> ${product.category.toUpperCase()}</p>
        <p><strong>Giá niêm yết:</strong> <span style="color:red; font-weight:bold">${product.price.toLocaleString('vi-VN')} đ</span></p>
        <p><strong>Đánh giá sản phẩm:</strong> ⭐ ${product.rating} / 5 tinh hoa</p>
        <p><strong>Tình trạng kho:</strong> ${product.inStock ? "🟢 Đang sẵn hàng tại shop" : "🔴 Tạm hết hàng"}</p>
    `;
    
    modal.append(closeBtn, details);
    overlay.appendChild(modal);
    app.appendChild(overlay);
    
    const closeModal = () => overlay.remove();
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if(e.target === overlay) closeModal();
    });
}


initLayout();
applyFilterAndSort();