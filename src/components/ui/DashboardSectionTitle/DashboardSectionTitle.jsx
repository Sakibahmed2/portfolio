import React from "react";

const DashboardSectionTitle = ({ title }) => {
  return (
    <>
      <h2 className="text-4xl font-semibold border-b border-dashed w-full text-center pb-2 mb-3">
        {title}
      </h2>
    </>
  );
};

export default DashboardSectionTitle;
