import { Book } from "../types/Book";

interface Props {
  book: Book;
  onDelete: (id: string) => void;
}

export default function BookItem({ book, onDelete }: Props) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <span>{book.status}</span>

      <button onClick={() => onDelete(book._id!)}>Remover</button>
    </div>
  );
}
