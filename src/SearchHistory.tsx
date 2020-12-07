import React from "react";
import { useSelector } from "react-redux";

export const SearchHistory: React.FC = () => {
  const historyList = useSelector((state: any) => state.historyList);
  return (
    <div>
      <h3 style={{color: "#3f51b5"}}>Your Search History</h3>
      <div id="search-history">
        {historyList.map((item: any, index: any) => (
          <p key={`city-${item}-${index}`}> {item} </p>
        ))}
      </div>
    </div>
  );
};
