"use client";

import TrustItem from "./trust-item";

function TrustList({ data }) {
  return (
    <div className="trust-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mb-8">
      {data.map((item) => (
        <TrustItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TrustList;
