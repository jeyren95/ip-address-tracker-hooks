import React, {useState} from "react"
import "./SearchBar.css"

const SearchBar = ({onSearchSubmit}) => {
//I need to first set the state of my searchbar to be empty
  const [term, setTerm] = useState("")

//When the user types the input, i have to change the state of searchbar to what was typed
  const onInputChange = (event) => {
    setTerm(event.target.value);
  }

//When the user submits the form, i have to inform the parent component so that the parent component can make the API request
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term)
  }


  return (
    <div className="search-bar">
      <h1>IP Address Tracker</h1>
      <div className="search-input">
        <form onSubmit={onFormSubmit} className="form">
          <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={term}
          onChange={onInputChange}
          />
          <button className="button" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg></button>
        </form>
      </div>

    </div>
  )


}

export default SearchBar
