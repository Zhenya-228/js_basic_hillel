function isPrimearr(arr) {
    return arr.filter(num => {
        if (num <= 1) {
            return false};
        if (num === 2) 
            {return true};
        if (num % 2 === 0) {
            return false};
        
        for (let i = 3; i <= num / 2; i += 2) {
            if (num % i === 0) {
                return false};
        }
        
        return true;
    });
}

console.log(isPrimearr([5, 19, 4, 7, 6, 22]))