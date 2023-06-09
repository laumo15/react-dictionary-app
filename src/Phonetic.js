import "./Phonetic.css";
import React from "react";

export default function Phonetic(props) {
    if (props.phonetic.audio) {
        return (
          <div className="Phonetic">
            {props.phonetic.text}{" "}
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
          </div>
        )
    } else {
        return (
          <div className="Phonetic text">
            {props.phonetic.text}{" "}
          </div>
        )
    }
    
}