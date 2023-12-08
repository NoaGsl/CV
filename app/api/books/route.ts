import {NextResponse} from "next/server";

export async function GET (){
    const data = await fetch("https://simple-books-api.glitch.me/books");
    const json = await data.json();
    const names = json.map((book: any) => book.name);
    const response = NextResponse.json(names);
    return response;
}
