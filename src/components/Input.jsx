import React, { useState } from "react";

function Input(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function updateNote(event) {
        const {name, value} = event.target;

        setNote((previousValue) => {
            return ({
                ...previousValue,
                [name]: value
            })
        })
    }

    return (
        <div>
            <form>
                <input name="title" value={note.title} onChange={updateNote} placeholder="Enter Title" />
                <textarea name="content" value={note.content} onChange={updateNote} placeholder="Take a note..." rows="3" />
                <button onClick={(event) => {
                    event.preventDefault()
                    props.onAdd(note);
                    setNote(() => {
                        return (
                            {
                                title: "",
                                content: ""
                            }
                        )
                    });
                }}>Add</button>
            </form>
        </div>
    );
}

export default Input;