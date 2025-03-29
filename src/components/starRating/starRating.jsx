"use client";

function StarRating({ ratings }) {
  const roundedRating = Math.round(ratings);
  return (
    <>
      <ul className="flex gap-x-1">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            {i < roundedRating ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-orange-400"
              >
                <path d="M12 .587l3.668 7.431L23.6 9.75l-5.546 5.41L19.42 24 12 19.807 4.58 24l1.366-8.84L.4 9.75l7.932-1.732L12 .587z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 .587l3.668 7.431L23.6 9.75l-5.546 5.41L19.42 24 12 19.807 4.58 24l1.366-8.84L.4 9.75l7.932-1.732L12 .587z"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StarRating;
