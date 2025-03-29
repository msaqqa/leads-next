import "./styles.css";

function LeadsFeatures() {
  return (
    <div className="leads py-16">
      <div className="container flex flex-col md:flex-row justify-between gap-x-5 gap-y-8 wow animate__animated animate__fadeInUp">
        <div className="leads-info w-full md:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-semibold capitalize mb-5">
            Leads: Smart, personal and reliably affordable.
          </h2>
          <p className="text-base lg:text-lg font-normal text-neutral-900 text-pretty">
            With us you will find the best insurance, financing and investment
            that is perfectly tailored to your needs. Our experts compare the
            best offers on the market for you an d support you in your decision.
          </p>
        </div>
        <div className="leads-features w-full md:w-1/2 lg:w-1/3">
          <ul className="list-none mb-8">
            <li className="pl-12 text-lg font-medium mb-5">
              100% free and non-binding.
            </li>
            <li className="pl-12 text-lg font-medium mb-5">
              No contribution obligation.
            </li>
            <li className="pl-12 text-lg font-medium mb-5">
              Without obligation to contribute.
            </li>
            <li className="pl-12 text-lg font-medium mb-5">
              Expert advice by telephone.
            </li>
          </ul>
          <img src="./images//leads-features.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LeadsFeatures;
