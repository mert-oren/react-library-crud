import { useEffect, useState } from "react";
import type { Book } from "../types/BookProps";
import { Link, useNavigate, useParams } from "react-router";
import { api } from "../api/api";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState<Book>();
  const [isDeleting, setIsDeleting] = useState(false);
  const [count, setCount] = useState(3);

  useEffect(() => {
    api.get<Book>(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  useEffect(() => {
    if (!isDeleting) return;

    if (count === 0) {
      api.delete(`/books/${id}`).then(() => {
        navigate("/books");
      });

      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isDeleting, count, id, navigate]);

  if (!book) return "Loading or Book can not be found...";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDeleting) return;

    setIsDeleting(true);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-150 p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md text-base-100 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Delete Book</h1>

        <p className="text-center text-lg">
          Are you sure you want to delete this book?
          <br />
          <strong className="underline text-red-700">{book.title}</strong>
        </p>

        {isDeleting && (
          <p className="text-center text-red-700 font-bold text-xl">
            Deleting in {count}...
          </p>
        )}

        <div className="flex justify-center gap-4 pt-4">
          <button
            type="submit"
            disabled={isDeleting}
            className="btn bg-red-700 border-none text-white hover:bg-red-900 disabled:opacity-60"
          >
            {isDeleting ? `Deleting... ${count}` : "Yes, delete"}
          </button>

          <Link
            to="/books"
            className="btn bg-gray-300 border-none text-base-100 hover:bg-gray-400"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DeleteBook;
