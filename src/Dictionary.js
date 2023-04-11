import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("")

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function handleResponse(response) {
    console.log(response.data[0])
  }

  //API documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    alert(`Searching for ${keyword}`)
    axios.get(apiUrl).then(handleResponse)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  )
}