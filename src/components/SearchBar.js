import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment" style={{ marginTop: "20px" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
