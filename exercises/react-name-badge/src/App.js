import React from "react"
import Badge from "./components/Badge.js"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phoneNumber: '',
            favoriteFood: '',
            about: '',
            badges: [
                {
                firstName: 'Ryan',
                lastName: 'Pettingill',
                email: '123@aol.com',
                placeOfBirth: 'Anywhere',
                phoneNumber: '8008135',
                favoriteFood: 'Anything',
                about: 'Something special',
            }
        ]
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, about} = this.state
        const person = {
                        firstName: firstName, 
                        lastName: lastName, 
                        email: email, 
                        placeOfBirth: placeOfBirth, 
                        phoneNumber: phoneNumber, 
                        favoriteFood: favoriteFood, 
                        about: about
                    }

        this.setState(prevState => (
            {badges: [person, ...prevState.badges],
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phoneNumber: '',
            favoriteFood: '',
            about: ''
            }
            ))
    }
    render(){
        const badgesMapped = this.state.badges.map((person, i) => <Badge key={i} {...person} />)
        return(
            <div className={"flex"}>
                <form className={"form"} onSubmit={this.handleSubmit}>
                    <input className={"input1"} type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} required placeholder="First Name"/>
                    <input className={"input2"} type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} required placeholder="Last Name"/>
                    <input className={"input1"} type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required placeholder="Email"/>
                    <input className={"input2"} type="text" name="placeOfBirth" value={this.state.placeOfBirth} onChange={this.handleInputChange} required placeholder="Place of Birth"/>
                    <input className={"input1"} type="number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} required placeholder="Phone Number"/>
                    <input className={"input2"} type="text" name="favoriteFood" value={this.state.favoriteFood} onChange={this.handleInputChange} required placeholder="Favorite Food"/>
                    <textarea name="about" value={this.state.about} onChange={this.handleInputChange} placeholder="Something interesting about yourself..."/>
                    <button>Submit</button>
                </form>
                {badgesMapped}
            </div>
        )
    }
}

export default App;