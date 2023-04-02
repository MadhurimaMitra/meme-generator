import React from "react"
import TrollFace from "./TrollFace.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={TrollFace}
                className="header--image"
                alt="troll-face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Create a Meme</h4>
        </header>
    )
}