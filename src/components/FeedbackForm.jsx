import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters!");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleClick = (e) => {
    //alert("hello");
    e.preventDefault();

    if (text.trim().length > 10) {
      // alert(text);
      const newFeedback = {
        text,
        rating,
      };
      console.log(newFeedback);
      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleClick}>
        <h2>How would you rate our services?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            name=""
            value={text}
            placeholder="rating"
            onChange={handleTextChange}
            onClick={handleClick}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Post
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
