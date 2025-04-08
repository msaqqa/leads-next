"use client";

function StepperProgress({ currentStep, totalSteps }) {
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);
  const offset = 314 - (314 * progressPercent) / 100;

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="50"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            id="progress-circle"
            cx="56"
            cy="56"
            r="50"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            id="progress-text"
            className="text-xl font-semibold text-blue-600"
          >
            {progressPercent}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default StepperProgress;
