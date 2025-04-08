"use client";

function StepCard({
  questions,
  selectedOptions,
  handleSelectOption,
  updateAnswer,
}) {
  const options = questions[0]?.options || [];
  const optionsLength = options.length;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${optionsLength} gap-6`}>
      {options.map((option) => {
        const isSelected = selectedOptions[questions[0]?.id] === option.id;
        return (
          <div
            key={option.id}
            className={`option-card h-[300px] flex flex-col justify-center items-center rounded-xl px-5 md:px-12 transition hover:bg-blue-100 cursor-pointer border-2 p-4 text-center hover:border-blue-500 ${
              isSelected
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
            }`}
            data-step="energyType"
            data-answer="q1-01"
            onClick={() => {
              updateAnswer(questions[0].id, option.id);
              handleSelectOption(questions[0]?.id, option.id);
            }}
          >
            <img className="mb-5" src={option.icon} alt="" />
            <h4>{option.value}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default StepCard;
