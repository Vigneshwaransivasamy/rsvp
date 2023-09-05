import React from "react";

const NoSearchResults = ({ searchText }: { searchText: string }) => {
  return (
    <div className="text-center w-96 pt-10">
      No Results found for{" "}
      <span className="font-semibold">
        {searchText.length < 20
          ? `"${searchText}"`
          : `"${searchText.slice(0, 20)}..."`}
      </span>
    </div>
  );
};

export default NoSearchResults;
