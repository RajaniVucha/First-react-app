/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Card from "./Card";
import { FaThumbsUp, FaTimes } from "react-icons/fa";
function FeedbackItem({ id, rating, text, handleDelete }) {
  const [countLike, setCountLike] = useState(0);
  const handleLike = (id, oldCount) => {
    oldCount++;
    setCountLike(oldCount);
  };
  return (
    <>
      <Card>
        <div className="num-display">{rating}</div>
        <button className="close" onClick={() => handleDelete(id)}>
          <FaTimes color="purple" />
        </button>
        <button className="edit" onClick={() => handleLike(id, countLike)}>
          <FaThumbsUp color="purple" />
          <div>{countLike} likes</div>
        </button>
        <div className="text-display">{text}</div>
      </Card>
    </>
  );
}
export default FeedbackItem;
