import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

const App = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${
                    selectedDate === "" ? "" : "&date=" + selectedDate
                }`
            )
            .then(res => {
                setPhotos(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [selectedDate]);

    const onDateChange = e => {
        setSelectedDate(e.target.value);
    };

    return (
        <div>
            <SearchBar onDateChange={onDateChange} />
            <CardList photos={photos} />
        </div>
    );
};

export default App;
