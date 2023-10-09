import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Input from "./Input";

function App() {
    const [notes, updateNotes] = useState([]);

    function addNotes(newNote) {
        updateNotes((currentList) => {
            return (
                [...currentList, newNote]
            )
        });
    }

    function deleteNote(id) {
        updateNotes((currentList) => {
            return (
                currentList.filter((item, index) => {
                    return index !== id
                })
            )
        })
    }

    const RenderNotes = notes.map((item, index) => {
        return (
            <Note 
                key = {index}
                id = {index}
                title = {item.title}
                content = {item.content}
                deleteNote={deleteNote}
            />
        );
    });

    return (
        <div>
            <Header />
            <Input 
                onAdd={addNotes}
            />
            {RenderNotes}
            <Footer />
        </div>
    );
}

export default App;