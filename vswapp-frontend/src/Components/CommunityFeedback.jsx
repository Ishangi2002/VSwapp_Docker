import React, { useEffect, useState } from "react";
import axios from "axios";

const CommunityFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const BASE_URL = "http://43.205.199.30:8080";

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/feedback`);
        setFeedbacks(res.data);
      } catch (err) { console.error(err); }
    };
    fetchFeedbacks();
  }, []);

  return (
    <section className="py-8 px-6 text-center">
      <h2 className="text-4xl text-white mt-10">Community Feedback</h2>
      <div className="ml-50 grid grid-cols-3 gap-30 mt-[-20px]">
        {feedbacks.map((feedback, i) => (
          <div key={i} className="bg-gray-800 w-96 h-48 p-6 rounded-3xl mt-20">
            <h3 className="text-white flex items-center">{feedback.comment}</h3>
            <p className="text-gray-400 text-right">
              {feedback.username || (feedback.user ? feedback.user.firstname : "Anonymous")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CommunityFeedback;