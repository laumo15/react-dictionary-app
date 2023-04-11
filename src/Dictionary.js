import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function handleResponse(response) {
    setResults(response.data[0])
  }

  //API documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
          </form>
          <Results results={results} />
    </div>
  )
}