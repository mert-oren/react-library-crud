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
    <div className="flex flex-col items-center justify-center mt-10 text-base-100 gap-12">
      <div>
        <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
        <p className="text-center text-xl">({book.year})</p>
      </div>
      <p>{book.summary}</p>
      <div className="flex gap-8">
        <Link
          to={`/books/${id}/edit`}
          className="btn btn-primary px-8 text-xl hover:scale-102 transition duration-300 border-none"
        >
          Edit
        </Link>
        <Link
          to={`/books/${id}/delete`}
          className="btn btn-error px-6 text-xl hover:scale-102 transition duration-300 border-none"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default BookDetail;
