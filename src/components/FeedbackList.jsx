import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <div>No Feedback List</div>;

  console.log(feedback);
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              id={item.id}
              rating={item.rating}
              text={item.text}
              handleDelete={handleDelete}
            />
            LIKES
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
