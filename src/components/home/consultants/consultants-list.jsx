"use client";
import ConsultantItem from "./consultant-item";

function ConsultantsList({ data }) {
  return (
    <div className="consultant-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((item) => (
        <ConsultantItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ConsultantsList;
