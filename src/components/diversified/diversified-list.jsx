"use client";
import Diversified from "./diversified-card";

function DiversifiedList({ data }) {
  return (
    <div className="diversified-cards grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      {data.map((item) => (
        <Diversified key={item.id} item={item} />
      ))}
    </div>
  );
}

export default DiversifiedList;
