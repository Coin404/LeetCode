
var longestUnivaluePath = function(root) {
    let res = 0;
    const dfs = (root) => {
        if (!root) {
            return 0;
        }
        // left记录左最长同值，right记录右最长同值
        let left = dfs(root.left), right = dfs(root.right);
        let left1 = 0, right1 = 0;
        if (root.left && root.left.val === root.val) {
            left1 = left + 1;
        }
        if (root.right && root.right.val === root.val) {
            right1 = right + 1;
        }
        // res为左最长+右最长
        res = Math.max(res, left1 + right1);
        return Math.max(left1, right1);
    }
    dfs(root);
    return res;
};

// 248ms
// 70.3MB