import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "A Smarter Way To Learn Javascript", rating: "3/5"}
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name: "Critical Chain",
      rating: "4.5/5"
    }
  ]
};

var booksGenre = Object.keys(bookDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p style={{ fontSize: "small" }}>
        Checkout my favorite books. Select a genre to get started
      </p>
      <div>
        {booksGenre.map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              border: "1px solid black",
              padding: "0.5rem",
              margin: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingLeft: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                width: "70%",
                padding: "0.5rem",
                margin: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
