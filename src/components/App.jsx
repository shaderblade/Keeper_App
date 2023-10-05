import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

const RenderNotes = notes.map((item) => {
    return (
        <Note 
            key = {item.key}
            title = {item.title}
            content = {item.content}
        />
    )
});

function App() {
    return (
        <div>
            <Header />
            {RenderNotes}
            <Footer />
        </div>
    );
}

export default App;