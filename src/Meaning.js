import "./Meaning.css";
import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
            return (
              <div key={index}>
                <div className="Definition">
                  {definitions.definition} </div>
                <div className="Example">
                  {definitions.example}
                </div>
                <Synonyms synonyms = {definitions.synonyms} />
              </div>
            )
        })}
      </div>
    )
}