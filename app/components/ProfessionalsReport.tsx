import React from "react";

const ProfessionalsReport = ({
  profession,
}: {
  profession: Record<string, number>;
}) => {
  let total = 0;
  const entityMap =
    profession &&
    Object.entries(profession).map(([label, value], index) => {
      total += value ?? 0;
      return {
        label,
        value,
      };
    });
  return (
    <section className="flex flex-col p-4 gap-1 shadow-lg bg-white rounded-md dark:bg-sky-900">
      <h2 className="text-xl font-semibold pb-2">Profession</h2>
      {entityMap?.map((group) => {
        const width = `${((group?.value * 100) / total).toFixed(2)}%`;
        return (
          <section key={group.label} className="flex">
            <div className="w-full">{group.label}</div>
            <div className="relative w-full">
              <span>{group.value}</span>
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

export default ProfessionalsReport;
