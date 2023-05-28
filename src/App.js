//load all the other custom components inside the dom in the sequence specified
import Header from "./components/Header.jsx";
import FeedbackItem from "./components/FeedbackItem.jsx";
import FeedbackData1 from "./data/FeedbackData.js";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData1);
  console.log(FeedbackData1);

  const deleteFeedback = (id) => {
    window.alert("Are you sure you want to delete");
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    //alert("hello there");
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
