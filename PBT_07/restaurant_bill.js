function formatMoney(value) {
  const amount = value * 1000;
  return amount.toLocaleString('vi-VN') + 'đ';
}

function calculateBill(items, day, includeTip = false) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discountRate = 0;
  if (subtotal > 1000000) {
    discountRate = 0.15;
  } else if (subtotal > 500000) {
    discountRate = 0.10;
  }

  const isWednesday = String(day).toLowerCase() === 'wednesday' || String(day).toLowerCase() === 'thứ 3';
  const extraDayDiscount = isWednesday ? 0.05 : 0;
  const totalDiscountRate = discountRate + extraDayDiscount;

  const discountValue = Math.round(subtotal * totalDiscountRate);
  const afterDiscount = subtotal - discountValue;
  const vatValue = Math.round(afterDiscount * 0.08);
  const tipValue = includeTip ? Math.round(afterDiscount * 0.05) : 0;
  const totalPayment = afterDiscount + vatValue + tipValue;

  return {
    items,
    subtotal,
    discountRate: totalDiscountRate,
    discountValue,
    afterDiscount,
    vatValue,
    tipValue,
    totalPayment,
  };
}

function printBill(bill) {
  const line = '═'.repeat(38);
  console.log('╔' + line + '╗');
  console.log('║        HÓA ĐƠN NHÀ HÀNG           ║');
  console.log('╠' + line + '╣');

  bill.items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    const lineText = `${index + 1}. ${item.name}`.padEnd(13);
    const qtyText = `x${item.quantity}`.padEnd(5);
    const priceText = `@${item.price}k`.padEnd(8);
    const totalText = `= ${itemTotal}k`.padEnd(8);
    console.log(`║ ${lineText}${qtyText}${priceText}${totalText} ║`);
  });

  console.log('╠' + line + '╣');
  const rows = [
    ['Tổng cộng:', formatMoney(bill.subtotal)],
    [`Giảm giá (${Math.round(bill.discountRate * 100)}%):`, formatMoney(bill.discountValue)],
    ['VAT (8%):', formatMoney(bill.vatValue)],
    ['Tip (5%):', formatMoney(bill.tipValue)],
  ];

  rows.forEach(([label, value]) => {
    const text = label.padEnd(26);
    const amount = value.padStart(10);
    console.log(`║ ${text}${amount} ║`);
  });

  console.log('╠' + line + '╣');
  const totalLine = 'THANH TOÁN:'.padEnd(26) + formatMoney(bill.totalPayment).padStart(10);
  console.log(`║ ${totalLine} ║`);
  console.log('╚' + line + '╝');
}

const sampleItems = [
  { name: 'Phở bò', quantity: 2, price: 65 },
  { name: 'Trà đá', quantity: 3, price: 5 },
  { name: 'Bún chả', quantity: 1, price: 55 },
];

const bill = calculateBill(sampleItems, 'Wednesday', true);
printBill(bill);
