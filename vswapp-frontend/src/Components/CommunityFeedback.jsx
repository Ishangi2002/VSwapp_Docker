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
    /* py-20 provides consistent vertical spacing between sections */
    <section className="py-20 px-6 bg-[#030712] text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">
          Community Feedback
        </h2>

        {/* - Use justify-items-center to align cards in the grid 
            - gap-10 matches the spacing used in Our Values
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {feedbacks.map((feedback, i) => (
            <div
              key={i}
              /* - Updated bg-[#0f172a] to match Trending Skills cards 
                 - transition and hover effects added for consistency
              */
              className="group bg-[#0f172a] w-full max-w-sm h-56 p-8 rounded-3xl border border-blue-900/30 
                         flex flex-col justify-between transition-all duration-300 
                         hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg"
            >
              <h3 className="text-white text-left italic leading-relaxed">
                "{feedback.comment}"
              </h3>
              
              <div className="flex items-center justify-end mt-4">
                <span className="text-blue-400 text-sm font-medium mr-2">—</span>
                <p className="text-gray-400 text-sm font-semibold">
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