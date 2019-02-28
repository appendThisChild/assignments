import React from "react"

function Score(props){
    const displayDice = (num) => {
        if (num === 1){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 4){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        } else if (num === 2){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 0 || i === 8){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        } else if (num === 3){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 0 || i === 4 || i === 8){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        } else if (num === 4){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 0 || i === 2 || i === 6 || i === 8){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        } else if (num === 5){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 0 || i === 2 || i === 6 || i === 8){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else if (i === 4){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        } else if (num === 6){
            let diceOne = []
            for (let i = 0; i < 9; i++){
                if (i === 0 || i === 2 || i === 6 || i === 8){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else if (i === 3 || i === 5){
                    diceOne.push(<div key={i} className={"blackCircle"}></div>)
                } else {
                    diceOne.push(<div key={i} className={"whiteCircle"}></div>)
                }
            }
            return diceOne.map(display => display)
        }
    }
    const displayScore = props.display.map((die, i) => <div key={i}className={"die2"}>{displayDice(die)}</div>)
    const totalDie = props.display.reduce((sum, num) => {return sum + (num)}, 0)
    return(
        <div className={"fiveDice2"}>
           <h1 className={"total2"}>Total: {totalDie}</h1>
           {displayScore} 
           <h1 className={"total2"}>Round: {props.id}</h1>
        </div>
    )
}

export default Score;