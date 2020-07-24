import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState('');
  const [newDate, setNewDate] = useState('');

//Today's date in YYYY-MM-DD format to set max date on date input
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
  if(dd<10)dd='0'+dd;
  if(mm<10) mm='0'+mm;
today = yyyy+'-'+mm+'-'+dd;
//

  function handleChange(e) {
    setDate(e.target.value);
    e.preventDefault();
  }

  function handleClick() {
    setNewDate(date);
  }

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${date === '' ? '' : '&date=' + date}`)
      .then(res => {
        console.log(res)
        setPhoto(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [newDate])

  return(
  <div className="ui container">
  <div className="search-bar ui black inverted segment">
    <form onSubmit={handleChange} className="ui form">
      <div className="field">
      <label style={{color: 'white'}}> Select Date </label>
      <input
        type="date"
        min="1995-06-20"  //minimum date on picture of the day
        max={today}
        onChange={handleChange}
       />
    <button className="ui inverted button" onClick={handleClick}>Submit</button>

      </div>
    </form>
  </div>

  <div className="ui raised very black inverted segment" id="image-div">
    <img src={photo.url} alt={photo.title} className="ui large left floated image" />
    <h1>{photo.title}</h1>
    <h4>{photo.date}</h4>
    <h3>{photo.explanation}</h3>
  </div>
  </div>

);
}

export default App;
