import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Book } from "../types/BookProps";
import { api } from "../api/api";

const BookDetail = () => {
  const { id } = useParams();

  const [book, setBook] = useState<Book>();
  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return "Loading or Book not found...";

  return (
    <div className="flex flex-col items-center justify-center px-30 py-10 text-base-100 gap-12">
      <img
        src={book.image}
        alt={book.title}
        className="max-h-70 shadow-lg shadow-blue-500/70"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <p className="text-center text-xl">({book.year})</p>
      </div>
      <p className="text-2xl text-center">{book.summary}</p>
      <div className="flex gap-8">
        <Link
          to={`/books/${id}/edit`}
          className="btn bg-blue-700 px-8 text-xl hover:scale-102 transition duration-300 border-none"
        >
          Edit
        </Link>
        <Link
          to={`/books/${id}/delete`}
          className="btn bg-red-700 px-6 text-xl hover:scale-102 transition duration-300 border-none"
        >
          Delete
        </Link>
      </div>
      <Link to={"/books"} className="text-blue-600 underline">
        Back to Library
      </Link>
    </div>
  );
};

export default BookDetail;
