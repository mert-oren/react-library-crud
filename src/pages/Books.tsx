import { useEffect, useState } from "react";
import type { Book } from "../types/BookProps";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get<Book[]>("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <ul>
      {books.map((b) => (
        <BookCard book={b} />
      ))}
    </ul>
  );
};

export default Books;
