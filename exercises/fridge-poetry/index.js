function canBuild(s1, s2) {
    const arr1 = s1.split('')
    const arr2 = s2.split('')
    for (let i = 0; i < arr1.length; i++){
        const indexForChar = arr2.indexOf(arr1[i])
        console.log(indexForChar)
        if (indexForChar === -1){
            console.log(false)
            return false
        } else {
            arr2.splice(indexForChar, 1)
        }
    }
    console.log(true)
    return true
}

canBuild("got 2 go", "gogogo 2 today")

canBuild("sit on top", "its a moo point")

canBuild("long high add or", "highway road go long")

canBuild("fill tuck mid", "truck falls dim")