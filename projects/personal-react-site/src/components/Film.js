import React from "react"
import {withToggler} from "./Toggler.js"
import RenderToggle from "./RenderToggle"

const Film = (props) => {
    const mouseOut = (event) => {
        if(props.on === false){
            props.toggle()
            // adding picture resize
        }
    }
    return(
        <div className={"movie"} onMouseLeave={mouseOut}>
            <h1 onClick={props.toggle}>{props.title}</h1>
            <div className={`baseClass ${props.on ? "displayNone" : "display"}`}>
                <RenderToggle render={({on, toggler2}) =>
                    <>
                        {on ?
                        <>
                            <img onClick={toggler2}  src={props.picture} alt="" />
                        </>
                        :
                        <>
                            <img onClick={toggler2} className={"zoom"} src={props.picture} alt="" />
                        </>
                        }
                    </>
                }/>
                <div>
                    <h4><b>Director:</b> <i>{props.director}</i></h4>
                    <h4><b>Producer:</b> <i>{props.producer}</i></h4>
                    <h4><b>Relase date:</b> <i>{props.release_date}</i></h4>
                    <h4><b>Rotten Tomatoes Rating:</b> <i>{props.rt_score}</i></h4>
                    <div><p><b>Description:</b></p><p>{props.description}</p></div>
                </div>
            </div>
        </div>
    )
}

export default withToggler(Film);