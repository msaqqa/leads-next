"use client";

function TrustItem({ item }) {
  return (
    <div className="trust-card md:px-10 py-4">
      <img className="mb-4" src={item.icon} alt="" />
      <h3 className="text-2xl font-medium capitalize mb-3">{item.title}</h3>
      <p className="text-sm font-normal text-gray-500 leading-relaxed text-pretty line-clamp-3">
        {item.dsc}
      </p>
    </div>
  );
}

export default TrustItem;
