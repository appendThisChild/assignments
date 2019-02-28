import React from "react"
import FriendsList from "./components/FriendsList"

class App extends React.Component {

    render(){
        return (
            <div className="app-div">
                <FriendsList />
            </div>
        )
    }
}

export default App;