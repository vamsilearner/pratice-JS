function fibonacciSeries(n) {
    if (n <= 0) {
        return [];
    } else if(n ===1) {
        return [0];
    } else {
        let fibArr = [0,1];
        for (let i = 2; i <= n; i++) {
            fibArr.push(fibArr[i-1] + fibArr[i-2]);
        }
        return fibArr;
    }
}
console.log(fibonacciSeries(10));