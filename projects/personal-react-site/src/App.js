import React from "react"
import Films from "./components/Films.js"
import Home from "./components/Home.js"
import Submissions from "./components/Submissions"
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import { withApi } from "./context/ApiProvider.js"

const App = props => {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" render={renderProps => <Home {...renderProps}/>}/>
                    <Route path="/films" render={renderProps =>  <Films films={props.films} makeAlphaOrder={props.makeAlphaOrder} makeReleaseOrder={props.makeReleaseOrder} pictures={props.moviePictures} {...renderProps}/>}/>
                    <Route path="/submissions" render={renderProps => <Submissions {...renderProps}/>}/>
                </Switch>
                <Footer />
            </div>
        )
}

export default withApi(App);