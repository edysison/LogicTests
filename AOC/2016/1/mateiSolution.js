solve = (instr) => {
  const ins = instr.split(", ").map((x) => ({
    dir: x[0] === "R" ? 1 : 3,
    dist: Number(x.substr(1)),
  }));
  let x = 0;
  let y = 0;
  let dir = 0;
  const locs = new Set();
  for (const z of ins) {
    dir = (dir + z.dir) % 4;
    for (let i = 0; i < z.dist; ++i) {
      if (dir === 0) x++;
      else if (dir === 1) y++;
      else if (dir === 2) x--;
      else y--;
      const coord = x + "," + y;
      if (locs.has(coord)) return Math.abs(x) + Math.abs(y);
      locs.add(coord);
    }
  }
};
