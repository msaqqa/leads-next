"use client";

import StepCard from "./dynamic-steps/step-card";
import StepInputs from "./dynamic-steps/step-inputs";

const Step = ({
  stepData,
  currentStep,
  handleSelectOption,
  selectedOptions,
  updateAnswer,
}) => {
  const step = stepData[currentStep];
  return (
    <div className="step">
      <h3 className="text-lg font-medium text-center mb-8">{step.title}</h3>
      {step.stepType === "mcq" && (
        <StepCard
          questions={step.questions}
          selectedOptions={selectedOptions}
          handleSelectOption={handleSelectOption}
          updateAnswer={updateAnswer}
        />
      )}
      {step.stepType === "inputs" && (
        <StepInputs questions={step.questions} updateAnswer={updateAnswer} />
      )}
    </div>
  );
};

export default Step;
