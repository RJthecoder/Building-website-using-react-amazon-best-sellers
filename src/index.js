import React from "react";
import "./index.css";
import { books } from './books';
import Book from './Book.js';
import ReactDOM from "react-dom/client";



function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);