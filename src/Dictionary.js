import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  //API documentation: https://dictionaryapi.dev/
  function handleDictionaryResponse(response) {
    setResults(response.data[0])
  }

  //API documentation: https://www.pexels.com/api/documentation/
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse)
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`
    let pexelsApiKey =
      "l8hy5yb88JB8Jo9d6iUyrEs6thUDOiWvvNH81wihUM9CeW0CuZFj6AWb"
    const headers = { Authorization: `${pexelsApiKey}` }
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse)
    setLoaded(true)
  }
  function load() {
    setLoaded(true)
    search()
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="suggestion">
            try searching for a word like sunset, yoga, breathe...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load()
  }
}