import { useEffect, useState } from "react";
import { Book } from "./types/Book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getBooks, addBook, deleteBook } from "./services/api";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Erro ao buscar livros", error);
    }
  };

  const handleAdd = async (book: Book) => {
    try {
      const newBook = await addBook(book);
      setBooks((prev) => [...prev, newBook]);
    } catch (error) {
      console.error("Erro ao adicionar livro", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Erro ao remover livro", error);
    }
  };

  return (
    <div>
      <h1>📚 Catálogo de Livros</h1>
      <BookForm onAdd={handleAdd} />
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
}

export default App;
