import React, { useState } from "react"

const Update = () => {
  return (
    <div className="Update">
      <h1>Update New Book</h1>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="desc" placeholder="desc" />
      <input type="number" name="price" placeholder="price" />
      <input type="text" name="cover" placeholder="cover" />
      <button>Update</button>
    </div>
  )
}

export default Update
