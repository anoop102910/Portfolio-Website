import React from "react";

function Chip({ value }) {
  return <span className="bg-gray-100 text-gray-800 text-[0.85rem] font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{value}</span>
}
export default Chip;
