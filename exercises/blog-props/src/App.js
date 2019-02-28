import React from "react"
import Card from "./components/Card.js"

class App extends React.Component {

    render(){
        const vacationSpots = [
            {
              place: "Meridian, Idaho",
              price: 40,
              timeToGo: "Spring"
            },{
              place: "Cancun",
              price: 900,
              timeToGo: "Winter"
            },{
              place: "China",
              price: 1200,
              timeToGo: "Fall"
            },{
              place: "Russia",
              price: 1100,
              timeToGo: "Summer"
            },{
              place: "Lebanon",
              price: 400,
              timeToGo: "Spring"
            }
        ]
        const spot = vacationSpots.map((spot, i) => <Card key={i} place={spot.place} price={spot.price} toGo={spot.timeToGo}/>)
        return(
            <div className="spots-div">
                {spot}
            </div>
        )
    }
}

export default App;