import React, { useState } from "react";
import Search from "../components/atoms/Search";
import Card from "../components/Card";
import { sampleData } from "../data/sampleData";

import "./contrainer.m.css";

const Container = () => {
  const [data, setData] = useState(sampleData);
  const [fiterData, setFilterData] = useState(sampleData);
  const filter = (e) => {
    const text = String(e.target.value).trim();
    const filteredData = data.filter(({ name }) =>
      new RegExp(text, "gim").test(name)
    );
    setFilterData(!text ? data : filteredData);
  };

  return (
    <div>
      <Search textChange={filter} />
      <div className="container">
        {fiterData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Container;
