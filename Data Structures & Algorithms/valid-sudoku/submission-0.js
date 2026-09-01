class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = [];
        let cols = [];
        let squares = new Map();

    
        for(let i=0; i <=8; i++) {
            rows[i] = new Set();
            cols[i] = new Set();
        }

        for(let i=0; i <= 2; i++) {
            for(let j=0; j <= 2; j++) {
                squares.set(`${i},${j}`, new Set());
            }
        }
        
        for(let r=0; r<=8; r++) {
            for(let c=0; c<=8; c++) {
            
                if(board[r][c] === ".") continue;

                if(rows[r].has(board[r][c]) || 
                cols[c].has(board[r][c]) || 
                squares.get(`${Math.floor(r/3)},${Math.floor(c/3)}`).has(board[r][c])) {
            return false;
            }
            
            

            rows[r].add(board[r][c]);
            cols[c].add(board[r][c]);
            squares.get(`${Math.floor(r/3)},${Math.floor(c/3)}`).add(board[r][c]);
        }
        }
        return true;
    }
}
