function countCode(str) { 
    let x = str.split("")
    let tally = 0
    for (let i = 0; i < x.length; i++){
        if (x[i] === "c" && x[i + 1] === "o" & x[i + 3] === "e"){
            tally++
        }
    }
  console.log(tally)
}
countCode("aaacodebbb") 
countCode("codexxcode")
countCode("cozexxcope")