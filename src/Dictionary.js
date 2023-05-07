import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
    setLoaded(true);
  }
  function load() {
    setLoaded(true);
    search();
  }
  //API documentation: https://dictionaryapi.dev/
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <div className="suggestion">
          try searching for a word like sunset, yoga, breathe...
        </div>
      </section>
      <Results results={results} />
    </div>
  )
  } else {
    load();
  }
}