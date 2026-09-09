class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let i=0;
        while(i<tokens.length) {
            if(!isNaN(Number(tokens[i]))) {
            stack.push(Number(tokens[i]));
            } else {
            let operand = tokens[i];
            let val2 = stack.pop();
            let val1 = stack.pop();
            if(operand === '+') {
                stack.push(val1 + val2);
            } else if (operand === '-') {
                stack.push(val1 - val2);
            } else if (operand === '*') {
                stack.push(val1 * val2);
            } else if (operand === '/') {
                stack.push(Math.trunc(val1 / val2));
            }
            }
            i++;
        }
        return stack[0];
    }
}
