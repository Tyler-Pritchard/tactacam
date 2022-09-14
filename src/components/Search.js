import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";


const Search = () => {
  const history = useNavigate();
  const searchterm = useInput("");

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      if (!searchterm.value.trim()) {
        return toast.dark("Please enter the searchterm");
      }

      history.push(`/results/${searchterm.value}`);
      searchterm.setValue("");
    }
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={searchterm.value}
        onKeyDown={handleSearch}
        onChange={searchterm.onChange}
      />
    </div>
  );
};

export default Search;