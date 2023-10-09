import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Zoom from "@mui/material/Zoom";

function Input(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);


    function updateNote(event) {
        const {name, value} = event.target;

        setNote((previousValue) => {
            return ({
                ...previousValue,
                [name]: value
            })
        })
    }

    function expanded () {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                { isExpanded && (
                    <input name="title" value={note.title} onChange={updateNote} placeholder="Enter Title" />
                )}
                <textarea name="content" value={note.content} onChange={updateNote} onClick={expanded} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={(event) => {
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
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default Input;