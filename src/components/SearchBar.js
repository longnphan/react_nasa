import React from 'react'

function SearchBar({ onDateChange }) {

//Today's date in YYYY-MM-DD format to set max date on date input
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
  if(dd<10)dd='0'+dd;
  if(mm<10) mm='0'+mm;
today = yyyy+'-'+mm+'-'+dd;
/////////////////////////////////////////////////////////////////

    return(
        <div className="ui container search-bar black inverted segment">
          <form className="ui form">
            <div className="field">
            <label style={{color: 'white'}}> Select Date </label>
            <input
              type="date"
              min="1995-06-20"  //minimum date on picture of the day
              max={today}
              onChange={onDateChange}
             />


          </div>
        </form>
     </div>
    );
}

export default SearchBar;
