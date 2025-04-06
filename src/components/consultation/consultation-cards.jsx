"use client";
import { useState } from "react";
import ConsultationTabs from "./consultation-tabs";
import ConsultationCard from "./consultation-card";

function ConsultationCards({ tabs, consultationData }) {
  const [activeTab, setActiveTab] = useState("general");
  const filteredData =
    activeTab === "general"
      ? consultationData
      : consultationData.filter((item) => item.category === activeTab);

  return (
    <>
      {/* <!--Tabs navigation--> */}
      {tabs ? (
        <ConsultationTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ) : null}
      {/* <!--Tabs content--> */}
      <div className="consultant-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredData.map((item) => (
          <ConsultationCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ConsultationCards;
