import React from "react"
import Film from "./Film.js"
import RenderToggle from "./RenderToggle.js"

const Films = (props) => {

    const moviesMapped = props.films.map((movie, i) => { 
        let picture = "";
        for (let i = 0; i < props.pictures.length; i++){
            if (props.pictures[i].title === movie.title){
                picture = props.pictures[i].imgUrl
            }
        }
        // Add Id to each film component 
        // 
        // 
        // 
        return <Film key={movie.id} id={movie.id} picture={picture} {...movie}/>
    })

    return(
        <div className={"filmsContainer"}>
            <ul className={"sortBy"}>
                <li>Sort by:</li>
                <div>
                    <RenderToggle  render={({on, toggler}) => 
                        <>
                            <li onClick={() => props.makeAlphaOrder({on})}>Alphabet </li>
                            {on ? 
                            <>
                                <span onClick={() => {
                                toggler(props.makeAlphaOrder)
                                }}>&#9662;</span>
                            </>
                            :
                            <>
                                <span onClick={() => {
                                    toggler(props.makeAlphaOrder)
                                }}>&#9652;</span>
                            </>
                            }
                        </>
                    }/>
                </div>
                <div>
                    <RenderToggle  render={({on, toggler}) => 
                        <>
                            <li onClick={() => props.makeReleaseOrder({on})}>Release Date </li>
                            {on ? 
                            <>
                                <span onClick={() => {
                                toggler(props.makeReleaseOrder)
                                }}>&#9662;</span>
                            </>
                            :
                            <>
                                <span onClick={() => {
                                    toggler(props.makeReleaseOrder)
                                }}>&#9652;</span>
                            </>
                            }
                        </>
                    }/>
                </div>
            </ul>
            <div className={"movieContainer"}>
               {moviesMapped} 
            </div>
        </div>
    )
}

export default Films;