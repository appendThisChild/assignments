function comp(str1, str2) {
	const arg1 = numOfLetters(str1)
	const arg2 = numOfLetters(str2)
	if (arg1 === arg2){
		console.log(true)
	} else {
        console.log(false)
    }
}
const numOfLetters = (string) => {
	const arr = string.split('')
    console.log(arr.length)
	return arr.length
}

comp('ab','cde')