import React, { useState } from "react"

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    coverPic: "",
  })

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
     e.preventDefault()
     
  }

  return (
    <div className="add">
      <h1>Add New Book</h1>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="title"
      />
      <input
        type="text"
        onChange={handleChange}
        name="desc"
        placeholder="desc"
      />
      <input
        type="number"
        onChange={handleChange}
        name="price"
        placeholder="price"
      />
      <input
        type="text"
        onChange={handleChange}
        name="cover"
        placeholder="cover"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Add
