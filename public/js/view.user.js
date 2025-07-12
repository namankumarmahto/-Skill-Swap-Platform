import React from 'react';

const ViewUser = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Skill swap Platform</h1>
        <nav className="flex gap-6 items-center">
          <a href="#" className="hover:underline">Swap request</a>
          <a href="#" className="hover:underline">Home</a>
          <img
            src="/path-to-avatar.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </nav>
      </header>

      <main className="p-10 bg-white shadow-md max-w-4xl mx-auto mt-10 rounded-lg">
        <div className="flex justify-between items-start">
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6">
              Request
            </button>
            <h2 className="text-2xl font-bold">Marc Demo</h2>
            <div className="mt-6">
              <p className="font-semibold text-lg">Skills Offered</p>
              <p className="text-gray-700 mt-2">[List of skills]</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-lg">Skills Wanted</p>
              <p className="text-gray-700 mt-2">[List of skills]</p>
            </div>
            <div className="mt-6">
              <p className="font-semibold text-lg">Rating and Feedback</p>
              <p className="text-gray-700 mt-2">[Ratings and feedback go here]</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500 text-center">
              Profile Photo
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewUser;