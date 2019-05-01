function sudokuValidator(x) {
    let result = true
    const arrOfBoxes = []
    const box1 = []
    const box2 = []
    const box3 = []
    const box4 = []
    const box5 = []
    const box6 = []
    const box7 = []
    const box8 = []
    const box9 = []
    // console.log(box1)
	for (let i = 0; i < x.length; i++){
        // for checking colum, row, and compiling boxes
        for (let j = 0; j < x[i].length; j++){
            // I need to check the column down and the row accross
            for (let k = 0; k < 9; k++){
                // column
                if (i !== k){
                    if (x[i][j] === x[k][j]){
                        console.log(`Found a duplicate with row ${i} column ${j} and row ${k} column ${j}`)
                        result = false
                    }
                }
                // row
                if (j !== k){
                    if (x[i][j] === x[i][k]){
                        console.log(`Found a duplicate with row ${i} column ${j} and row ${i} column ${k}`)
                        result = false
                    }
                }
            }
            // Compile in 9 boxes in one arr
            if (i >= 0 && i <= 2){
                if (j >= 0 && j <= 2){
                    box1.push(x[i][j])
                } else if (j >= 3 && j <= 5){
                    box2.push(x[i][j])
                } else if (j >= 6 && j <= 8){
                    box3.push(x[i][j])
                }
            } else if (i >= 3 && i <= 5){
                if (j >= 0 && j <= 2){
                    box4.push(x[i][j])
                } else if (j >= 3 && j <= 5){
                    box5.push(x[i][j])
                } else if (j >= 6 && j <= 8){
                    box6.push(x[i][j])
                }
            } else if (i >= 6 && i <= 8){
                if (j >= 0 && j <= 2){
                    box7.push(x[i][j])
                } else if (j >= 3 && j <= 5){
                    box8.push(x[i][j])
                } else if (j >= 6 && j <= 8){
                    box9.push(x[i][j])
                }
            }
            if (i === 8 && j === 8){
                arrOfBoxes.push(box1)
                arrOfBoxes.push(box2)
                arrOfBoxes.push(box3)
                arrOfBoxes.push(box4)
                arrOfBoxes.push(box5)
                arrOfBoxes.push(box6)
                arrOfBoxes.push(box7)
                arrOfBoxes.push(box8)
                arrOfBoxes.push(box9)
            }
        }
    }
    // for checking boxes
    for (let l = 0; l < arrOfBoxes.length; l++){
        for (let n = 0; n < arrOfBoxes[l].length; n++){
            for (let m = 0; m < 9; m++){
                if (n !== m){
                    if (arrOfBoxes[l][n] === arrOfBoxes[l][m]){
                        console.log(`Found a duplicate in box${l + 1}`)
                        result = false
                    }
                }
            }
        }
    }
    return result
}

console.log(
    sudokuValidator([
    [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
  ])
)

console.log(sudokuValidator([
    [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
    [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
    [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
    [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
    [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
    [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
    [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
    [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
    [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
  ]))