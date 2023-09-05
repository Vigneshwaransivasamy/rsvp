"use client";

import AvgGroupReport from "@/app/components/AgeGroupReport";
import AgeReport from "@/app/components/AgeReport";
import BackNavigation from "@/app/components/BackNavigation";
import ProfessionalsReport from "@/app/components/ProfessionalsReport";
import useParticipantsReport, {
  Aggregation,
  ReportConfig,
} from "@/hooks/useParticipantsReport";
import React from "react";

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

const Reports = () => {
  const report = useParticipantsReport(reportConfig as ReportConfig);

  return (
    <>
      <BackNavigation to="../" />
      <div className="py-3"></div>
      <h1 className="text-2xl font-semibold">Analytics</h1>
      <div className="py-2"></div>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-4">
        {report.age && (
          <AgeReport
            age={report.age}
            label={reportConfig.age.label}
          ></AgeReport>
        )}
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
