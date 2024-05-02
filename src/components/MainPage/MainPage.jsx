import React from "react";
import s from "./MainPage.module.css";
import { CardAuto } from "../CardAuto/CardAuto.jsx";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const [carData, setCarData] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("https://test.tspb.su/test-task/vehicles")
      .then((response) => response.json())
      .then((data) => {
        setCarData(data);
      })
      .catch((error) => console.error("Ошибка запроса:", error));
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    sortCars(e.target.value);
  };

  const sortCars = (sortBy) => {
    let sortedCars = [...carData];
    if (sortBy === "price") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortBy === "year") {
      sortedCars.sort((a, b) => a.year - b.year);
    } else {
      sortedCars.sort((a, b) => a.id - b.id);
    }
    setCarData(sortedCars);
  };

  return (
    <div className={s.item}>
      <div>
        <form>
          <label htmlFor="sortSelect">Сортировать по: </label>
          <select id="sortSelect" value={sortBy} onChange={handleSortChange}>
            <option value="all">Все</option>
            <option value="price">Цена</option>
            <option value="year">Год выпуска</option>
          </select>
        </form>
      </div>
      {carData.map((car, index) => (
        <CardAuto key={index} data={car} />
      ))}
    </div>
  );
};
