function createCart() {
    let items = [];
    let discount = { type: null, value: 0 };

    function formatMoney(amount) {
        return amount.toLocaleString('vi-VN') + 'đ';
    }

    function findItem(productId) {
        return items.find(item => item.product.id === productId);
    }

    function calculateDiscount(total) {
        if (discount.type === 'percent') {
            return Math.round(total * discount.value);
        }
        if (discount.type === 'fixed') {
            return discount.value;
        }
        return 0;
    }

    return {
        addItem(product, quantity = 1) {
            const existing = findItem(product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },
        removeItem(productId) {
            items = items.filter(item => item.product.id !== productId);
        },
        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const existing = findItem(productId);
            if (existing) {
                existing.quantity = newQuantity;
            }
        },
        getTotal() {
            const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
            const discountAmount = calculateDiscount(subtotal);
            return subtotal - discountAmount;
        },
        applyDiscount(code) {
            const normalized = String(code).toUpperCase();
            if (normalized === 'SALE10') {
                discount = { type: 'percent', value: 0.10 };
            } else if (normalized === 'SALE20') {
                discount = { type: 'percent', value: 0.20 };
            } else if (normalized === 'FREESHIP') {
                discount = { type: 'fixed', value: 30000 };
            } else {
                discount = { type: null, value: 0 };
            }
        },
        printCart() {
            const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
            const discountAmount = calculateDiscount(subtotal);
            const total = subtotal - discountAmount;
            const line = '─'.repeat(52);
            console.log('┌' + line + '┐');
            console.log('│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │');
            console.log('├' + line + '┤');
            items.forEach((item, index) => {
                const name = item.product.name.padEnd(14);
                const qty = String(item.quantity).padStart(2);
                const price = item.product.price.toLocaleString('vi-VN').padStart(11);
                const lineTotal = (item.product.price * item.quantity).toLocaleString('vi-VN').padStart(11);
                console.log(`│ ${String(index + 1).padStart(2)} │ ${name} │ ${qty} │ ${price} │ ${lineTotal} │`);
            });
            console.log('├' + line + '┤');
            console.log(`│ Tổng cộng:${subtotal.toLocaleString('vi-VN').padStart(33)}đ       │`);
            if (discountAmount > 0) {
                const label = discount.type === 'percent' ? `Giảm giá (${Math.round(discount.value * 100)}%)` : 'Giảm giá';
            }
            console.log('└' + line + '┘');
            console.log(` Tổng :${total.toLocaleString('vi-VN').padStart(31)}đ `);

        },

        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },
        clearCart() {
            items = [];
            discount = { type: null, value: 0 };
        }
    };
}

const cart = createCart();
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2
cart.applyDiscount('SALE10');
cart.printCart();

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2

module.exports = { createCart };
