'use client'
import { SyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"


export default function AddBook() {
    const [modal,setModal] = useState(false)
    const [title,setTitle] = useState("")
    const [isbn,setIsbn] = useState("")
    const [author,setAuthor] = useState("")
    const [publisher,setPublisher] = useState("")
    const [pages,setPages] = useState("")

    const router = useRouter()

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        
        

        // const res = await fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/add?isbn=1273833&title=Belajar332233&author=Raefandy3382&publisher=BookStore3223&pages=29", {
        //     method: "POST",
        //     headers : {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer 1293|oxe6hbm8xsKkN7KXDOYxIkQ4KdTKQYgtMd1nf4nF",
        //     },
        // });

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 1485|CObaAInlfJHvDRE7exzakOH4qEFMxe8hTeINlHnW");

        var requestOptions : Object = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://book-crud-service-6dmqxfovfq-et.a.run.app/api/books/add?isbn=1273833&title=BelajarCoding332233&author=RaefandyFadila3382&publisher=RaefandyBookStore3223&pages=2503", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        

        setTitle("")
        setIsbn("")
        setAuthor("")
        setPublisher("")
        setPages("")
        router.refresh()
        setModal(false)
        // console.log(res);
        
    }

    function handleChange() {
        setModal(!modal)
    }


  return (
    <div>
      <button className="mt-[1vw] bg-blue-600 w-[10vw] h-[3vw] rounded-[0.5vw] text-white text-[1.3vw] hover:bg-blue-800" onClick={handleChange}>
        Add New
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">ISBN</label>
              <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                className="input w-full input-bordered"
                placeholder="ISBN"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Book Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Author"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Publisher</label>
              <input
                type="text"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Publisher"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Pages</label>
              <input
                type="text"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Pages"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {/* {!isMutating ? ( */}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              {/* ) : ( */}
                {/* <button type="button" className="btn loading">
                  Saving...
                </button> */}
              {/* )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
