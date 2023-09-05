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
      <section className="flex gap-2">
        <div>Average size of Group:</div>
        <div className="relative">
          <span className="font-semibold">{avgCount.toFixed(2)}</span>
        </div>
      </section>
    </section>
  );
};

export default AvgGroupReport;
