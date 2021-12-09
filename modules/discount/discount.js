export default (price, discountPercentage) => {
  const discount = (discountPercentage * price) / 100
  return price - discount
}