export function formatMoney(money = 0) {
  const formatted = money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  return `${formatted.substr(0, formatted.length - 3)},${formatted.substr(
    formatted.length - 2
  )} €`;
}
