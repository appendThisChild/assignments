import React from "react"

function Die(props){
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
    if (props.diceHold !== 0){
        return (
            <div className={"dieHold"} onClick={props.click}>
            {displayDice(props.display)}
            </div>  
        )
    } else {
        return(
            <div className={"die"} onClick={props.click}>
            {displayDice(props.display)}
            </div>  
        )
    }
    
}

export default Die;