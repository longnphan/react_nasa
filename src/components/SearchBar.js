import React from "react";

function SearchBar({ onDateChange }) {
    return (
        <div className="ui container search-bar black inverted segment">
            <form className="ui form">
                <div className="field">
                    <label style={{ color: "white" }}> Select Date </label>
                    <input
                        type="date"
                        min="1995-06-20" //minimum date on picture of the day
                        max={new Date().toLocaleDateString("en-ca")}
                        onChange={onDateChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
