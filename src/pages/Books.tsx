import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Book } from "../types/BookProps";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    api.get<Book[]>("/books").then((res) => setBooks(res.data));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6">
      <input
        type="text"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        className="input input-bordered w-full max-w-md"
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {filteredBooks.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
