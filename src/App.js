import React from "react";
import "./styles.css";
import { useState } from "react";

const colors = "blue";

const moviesDB = {
  salman: [
    { movie: "Ham aapke hai kon", rating: "IMDB: 8.2" },
    { movie: "Ham saath saath hai", rating: "IMDB: 8.1" }
  ],

  TomCruise: [
    {
      movie: "The Mummy",
      rating: "IMDB: 5.4"
    },
    {
      movie: "Mission: Impossible – Rogue Nation",
      rating: "IMDB: 7.4"
    }
  ],
  TomHolland: [
    {
      movie: "Spiderman-Far from home",
      rating: "IMDB: 7.5"
    },
    {
      movie: "The Impossible",
      rating: "IMDB: 7.6"
    }
  ]
};

export default function App() {
  const [selectedActor, setActor] = useState("salman");
  function genreClickHandler(name) {
    setActor(name);
  }
  return (
    <div className="App">
      <h1 className="heading">Movies Recommendation based on Actor Name </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite Actor's movies which I like{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((name) => (
          <button
            onClick={() => genreClickHandler(name)}
            style={{
              cursor: "pointer",
              background: "#16E4D8",
              borderRadius: "1rem",
              padding: "1rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedActor].map((name) => (
            <li
              key={name.movie}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {name.movie} </div>
              <div style={{ fontSize: "smaller" }}> {name.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
