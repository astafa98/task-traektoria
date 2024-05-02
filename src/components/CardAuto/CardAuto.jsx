import React from "react";
import s from "./CardAuto.module.css";

export const CardAuto = ({ data }) => {
  return (
    <div className={s.item}>
      <p>
        <b>ID: </b>
        {data.id}
      </p>
      <p>
        <b>NAME: </b>
        {data.name}
      </p>
      <p>
        <b>MODEL: </b>
        {data.model}
      </p>
      <p>
        <b>YEAR: </b>
        {data.year}
      </p>
      <p>
        <b>COLOR: </b>
        {data.color}
      </p>
      <p>
        <b>PRICE: </b>
        {data.price}
      </p>
      <p>
        <b>LATITUDE: </b>
        {data.latitude}
      </p>
      <p>
        <b>LONGITUDE: </b>
        {data.longitude}
      </p>
    </div>
  );
};
