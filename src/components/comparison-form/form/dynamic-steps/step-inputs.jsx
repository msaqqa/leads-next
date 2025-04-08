"use client";

function StepInputs({ questions, updateAnswer }) {
  const questionsLength = questions.length;
  return (
    <div className="text-center bg-white rounded-2xl py-16 px-8">
      {questions.map((question) => (
        <div
          className="w-full md:w-1/2 mx-auto relative mb-5 flex items-center"
          key={question.id}
        >
          {/* Input Field */}
          <input
            className="border border-gray-200 rounded-2xl px-4 pr-4 py-4 w-full focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
            type={question.inputType}
            placeholder={question.placeholder}
            id="zipCode"
            onChange={(e) => updateAnswer(question.id, e.target.value)}
          />
        </div>
      ))}

      {questionsLength === 1 && (
        <label className="text-sm" htmlFor="zipCode">
          Please enter the zip code of your home address.
        </label>
      )}
    </div>
  );
}

export default StepInputs;
