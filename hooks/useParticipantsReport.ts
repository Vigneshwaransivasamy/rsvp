import { Participant } from "@/typings/modals/Participants";
import useParticipants from "./useParticipants";

export enum Aggregation {
  Unique = "unique",
  Range = "range",
}

export interface RangeGroup {
  start: number;
  end: number;
}

export interface RangeType {
  type: Aggregation.Range;
  value: RangeGroup[];
}
export interface UniqueType {
  type: Aggregation.Unique;
}

export type ReportConfig = Partial<
  Record<keyof Participant, RangeType | UniqueType>
>;

const reportFns = {
  [Aggregation.Range]: (
    value: number,
    rangeGroup: RangeGroup[],
    acc: Array<number>
  ) => {
    const groupIndex = rangeGroup.findIndex(
      (range) => range.start <= value && value < range.end
    );
    if (acc[groupIndex]) {
      acc[groupIndex] += 1;
    } else {
      acc[groupIndex] = 1;
    }
  },
  [Aggregation.Unique]: (value: string, acc: Record<string, number>) => {
    if (Number.isFinite(acc[value])) {
      acc[value] += 1;
    } else {
      acc[value] = 1;
    }
  },
};

type Report = Partial<Record<keyof ReportConfig, Record<string, number>>>;

export default function useParticipantsReport(
  reportConfig: ReportConfig
): Report {
  const { data } = useParticipants();

  const initialReport = Object.keys(reportConfig).reduce(
    (report, currentProp: string) => {
      report[currentProp] = {};
      return report;
    },
    {} as Partial<Record<string, any>>
  );

  if (!data) {
    return initialReport;
  }

  const result = data.reduce((report, currentParticipant) => {
    for (const prop in reportConfig) {
      const currentProp = prop as keyof Participant;
      const currentPropValue = currentParticipant[currentProp];

      const reportType = reportConfig[currentProp]?.type;

      if (!reportType) {
        return report;
      }

      if (reportType === Aggregation.Range) {
        let reportFn = reportFns.range;
        const range = (reportConfig[currentProp] as RangeType).value;
        reportFn(currentPropValue as number, range, report[currentProp]);
      }

      if (reportType === Aggregation.Unique) {
        let reportFn = reportFns.unique;
        reportFn(currentPropValue as string, report[currentProp]);
      }
    }

    return report;
  }, initialReport);

  return {
    ...result,
  };
}
