import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <div>No Feedback List</div>;

  console.log(feedback);
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          id={item.id}
          rating={item.rating}
          text={item.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
