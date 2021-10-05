import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "This is a book about JavaScript, programming, and the wonders of the digital"
    },
    {
      name: "You Don't Know JS",
      rating: "3.5/5",
      description:
        "The You Don’t Know JS is a series of books which explores JavaScript types in greater depth"
    },
    {
      name: "A Smarter Way To Learn Javascript",
      rating: "3/5",
      description: "Books specially designed for freshers"
    }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description:
        "This is the book on Shiva, the simple man whose karma re-cast him as our Mahadev, the God of Gods"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5",
      description:
        "The trio find a newspaper report about an attempted robbery of a Gringotts vault—one that Hagrid had visited when helping Harry"
    },
    {
      name: "The Alchemist",
      rating: "4/5",
      description:
        " This story is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      description:
        "It is a riveting, indispensable handbook of negotiation principles culled and perfected"
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description:
        "Loonshots is the first to apply this science to the spread of breakthrough ideas"
    },
    {
      name: "Critical Chain",
      rating: "4.5/5",
      description:
        "The Critical Chain is the longest path in the schedule, and considers activity interdependence and resource constraints"
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
              <div style={{ fontSize: "smaller" }}>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
