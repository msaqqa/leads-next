"use client";

import OptionItem from "./option-item";

function OptionsList({ data }) {
  return (
    <div className="comparison-cards grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
      {data.map((item) => (
        <OptionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OptionsList;
