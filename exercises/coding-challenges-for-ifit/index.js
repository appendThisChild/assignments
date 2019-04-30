function createPackage(small, big, goal) {
    let numberOfBigBagsUsed = 0
    for (let i = 1; i < big + 1; i++){
       if (goal < 5 * i){
            break;
       } else {
        numberOfBigBagsUsed++
       }
    }
    const leftOverForSmallBags = goal - (numberOfBigBagsUsed * 5)
    if (leftOverForSmallBags > small){
        return -1
    } else {
        return leftOverForSmallBags
    }
}
console.log(createPackage(6,5,24))