import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";
import "./style.css";


const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", discription: "", rating: "", Url: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required.";
    if (!form.author) newErrors.author = "Author is required.";
    if (!form.discription) newErrors.discription = "Discription is required.";
    if (!form.rating) newErrors.rating = "Rating is required.";
    if (!form.Url) newErrors.Url = "Url is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(addBook(form));
      navigate("/Browse");
    }
  };

  return (
    <div className="add">
    
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
          {errors.author && <p className="error">{errors.author}</p>}
        </div>
        <div>
          <label>discription</label>
          <input
            type="text"
            name="discription"
            value={form.discription}
            onChange={handleChange}
          />
          {errors.discription && <p className="error">{errors.discription}</p>}
        </div>

        <div>
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

        <div>
          <label>CoverImageUrl</label>
          <input
            type="text"
            name="coverImage"
            value={form.Url}
            onChange={handleChange}
          />
          {errors.Url && <p className="error">{errors.Url}</p>}
        </div>






        <button type="submit">Add Book</button>
      </form>
    </div>
    </div>
  );
};

export default AddBook;
