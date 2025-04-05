"use client";
import { useState } from "react";
import ConsultationTabs from "./consultation-tabs";
import ConsultationContent from "./consultation-content";

function ConsultationCards({ tabs, consultationData }) {
  const [activeTab, setActiveTab] = useState("general");
  const filteredData =
    activeTab === "general"
      ? consultationData
      : consultationData.filter((item) => item.category === activeTab);
  return (
    <>
      {/* <!--Tabs navigation--> */}
      <ConsultationTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* <!--Tabs content--> */}
      <ConsultationContent filteredData={filteredData} />
    </>
  );
}

export default ConsultationCards;
