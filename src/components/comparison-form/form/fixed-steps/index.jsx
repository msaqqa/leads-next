"use client";

import ZipCode from "./ZipCode";
import ContactInfo from "./ContactInfo";

const FixedSteps = ({ currentStep, baseStep, updateAnswer }) => {
  if (currentStep === baseStep) {
    return <ZipCode updateAnswer={updateAnswer} />;
  } else if (currentStep === baseStep + 1) {
    return <ContactInfo updateAnswer={updateAnswer} />;
  }

  return null;
};

export default FixedSteps;
