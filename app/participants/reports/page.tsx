"use client";

import useParticipantsReport, {
  Aggregation,
  ReportConfig,
} from "@/hooks/useParticipantsReport";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const reportConfig = {
  age: {
    type: Aggregation.Range,
    label: ["13-18", "18-25", "25+"],
    value: [
      { start: 13, end: 18 },
      { start: 18, end: 25 },
      { start: 25, end: Infinity },
    ],
  },
  locality: {
    type: Aggregation.Unique,
  },
  numberOfGuests: {
    type: Aggregation.Unique,
  },
  profession: {
    type: Aggregation.Unique,
  },
};

const ProfessionalsReport = ({
  profession,
}: {
  profession: Record<string, number>;
}) => {
  let total = 1;
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

const AgeReport = ({ age }: { age: Record<string, number> }) => {
  let totalAgeGroupCount = 1;
  const ageTransformed =
    age &&
    reportConfig["age"].label.map((label, index) => {
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

const AvgGroupReport = ({
  numberOfGuests,
}: {
  numberOfGuests: Record<string, number>;
}) => {
  const [totalGroupCount, totalMember] = Object.entries(numberOfGuests).reduce(
    ([totalGroupCount, totalMember], [currentGroup, currentCount]) => {
      return [
        totalGroupCount + currentCount,
        totalMember + (parseInt(currentGroup) + 1) * currentCount,
      ];
    },
    [0, 0]
  );

  const avgCount = totalMember > 0 ? totalMember / totalGroupCount : 0;

  return (
    <section className="flex flex-col p-4 gap-1 shadow-lg bg-white rounded-md dark:bg-sky-900">
      <h2 className="text-xl font-semibold pb-2">Group Count</h2>
      <section className="flex">
        <div>Average size of Group:&nbsp;</div>
        <div className="relative">
          <span className="font-semibold">{avgCount}</span>
        </div>
      </section>
    </section>
  );
};

const Reports = () => {
  const report = useParticipantsReport(reportConfig as ReportConfig);

  return (
    <>
      <Link href="../">
        <div className="flex gap-2 items-center content-center">
          <FaArrowLeft></FaArrowLeft>
          <span>Back</span>
        </div>
      </Link>
      <div className="py-3"></div>
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <div className="py-2"></div>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-4">
        {report.age && <AgeReport age={report.age}></AgeReport>}
        {report.profession && (
          <ProfessionalsReport
            profession={report.profession}
          ></ProfessionalsReport>
        )}
        {report.numberOfGuests && (
          <AvgGroupReport
            numberOfGuests={report.numberOfGuests}
          ></AvgGroupReport>
        )}
      </div>
    </>
  );
};

export default Reports;
