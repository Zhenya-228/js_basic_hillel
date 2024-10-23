function isSimple(num) {
    if (num <= 1) {
        console.log(`Число ${num} не є простим числом`);
        return;
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(`Число ${num} не є простим числом`);
            return;
        }
    }
    
    console.log(`Число ${num} є простим числом`); 
}

isSimple(7);
isSimple(8); 