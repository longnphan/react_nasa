import "./App.css";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState('');
  const [newDate, setNewDate] = useState('');

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
      <label style={{color: 'white'}}> Enter Date </label>
      <input
        type="text"
        value={date}
        onChange={handleChange}
        placeholder="e.g. 2020-06-30"
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
