import React, { useState, useEffect } from "react"

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
      } catch (err) {
        console.log(err)
      }
    }
  }, [])
  return <div>Books</div>
}

export default Books
