"use client";
import { useState } from "react";
import StepperForm from "./stepper-form";
import StepperProgress from "./stepper-progress";

const formData = {
  productId: 123,
  title: "Solar Providers And Costs Compared - Results In 3 Minutes!",
  subtitle:
    "Find the best solar providers for your area. Complete this short form to get started.",
  steps: [
    {
      stepId: 1,
      title: "Step 1: What type of roof do you have?",
      stepType: "mcq",
      questions: [
        {
          id: 1,
          questionType: "mcq",
          title: "What type of roof do you have?",
          options: [
            {
              id: 1,
              value: "Gable",
              icon: "/images/form-icons/solar-qus01-img01.svg",
            },
            {
              id: 2,
              value: "Flat",
              icon: "/images/form-icons/solar-qus01-img02.svg",
            },
            {
              id: 3,
              value: "Other",
              icon: "/images/form-icons/solar-qus01-img03.svg",
            },
          ],
        },
      ],
    },
    {
      stepId: 2,
      title: "Step 2: What is your zip code?",
      stepType: "inputs",
      questions: [
        {
          id: 2,
          inputType: "text",
          title: "What is your zip code?",
          placeholder: "Enter your zip code here",
        },
      ],
    },
    {
      stepId: 3,
      title: "Step 3: Your contact details",
      stepType: "inputs",
      questions: [
        {
          id: 3,
          inputType: "text",
          title: "What is your first and last name?",
          placeholder: "Enter your name",
        },
        {
          id: 4,
          inputType: "text",
          title: "What is your email address?",
          placeholder: "Enter your email",
        },
        {
          id: 5,
          inputType: "text",
          title: "What is your phone number?",
          placeholder: "Enter your phone number",
        },
      ],
    },
  ],
};

function index() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex">
          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-900 capitalize mb-5">
              Solar Providers and Costs Compared - Results in 3 Minutes!
            </h2>
            <p className="text-base leading-relaxed lg:text-xl lg:leading-loose font-normal text-gray-500 text-pretty mb-8">
              Solar Providers and Costs Compared - Results in 3 Minutes!
            </p>
          </div>
          {/* <!-- Stepper Progress --> */}
          <StepperProgress
            currentStep={currentStep}
            totalSteps={formData.steps.length + 1}
          />
        </div>
        <StepperForm
          steps={formData.steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
}

export default index;
