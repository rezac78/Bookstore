import { useEffect, useState } from 'react';

export const useSearch = (books, searchQuery) => {
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        if (!searchQuery) {
            setFilteredBooks(books);
            return;
        }

        const query = searchQuery.toLowerCase();
        const result = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.genre.toLowerCase().includes(query)
        );

        setFilteredBooks(result);
    }, [books, searchQuery]);

    return filteredBooks;
};