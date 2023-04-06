function sumOfEvenSquares(arr){
    // method 1
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
        
    //     if(arr[i] % 2 == 0){
    //         console.log(arr[i])
    //         sum += arr[i] * arr[i]; 
    //     }
        
    // }
    // return sum

    // method 2
    let sum = 0;
    for(let i of arr){        
        if(i % 2 == 0){
            console.log(i)
            sum += i * i; 
        }        
    }
    return sum


}
const arr = [1, 2, 3, 4, 5];
console.log(sumOfEvenSquares(arr))