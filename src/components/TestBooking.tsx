import React from "react";
import { HealthCondition, healthConditions } from "../data/healthConditions";

const ConditionCard: React.FC<{ condition: HealthCondition }> = ({ condition }) => {
  const IconComponent = condition.icon;
  
  return (
    <div className="relative bg-slate-50 rounded-lg p-4 h-20 flex items-center justify-center overflow-hidden group transition-all duration-500 ease-in-out">
      <span className="text-base font-medium text-left z-10 text-sky-500 group-hover:text-white group-focus-within:text-white transition-colors duration-300 mr-16">
        {condition.title}
      </span>

      <div className="absolute top-0 right-0 -mt-3 -mr-3 z-20 bg-sky-500 text-white p-2 rounded-full">
        <IconComponent className="w-8 h-8" />
      </div>

      <div className="absolute inset-0 bg-sky-500 transition-transform duration-300 ease-in-out scale-x-0 group-hover:scale-x-100 origin-right z-0 transform group-hover:skew-x-6 rounded-lg"></div>
    </div>
  );
};

const TestBooking: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {healthConditions.map((condition) => (
          <ConditionCard key={condition.id} condition={condition} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <button className="bg-sky-500 text-white text-base font-medium px-6 py-3 rounded-full hover:bg-sky-600 focus:bg-sky-600 transition-colors duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default TestBooking;

