import React from "react";
import ButtonGroup from "../ButtonGroup";
import Footer from "../atoms/Footer";
import Header from "../atoms/Header";
import Title from "../atoms/Title";
import Intents from "../atoms/Intents";

import "./card.m.css";

const Card = ({ data }) => {
  const { name, originType, intents, dateUpdated } = data;
  return (
    <div className="card">
      <Header type={originType} />
      <Title text={name} />
      <Intents intents={intents} />
      <ButtonGroup />
      <Footer number={dateUpdated} />
    </div>
  );
};

export default Card;
