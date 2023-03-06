// 827 最大人工岛

/**
 * @param {number[][]} grid
 * @return {number}
 */
 const d = [0, -1, 0, 1, 0];
 var largestIsland = function(grid) {
     let n = grid.length, res = 0;
     const tag = new Array(n).fill(0).map(() => new Array(n).fill(0));
     const area = new Map();
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < n; j++) {
             if (grid[i][j] === 1 && tag[i][j] === 0) {
                 const t = i * n + j + 1;
                 area.set(t, dfs(grid, i, j, tag, t));
                 res = Math.max(res, area.get(t));
             }
         }
     }
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < n; j++) {
             if (grid[i][j] === 0) {
                 let z = 1;
                 const connected = new Set();
                 for (let k = 0; k < 4; k++) {
                     let x = i + d[k], y = j + d[k + 1];
                     if (!valid(n, x, y) || tag[x][y] == 0 || connected.has(tag[x][y])) {
                         continue;
                     }
                     z += area.get(tag[x][y]);
                     connected.add(tag[x][y]);
                 }
                 res = Math.max(res, z);
             }
         }
     }
     return res;
 }
 
 const dfs = (grid, x, y, tag, t) => {
     let n = grid.length, res = 1;
     tag[x][y] = t;
     for (let i = 0; i < 4; i++) {
         let x1 = x + d[i], y1 = y + d[i + 1];
         if (valid(n, x1, y1) && grid[x1][y1] === 1 && tag[x1][y1] === 0) {
             res += dfs(grid, x1, y1, tag, t);
         }
     }
     return res;
 }
 
 const valid = (n, x, y) => {
     return x >= 0 && x < n && y >= 0 && y < n;
 };