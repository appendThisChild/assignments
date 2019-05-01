function oddProduct(arr) {
	let result = 1 
	for (let i = 0; i < arr.length; i++){
		if (arr[i] % 2 !== 0){
            
            result *= arr[i]
            console.log(arr[i])
		}
	}
	return result
}

console.log(oddProduct([1,4,3,5,1,2,6,4,7]))