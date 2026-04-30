import React, { useEffect, useState } from "react";
import type { Book } from "../types/BookProps";
import { Link, useNavigate, useParams } from "react-router";
import { api } from "../api/api";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    api.get<Book>(`books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return "Loading or Book can not be found...";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    api.delete<Book>(`/books/${id}`).then(() => {
      navigate("/books");
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-150 p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md text-base-100 space-y-5"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Delete Book</h1>

        <p className="text-center">
          Are you sure to delete the Book?
          <br />
          <strong className="underline">{book.title}</strong>
        </p>

        <div className="flex items-center justify-between gap-4 pt-4">
          <Link
            to={`/books/${id}`}
            className="btn bg-gray-300 border-none text-base-100 hover:bg-gray-400"
          >
            Back to Book
          </Link>

          <button
            type="submit"
            className="btn bg-red-700 border-none text-white hover:bg-blue-900"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteBook;
