/**
 * @param {number[][]} grid
 * @return {number}
 */
//  1020 飞地的数量

//深度优先搜索  从网格边界的陆地单元格出发，无法访问的单元格时飞地
 var numEnclaves = function(grid) {
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    //分别代表着 左走 右走 上走 下走
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(()=>new Array(n).fill(false));

    const dfs = (grid,row,col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] == 0 || visited[row][col]) {
            return;
        }
        //出界  是海  已经访问过
        visited[row][col] = true;
        for(const dir in dirs)
        {
            dfs(grid,row + dir[0],col + dir[1]);
            //遍历该点周围的点
        }
    }

    //遍历上下单元格
    for(let i = 0;i < m;i++){
        dfs(grid,i,0);
        dfs(grid,i,n-1);
    }

    //遍历左右单元格                
    for (let j = 1; j < n - 1; j++) {
        dfs(grid, 0, j);
        dfs(grid, m - 1, j);
    }

    //此时标记已经做完，遍历访问数组
    let answer = 0;
    for(let i = 1; i < m-1; i++)
    {
        for(let j = 1; j < n-1 ; j++){
            if(grid[i][j] == 1 && !visited[i][j]){
                answer++;
            }
        }
    }

    return answer;
};


//广度优先搜索  原理类似
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    //分别代表着 左走 右走 上走 下走
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m).fill(0).map(()=>new Array(n).fill(false));
    const queue = [];

    for(let i = 0 ; i < m ; i++){
        if(grid[i][0] == 1){
            visited[i][0] = true;
            queue.push[i,0];
        }
        if(grid[i][n-1] == 1){
            visited[i][n-1] = true;
            queue.push[i,n-1];
        }
        //左右两个边界中的陆地入队
    }

    for (let j = 1; j < n - 1; j++) {
        if (grid[0][j] === 1) {
            visited[0][j] = true;
            queue.push([0, j]);
        }
        if (grid[m - 1][j] === 1) {
            visited[m - 1][j] = true;
            queue.push([m - 1, j]);
        }
        //上下两个边界中的陆地入队
    }

    while(queue.length){
        const cell = queue.shift(); 
        //移除前端并且返回
        const currRow = cell[0],currCol =cell[1];
        //得到陆地的坐标
        for(const dir in dirs){
            const nextRow = currRow + dir[0];
            const nextCol = currCol + dir[1];
            //往该点周围遍历
            if(nextRow >= 0 && nextRow < m && nextRow >= 0 && nextRow <n && grid[nextRow][nextCol] ==1 && !visited[nextRow][nextCol]){
                visited[nextRow][nextCol] = true;
                queue.push([nextRow][nextCol]);
            }
        }
    }
    let answer = 0;
    for(let i = 1; i < m-1; i++)
    {
        for(let j = 1; j < n-1 ; j++){
            if(grid[i][j] == 1 && !visited[i][j]){
                answer++;
            }
        }
    }

    return answer;



//并查集 判断是否与边界的陆地是同一个连通分量
//二维数组变成一维数组
//判断是否是在边界
//判断其父亲节点
//


