"use client";

import StepCard from "./step-card";
import StepInputs from "./step-inputs";

const DynamicSteps = ({
  stepData,
  currentStep,
  handleNext,
  selectedOptions,
  updateAnswer,
}) => {
  const step = stepData[currentStep];

  if (!step) return null;

  return (
    <div className="step">
      <h3 className="text-lg font-medium text-center mb-8">{step.title}</h3>
      {step.stepType === "mcq" && (
        <StepCard
          questions={step.questions}
          handleNext={handleNext}
          selectedOptions={selectedOptions}
          updateAnswer={updateAnswer}
        />
      )}
      {step.stepType === "inputs" && (
        <StepInputs questions={step.questions} updateAnswer={updateAnswer} />
      )}
    </div>
  );
};

export default DynamicSteps;
