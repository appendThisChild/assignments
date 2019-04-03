import React from "react"

const HomeForm = props => {
    const { handleSubmit, handleChange, btnText, title, content } = props
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea
                type="text"
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="Content"
            />
            <button>{btnText}</button>
        </form>
    )
}

export default HomeForm;