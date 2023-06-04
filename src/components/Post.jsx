import React from "react";
import { useNavigate } from "react-router-dom";
function Post() {
  const navigate = useNavigate();

  const onClick = () => {
    //redirect to about page

    navigate("/about");
  };
  return (
    <div>
      <h1>post</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default Post;
