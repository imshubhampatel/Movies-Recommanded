import React from "react";
import "./styles.css";
import { useState } from "react";
import bg from "./netflix.svg";

const colors = "teal";

const moviesDB = {
  Salman: [
    { movie: "Ham aapke hai kon", rating: "IMDB: 8.2" },
    { movie: "Sultan", rating: "IMDB: 8.1" }
  ],

  AmirKhan: [
    {
      movie: "Dhoom 3",
      rating: "IMDB: 5.4"
    },
    {
      movie: "Dangal",
      rating: "IMDB: 7.4"
    }
  ],
  TomHolland: [
    {
      movie: "Spiderman-Far",
      rating: "IMDB: 7.5"
    },
    {
      movie: "The Impossible",
      rating: "IMDB: 7.6"
    }
  ],
  HrithikRohsan: [
    {
      movie: "Krrish 3",
      rating: "IMDB: 7.5"
    },
    {
      movie: "Super 30",
      rating: "IMDB: 7.6"
    }
  ]
};

export default function App() {
  const [selectedActor, setActor] = useState("Salman");
  function genreClickHandler(name) {
    setActor(name);
  }
  return (
    <div className="App">
      <div className="container">
        <img id="wallpaper" src={bg} alt="wallpaper"></img>
      </div>
      <div className="container">
        <h1 className="heading">Movies Recommendation based on Actor Name </h1>
        <h2> Checkout my favourite Actor's movies </h2>
      </div>

      <div className="container-fluid">
        {Object.keys(moviesDB).map((name) => (
          <button onClick={() => genreClickHandler(name)}>{name}</button>
        ))}
      </div>
      <div className="container-fluid">
        <ul>
          {moviesDB[selectedActor].map((name) => (
            <li key={name.movie}>
              {" "}
              <div> {name.movie} </div>
              <div> {name.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
