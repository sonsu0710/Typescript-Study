"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0)
            answer += (n / i);
    }
    return answer;
}
console.log(solution(5));
