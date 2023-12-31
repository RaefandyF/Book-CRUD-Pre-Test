import AddBook from "./addBook";
import DeleteBook from "./deleteBook";
import UpdateProduct from "./updateBook";

type Book = {
    id: number,
    title: string,
    isbn: string,
    author: string,
    publisher: string,
    pages: number
}

async function getData() {
    // var myHeadersGetData = new Headers();
    // var raw = "";
    const res = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books", {
        cache: 'no-store',
        method: 'GET',
        headers : {
            "Content-Type": "application/json",
            Authorization: `Bearer 1293|oxe6hbm8xsKkN7KXDOYxIkQ4KdTKQYgtMd1nf4nF`
        }
    })
    
    return res.json()
}

export default async function BookList() {
    const books = await getData();
    const booksData: Book[] = books.data;
    console.log(books);
    
    
    

  return (
    <div className='ml-[2vw]'>
        <h1 className="text-[3vw] text-bold" >Data List Buku</h1>
        <AddBook />
        {/* <button className='mt-[1vw] bg-blue-600 w-[10vw] h-[3vw] rounded-[0.5vw] text-white text-[1.3vw]'>Tambah Buku</button> */}
        <table className='mt-[1.5vw] border-solid border-black border-[0.1vw]'>
            <tr className='text-[1.3vw]'>
                <th className='px-[1.5vw] py-[0.5vw] border-solid border-black border-[0.1vw]'>Buku ID</th>
                <th className='px-[1.5vw]border-solid border-black border-[0.1vw]'>ISBN</th>
                <th className='px-[1.5vw] border-solid border-black border-[0.1vw]'>Title</th>
                <th className='px-[1.5vw] border-solid border-black border-[0.1vw]'>Author</th>
                <th className='px-[1.5vw]border-solid border-black border-[0.1vw]'>Publisher</th>
                <th className='px-[1.5vw] border-solid border-black border-[0.1vw]'>Pages</th>
                <th className='px-[1.5vw] border-solid border-black border-[0.1vw]'>Action</th>
            </tr>
            {booksData.map((booksData, index) => (
                <tr key={booksData.id} className='text-[1.3vw] border-solid border-black border-[0.1vw]'>
                    <>
                        <th className="" scope="row">{booksData.id}</th>
                        <td className='px-[1.5vw] border-solid border-black border-[0.1vw]'>{booksData.isbn}</td>
                        <td className='px-[1.5vw] border-solid border-black border-[0.1vw]'>{booksData.title}</td>
                        <td className='px-[1.5vw] border-solid border-black border-[0.1vw]'>{booksData.author}</td>
                        <td className='px-[1.5vw] border-solid border-black border-[0.1vw]'>{booksData.publisher}</td>
                        <td className='px-[1.5vw] border-solid border-black border-[0.1vw]'>{booksData.pages}</td>
                        <td className='space-x-[1vw] px-[1.5vw] py-[1vw] flex'>
                            <UpdateProduct {...booksData} />
                            <DeleteBook {...booksData} />
                            {/* <button className='bg-red-600 w-[5vw] h-[2.5vw] rounded-[0.5vw] text-white text-[1.3vw]'>Delete</button> */}
                        </td>
                    </>
                </tr>
            ))}
        </table>
    </div>
  )
}
