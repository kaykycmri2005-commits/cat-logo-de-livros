import axios from "axios";
import { Book } from "../types/Book";

const API_URL = "https://crudcrud.com/api/SEU_ENDPOINT/livros";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBook = async (book: Book): Promise<Book> => {
  const response = await axios.post(API_URL, book);
  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
