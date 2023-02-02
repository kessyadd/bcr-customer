import React from "react";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  setPage,
  filters,
  fetchStatus,
  resetCar,
} from "../store/features/searchCarSlice";

const CarPagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const car = useSelector((state) => state.searchCar);
  const name = car.filterData[0].name;
  const category = car.filterData[0].category;
  const isRented = car.filterData[0].isRented;
  const minPrice = car.filterData[0].minPrice;
  const maxPrice = car.filterData[0].maxPrice;
  const pageSize = 9;
  const pageCount = car.pageCount;
  const activePage = car.page;

  const handleOnClick = (number) => {
    const page = number;
    const payload = {
      name,
      category,
      isRented,
      minPrice,
      maxPrice,
      page,
      pageSize,
    };
    dispatch(filters(payload)); //set payload
    dispatch(fetchStatus("loading")); //set fetch status
    dispatch(resetCar([])); //reset car data

    dispatch(setPage(number));
    navigate("/hasil-pencarian");
  };

  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          handleOnClick(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container
      id="pagination"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Pagination>{items}</Pagination>
    </Container>
  );
};

export default CarPagination;
