import { Link } from "react-router";
import type { Book } from "../types/BookProps";

type Props = {
  book: Book;
};

const BookCard = ({ book: { id, title, year, summary, autor } }: Props) => {
  return (
    <div>
      <div className="card bg-white w-80 shadow-sm text-base-100">
        <figure className="bg-white p-4">
          <img
            src="https://m.media-amazon.com/images/I/81DI+BAN2SL._SL1200_.jpg"
            alt={title}
            className="w-full max-h-64 object-contain"
          />
        </figure>

        <div className="card-body p-4">
          <Link to={`/books/${id}`} className="text-xl font-bold leading-tight">
            {title} ({year})
          </Link>

          <p className="text-base-100/70 text-sm leading-relaxed">{summary}</p>

          <div className="flex items-start justify-between gap-4">
            <span className="min-w-0 flex-1 break-words italic tracking-wider text-sm">
              Autor: {autor}
            </span>

            <div className="card-actions shrink-0 flex-nowrap justify-end gap-2">
              <Link to={`/books/${id}/edit`} className="btn btn-primary btn-sm">
                Edit
              </Link>

              <Link to={`/books/${id}/delete`} className="btn btn-error btn-sm">
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
