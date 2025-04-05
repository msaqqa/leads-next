"use-client";

function ConsultationTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <ul
      className="list-none flex flex-row flex-wrap gap-3 pl-5 mb-8"
      role="tablist"
    >
      {tabs.map((tab) => (
        <li role="presentation" key={tab.category}>
          <button
            onClick={() => setActiveTab(tab.category)}
            className={`inline-block rounded-full w-32 text-center py-3 capitalize border transition-colors
        ${
          activeTab === tab.category
            ? "bg-neutral-900 text-white border-neutral-900"
            : "bg-white text-neutral-900 border-neutral-900 hover:bg-neutral-100 cursor-pointer"
        }`}
            role="tab"
            aria-selected={activeTab === tab.category}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ConsultationTabs;
