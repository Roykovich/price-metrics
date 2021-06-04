export const randomPrices = (min, max) => {
  const prices = [];

  for (let i = 0; i < 7; i++) {
    prices.push(parseFloat((Math.random() * (max - min) + min).toFixed(5)));
  }

  return prices;
};
