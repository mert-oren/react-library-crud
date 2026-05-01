import { useEffect, useState } from "react";
import type { Book } from "../types/BookProps";
import { Link, useNavigate, useParams } from "react-router";
import { api } from "../api/api";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    api.get<Book>(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return "Loading or Book can not be found...";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedBook = Object.fromEntries(formData.entries()) as Book;

    api.get<Book[]>(`/books?title:eq=${updatedBook.title}`).then((res) => {
      const duplicateBook = res.data.find((b) => b.id !== id);

      if (duplicateBook) {
        alert(`${updatedBook.title} zaten var!`);
        return;
      }

      api.put<Book>(`/books/${id}`, { ...updatedBook, id }).then(() => {
        alert(`${updatedBook.title} is edited. You turn back to "Books" page`);
        navigate("/books");
      });
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-150 p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md text-base-100 space-y-5"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Book</h1>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Title</label>
          <input
            name="title"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            defaultValue={book.title}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Author</label>
          <input
            name="author"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Author"
            defaultValue={book.author}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Year</label>
          <input
            name="year"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Year"
            defaultValue={book.year}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Image URL</label>
          <input
            name="image"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Image URL"
            defaultValue={book.image}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Summary</label>
          <textarea
            name="summary"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500 min-h-40 resize-none"
            placeholder="Summary"
            defaultValue={book.summary}
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <Link
            to={`/books/${id}`}
            className="btn bg-gray-300 border-none text-base-100 hover:bg-gray-400"
          >
            Back to Book
          </Link>

          <button
            type="submit"
            className="btn bg-blue-700 border-none text-white hover:bg-blue-900"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
