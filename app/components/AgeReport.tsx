import React from "react";

const AgeReport = ({
  age,
  label,
}: {
  age: Record<string, number>;
  label: Array<string>;
}) => {
  let totalAgeGroupCount = 0;
  const ageTransformed =
    age &&
    label.map((label, index) => {
      totalAgeGroupCount += age?.[index] ?? 0;
      return {
        label,
        value: age?.[index] ?? 0,
      };
    });
  return (
    <section className="flex flex-col p-4 gap-1 shadow-lg bg-white rounded-md dark:bg-sky-900">
      <h2 className="text-xl font-semibold pb-2">Age</h2>
      {ageTransformed?.map((ageGroup) => {
        const width = `${((ageGroup?.value * 100) / totalAgeGroupCount).toFixed(
          2
        )}%`;
        return (
          <section key={ageGroup.label} className="flex">
            <div className="w-full">Age {ageGroup.label}</div>
            <div className="relative w-full">
              <span>{ageGroup.value}</span>
              <div
                style={{
                  width,
                }}
                className="absolute w-0 h-full top-0 start-0 bg-sky-500 opacity-50 transition-all"
              ></div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default AgeReport;
