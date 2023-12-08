"use client";
import { useEffect,useState } from "react";

export default function A_Propos() {

    const [books, setBooks] = useState([]);

    async function getBooks(){
        const fetchData = await fetch("/api/books");
        const data = await fetchData.json();
        setBooks(data);

    }

    useEffect(() => {
        getBooks();
    })

    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
                <p className="text-4xl">{books}</p>
            </div>
        </div>
    );
}