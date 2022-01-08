const Test = (data) => {
  const order = data.shift();
  const cards = [];
  let count = 0;
  for (let i = 0; i < data.length; i += 1) {
    const card = data[i];
    if (card === '') {
      continue;
    }
    let total = 1;
    const elements = [];
    elements[count] = card.split(' ').map((element) => {
      const parsedData = parseInt(element);
      total *= parsedData;
      return parsedData;
    });
    cards.push({ total, elements });
    count += 1;
  }

  const orderArray = order.split(',');
  const winners = [];
  const checkForWin = (card) => {
    console.log(card);
    for (let col = 0; col < 5; col += 1) {
      let colString = '';
      for (let row = 0; row < 5; row += 1) {
        if (card.elements[row].join() === '') return true;
        if (card.elements[row][col] !== '') colString += '.';
      }
      if (colString === '') return true;
      colString = '';
    }
    return false;
  };

  for (let k = 0; k < orderArray.length; k += 1) {
    let max = 0;
    const sortedItem = parseInt(orderArray[k]);
    cards.map((card) => {
      const elementPosition = card.elements.indexOf(sortedItem);
      if (elementPosition) {
        card.total /= sortedItem;
        card.elements[elementPosition] = '';
        if (card.total > max) max = card.total;
        if (k >= 5 && checkForWin(card)) {
          winners.push(card);
        }
      }
    });
    if (winners.length > 0) {
      return winners.filter((winner) => card.total === max)[0];
    }
  }
  return 'no winners';
};

module.exports = { Test };
