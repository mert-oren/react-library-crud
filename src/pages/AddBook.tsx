import type { Book } from "../types/BookProps";
import { Link, useNavigate } from "react-router";
import { api } from "../api/api";

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const book = Object.fromEntries(formData.entries()) as Book;

    api.get<Book[]>(`/books?title:eq=${book.title}`).then((res) => {
      if (res.data.length > 1) {
        alert(`${book.title} zaten var!`);
        return;
      }
    });

    api.post<Book>("/books", book).then(() => {
      alert(`${book.title} added to library!`);
      navigate("/books");
    });
  };
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-150 p-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md text-base-100 space-y-5"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Add Book</h1>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Title</label>
          <input
            name="title"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Autor</label>
          <input
            name="autor"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Autor"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Year</label>
          <input
            name="year"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Year"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Image URL</label>
          <input
            name="image"
            type="text"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Image URL"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Summary</label>
          <textarea
            name="summary"
            className="bg-gray-100 p-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-blue-500 min-h-40 resize-none"
            placeholder="Summary"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <Link
            to={`/books`}
            className="btn bg-gray-300 border-none text-base-100 hover:bg-gray-400"
          >
            Back to Library
          </Link>

          <button
            type="submit"
            className="btn bg-green-700 border-none text-white hover:bg-blue-900"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
