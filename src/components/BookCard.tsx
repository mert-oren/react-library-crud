import { Link } from "react-router";
import type { Book } from "../types/BookProps";

type Props = {
  book: Book;
};

const BookCard = ({
  book: { id, title, year, summary, author, image },
}: Props) => {
  return (
    <div className="card bg-white w-80 h-140 shadow-md text-base-100 m-4">
      <figure className="bg-white p-4 h-72 flex items-center justify-center">
        <img src={image} alt={title} className="h-full shadow-lg" />
      </figure>

      <div className="card-body p-4 flex flex-col">
        <Link
          to={`/books/${id}`}
          className="text-xl font-bold leading-tight line-clamp-2"
        >
          {title} ({year})
        </Link>

        <p className="text-base-100/70 text-sm leading-5 max-h-30 overflow-hidden line-clamp-6">
          {summary}
        </p>

        <div className="mt-auto flex items-start justify-between gap-4">
          <span className="min-w-0 flex-1 wrap-break-word italic tracking-wider text-sm line-clamp-2">
            Author: {author}
          </span>

          <div className="card-actions shrink-0 flex-nowrap justify-end gap-2">
            <Link
              to={`/books/${id}/edit`}
              className="btn btn-primary btn-sm text-white border-none"
            >
              Edit
            </Link>

            <Link
              to={`/books/${id}/delete`}
              className="btn bg-red-700 btn-sm border-none text-white"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
