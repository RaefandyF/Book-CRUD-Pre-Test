'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

type Book = {
    id: number,
    title: string,
    isbn: string,
    author: string,
    publisher: string,
    pages: number
}

export default function DeleteBook(book : Book) {
    const [modal,setModal] = useState(false)
    const router = useRouter()

    async function handleDelete(bookId: number) {
        
        

        const res = await fetch(`https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/${bookId}`, {
            method: "DELETE",
            headers : {
                "Content-Type": "application/json",
                Authorization: "Bearer 1293|oxe6hbm8xsKkN7KXDOYxIkQ4KdTKQYgtMd1nf4nF",
            },
        });

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer 1485|CObaAInlfJHvDRE7exzakOH4qEFMxe8hTeINlHnW");

        // var requestOptions : Object = {
        // method: 'POST',
        // headers: myHeaders,
        // redirect: 'follow'
        // };

        // fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/add?isbn=1273833&title=BelajarCoding332233&author=RaefandyFadila3382&publisher=RaefandyBookStore3223&pages=2503", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        

        router.refresh()
        setModal(false)
        // console.log(res);
        
    }

    function handleChange() {
        setModal(!modal)
    }


  return (
    <div>
      <button className="mt-[1vw] bg-red-600 w-[10vw] h-[3vw] rounded-[0.5vw] text-white text-[1.3vw] hover:bg-red-800" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are You Sure Want To Delete {book.title}?</h3>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {/* {!isMutating ? ( */}
                <button type="button" onClick={() => handleDelete(book.id)} className="btn btn-primary">
                  Delete
                </button>
              {/* ) : ( */}
                {/* <button type="button" className="btn loading">
                  Saving...
                </button> */}
              {/* )} */}
            </div>
        </div>
      </div>
    </div>
  )
}
