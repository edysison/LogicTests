const Test = (commands) => {
    const position = {x:0, y:0}
    for (let i = 0; i < commands.length; i++) {
        const element = commands[i];
        const [direction, value] = element.split(' ');
        switch(direction) {
            case 'forward':
                position.x+=parseInt(value);
            break;
            case 'down':
                position.y+=parseInt(value);
            break;
            case 'up':
                position.y-=parseInt(value);
            break;
            default:
        }
    }
    return position.x * position.y
  };
  
  module.exports = { Test };
  