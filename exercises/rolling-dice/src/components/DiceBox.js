import React from "react"
import Die from "./Die"
import Score from "./Score"

class DiceBox extends React.Component {
    constructor(){
        super()
        this.state = {
            dice: [0,0,0,0,0],
            rolls: 0,
            displayDice: [0,0,0,0,0],
            roundScore: []
        }
    }
    handleDiceChange = () => {
        const newState = {dice: []}
        for (let i = 0; i < 5; i++){
            const y = Math.floor(Math.random() * 6)
            newState.dice.push(y + 1)
        }
        for (let i = 0; i < 5; i++){
           if (this.state.displayDice[i] !== 0){
               newState.dice.splice(i, 1, this.state.displayDice[i])
           } 
        }
        this.setState(newState)
    }
    handleChange = () => {
        if (this.state.rolls === 2){
            const x = {rolls: this.state.rolls + 1}
            this.setState({displayDice: [0,0,0,0,0]})
            this.setState(x)
        } else if (this.state.rolls <= 1){
            const x = {rolls: this.state.rolls + 1}
            this.setState(x)
        } else {
            const x = this.state.dice
            const currentRounds = this.state.roundScore
            currentRounds.unshift(x)
            this.setState({roundScore: currentRounds})
            this.setState({rolls: 1})
        }
        this.handleDiceChange()
    }
    handleHold = (die, spot) => {
        if (this.state.rolls < 3){
            if (this.state.displayDice[spot] !== 0){
                const currentDisplayHolds = this.state.displayDice
                currentDisplayHolds.splice(spot, 1, 0)
                this.setState({displayDice: currentDisplayHolds})
            } else {
                const currentDisplayHolds = this.state.displayDice
                currentDisplayHolds.splice(spot, 1, die)
                this.setState({displayDice: currentDisplayHolds})
            }
        }
    }
    render(){
        const reverseRoundIndex = []
        this.state.roundScore.map((die, i) => reverseRoundIndex.unshift(i))
        const displayDie = this.state.dice.map((die, i) => <Die key={i} diceHold={this.state.displayDice[i]} display={die} click={() => {this.handleHold(die, i)}}/>)
        const totalDie = this.state.dice.reduce((sum, num) => {return sum + num}, 0)
        const pastRounds = this.state.roundScore.map((score, i) => <Score key={i} id={reverseRoundIndex[i]} display={score}/>)
        if (this.state.rolls === 3){ 
            return(
                <div>
                    <div className={"fiveDiceFinal"}>
                        {displayDie}
                        <h1 className={"total"}>Total: {totalDie}</h1>
                        <button onClick={this.handleChange}>Roll</button>
                        <h1 className={"rolls"}>Rolls: {this.state.rolls}</h1>
                    </div>
                    {pastRounds}
                </div>
            )
        } else {
            return(
                <div>
                    <div className={"fiveDice"}>
                        {displayDie}
                        <h1 className={"total"}>Total: {totalDie}</h1>
                        <button onClick={this.handleChange}>Roll</button>
                        <h1 className={"rolls"}>Rolls: {this.state.rolls}</h1>
                    </div>
                    {pastRounds}
                </div>
            ) 
        }
    }
}

export default DiceBox;