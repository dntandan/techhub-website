import React from 'react';
import AlphaQuestions from './Question/AlphaQuestions';
import BasicQuestions from './Question/BasicQuestions';
import BetaQuestions from './Question/BetaQuestions';

export default function Question() {
  return (
    <div className="my-12">
      <div className="flex flex-col items-center justify-center text-center w-full  mb-12">
        <h1 className="font-semibold text-gray-800 text-3xl md:text-5xl">
          Last 10 Days - Question Of The Day
        </h1>
        <p className="lg:w-[60%] px-5 mt-8 text-lg lg:text-xl">
          Solve these questions and share your answer in our discord server. We
          discuss these questions daily after 09:00 PM IST in our discord
          server.
        </p>
        <p className="lg:w-[50%] px-5 my-2 text-lg lg:text-xl">
          Feel free to post all 10 questions's answers at one go if you discover
          it just now. We discuss and give feedbacks on late submissions also.
        </p>
      </div>
      <BasicQuestions />
      <AlphaQuestions />
      <BetaQuestions />
    </div>
  );
}
