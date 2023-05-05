import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index) {
            return (
              <div key={index}>
                {definitions.definition} <br />
                <em>{definitions.example}</em>
                <Synonyms synonyms = {definitions.synonyms} />
              </div>
            )
        })}
      </div>
    )
}