"use client";

const trustItms = [
  {
    id: 1,
    icon: "./images/svg/Expertise.svg",
    title: "Expertise",
    dsc: "Since 1998, over 8 million people have compared smartly with us, quickly and saved a lot of money.",
  },
  {
    id: 2,
    icon: "./images/svg/Reliable.svg",
    title: "Reliable",
    dsc: "With us you can rely on current tariff offers and our award-winning customer service.",
  },
  {
    id: 3,
    icon: "./images/svg/Transparent.svg",
    title: "Transparent",
    dsc: "With us, you can compare for free, as we also finance ourselves through commissions. We are 100 percent independent.",
  },
];

function Trust() {
  return (
    <div className="trust bg-white py-16">
      <div className="container wow animate__animated animate__fadeInUp">
        <h2 className="text-2xl lg:text-4xl font-semibold capitalize mb-5">
          <span className="text-blue-500">Focusing on Quality,</span> we
          maintain customer trust
        </h2>
        <div className="w-full lg:w-3/4">
          <p className="text-base leading-relaxed lg:text-xl lg:leading-loose font-normal text-gray-500 text-pretty mb-8">
            We ensure that every facility we build undergoes rigorous quality
            checks. Sustainable solutions for a green and renewable future.
          </p>
        </div>
        <div className="trust-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mb-8">
          {trustItms.map((item) => (
            <div key={item.id} className="trust-card md:px-10 py-4">
              <img className="mb-4" src={item.icon} alt="" />
              <h3 className="text-2xl font-medium capitalize mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-normal text-gray-500 leading-relaxed text-pretty line-clamp-3">
                {item.dsc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl font-medium text-center">
          With the trust of <strong>8 million</strong> customers, your success
          is <strong>guaranteed at 98%!</strong>
        </p>
      </div>
    </div>
  );
}

export default Trust;
