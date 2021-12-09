const Test = (commands) => {
  const position = { x: 0, y: 0, aim: 0 };
  for (let i = 0; i < commands.length; i++) {
    const element = commands[i];
    const [direction, value] = element.split(' ');
    const parsedValue = parseInt(value);
    switch (direction) {
      case 'forward':
        position.x += parsedValue;
        position.y += parsedValue * position.aim;
        break;
      case 'down':
        position.aim += parsedValue;
        break;
      case 'up':
        position.aim -= parsedValue;
        break;
      default:
    }
  }
  return position.x * position.y;
};

module.exports = { Test };
