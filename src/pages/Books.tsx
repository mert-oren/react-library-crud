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
    <div className="flex flex-col justify-center items-center">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {books.map((b) => (
          <BookCard book={b} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
