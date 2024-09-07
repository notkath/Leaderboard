import { useState } from "react";

function TabComponent() {
  const [activeTab, setActiveTab] = useState("Organisation");

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center bg-white rounded-2xl w-3/4 md:w-1/4 p-4 mx-auto">
        <div
          className={`cursor-pointer mx-4 pb-2 ${
            activeTab === "Organisation"
              ? "border-b-4 border-blue-900 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Organisation")}
        >
          Organisation
        </div>
        <div
          className={`cursor-pointer mx-4 pb-2 ${
            activeTab === "Department"
              ? "border-b-4 border-blue-900 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Department")}
        >
          Department
        </div>
      </div>
    </div>
  );
}

export default TabComponent;
