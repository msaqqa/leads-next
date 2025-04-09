import Link from "next/link";

function LeadsButton({
  btnText,
  btnLink,
  btnArrow = "true",
  btnTextSize,
  btnPadding = "px-7 py-5",
  btnRadius = "rounded-full",
  btnColor = "",
  btnClick,
}) {
  return (
    <button
      onClick={btnClick}
      className={`inline-flex items-center self-start ${
        btnColor === "reverse"
          ? "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          : "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      } ${btnTextSize} ${btnPadding} ${btnRadius} border border-blue-500 transition group cursor-pointer`}
      // hover:-translate-y-1
    >
      {btnLink ? (
        <Link href={btnLink} className="flex items-center space-x-1">
          <span>{btnText}</span>
          {btnArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform ml-1 transform group-hover:translate-x-1 group-hover:text-${
                btnColor === "reverse" ? "white" : "blue-500"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          )}
        </Link>
      ) : (
        <>
          <span>{btnText}</span>
          {btnArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform ml-1 transform group-hover:translate-x-1 group-hover:text-${
                btnColor === "reverse" ? "white" : "blue-500"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          )}
        </>
      )}
    </button>
  );
}

export default LeadsButton;
