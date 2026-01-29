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
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-white mb-16">
          Community Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {feedbacks.map((feedback, i) => (
            <div
              key={i}
              /* CHANGED: h-auto instead of h-56 to minimize height based on text */
              /* CHANGED: p-6 instead of p-8 for a tighter look */
              className="group bg-[#0f172a] w-full max-w-sm h-auto p-6 rounded-3xl border border-blue-900/30 
                         flex flex-col justify-between transition-all duration-300 
                         hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg"
            >
              <h3 className="text-white text-left italic leading-relaxed text-sm md:text-base">
                "{feedback.comment}"
              </h3>
              
              <div className="flex items-center justify-end mt-4">
                <span className="text-blue-400 text-sm font-medium mr-2">—</span>
                <p className="text-gray-400 text-xs font-semibold">
                  {feedback.username || (feedback.user ? feedback.user.firstname : "Anonymous")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeedback;