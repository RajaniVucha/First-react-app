//load all the other custom components inside the dom in the sequence specified
import Header from "./components/Header.jsx";
import FeedbackData1 from "./data/FeedbackData.js";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage.jsx";
import AboutLinkIcon from "./components/AboutLinkIcon.jsx";
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
                <AboutLinkIcon />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
