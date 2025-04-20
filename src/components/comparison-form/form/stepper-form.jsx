"use client";
import { useState } from "react";
import Step from "./step";
import StepSuccess from "./step-success";
import axios from "axios";

const StepperForm = ({ formData, currentStep, setCurrentStep }) => {
  const { productId, steps } = formData;
  const [selectedOptions, setSelectedOptions] = useState({});
  const [formValues, setFormValues] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSelectOption = (stepId, optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [stepId]: optionId,
    }));
    handleNext();
  };

  const updateAnswer = (questionId, answer) => {
    setFormValues((prevAnswers) => {
      const existingIndex = prevAnswers.findIndex(
        (item) => item.questionId === questionId
      );

      if (existingIndex !== -1) {
        // Replace existing answer
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingIndex] = { questionId, answer };
        return updatedAnswers;
      } else {
        // Add new answer
        return [...prevAnswers, { questionId, answer }];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("answers", JSON.stringify(formValues));
    // console.log("formValues", formValues);
    try {
      const { data } = await axios.post("/api/form/submit", formData);
      if (data.success) {
        setFormValues([]);
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (error) {}
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <form id="stepperForm">
      {/* <!-- stepes --> */}
      <div className="p-4 md:p-10 bg-neutral-100 rounded-2xl">
        {!isloading && isSubmitted ? (
          <StepSuccess />
        ) : (
          <Step
            stepData={steps}
            currentStep={currentStep}
            selectedOptions={selectedOptions}
            handleSelectOption={handleSelectOption}
            updateAnswer={updateAnswer}
          />
        )}
      </div>
      {!isSubmitted && (
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="w-36 h-12 bg-neutral-100 border border-neutral-100 rounded-lg transition hover:bg-transparent hover:border-gray-400 cursor-pointer"
            onClick={handlePrev}
          >
            Prevois
          </button>
          {currentStep === steps.length - 1 ? (
            <button
              type="button"
              className={`w-36 h-12 bg-green-700 text-white border border-green-700 rounded-lg transition hover:bg-transparent hover:text-green-700 ${
                isloading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleSubmit}
              disabled={isloading}
            >
              {isloading ? "Loading..." : "Submit"}
            </button>
          ) : (
            <button
              type="button"
              className="w-36 h-12 bg-blue-500 text-white border border-blue-500 rounded-lg transition hover:bg-transparent hover:text-blue-500 cursor-pointer"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default StepperForm;
