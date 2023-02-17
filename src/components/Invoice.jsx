import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/invoice.css";

const Invoice = () => {
  const state = useSelector((state) => state.rent);
  const mulaiSewa = state.orderData.start_rent_at;

  const akhirSewa = state.orderData.finish_rent_at;
  const totalHari = localStorage.getItem("Jumlah_Hari");
  //   const namaCustomer = localStorage.getItem("name_customer");
  //   const emailCustomer = localStorage.getItem("email_customer");
  const carName = localStorage.getItem("car_name");
  const carPrice = localStorage.getItem("car_price");
  const Total = state.orderData.total_price;
  const orderID = state.orderData.id;
  const createdAt = state.orderData.createdAt;
  const ticketNumber = `BCR-${createdAt.match(/[\d-]+/g).join("")}-${orderID}`;
  let bank = localStorage.getItem("bank");
  let dataBank = [{}];

  switch (bank) {
    case "BCA":
      dataBank = [
        {
          id: 1,
          name: "BCA",
          desc: "BCA Transfer",
        },
      ];
      break;
    case "BNI":
      dataBank = [
        {
          id: 2,
          name: "BNI",
          desc: "BNI Transfer",
        },
      ];
      break;
    case "Mandiri":
      dataBank = [
        {
          id: 3,
          name: "Mandiri",
          desc: "Mandiri Transfer",
        },
      ];
      break;
    default:
      break;
  }

  const d_names = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const m_names = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const today = new Date();
  const day = today.getDay();
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  return (
    <>
      <div className="invoice">
        <div className="invoice-hero">
          <div className="invoice-date">
            <h1>INVOICE</h1>
            <p>Date: {d_names[day] + ", " + (parseInt(date) < 10 ? "0" + date : date) + " " + m_names[month] + " " + year}</p>
          </div>
        </div>
        <div className="payment-details">
          <h2>PAYMENT DETAILS</h2>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <p>Order ID</p>
                {/* <p>Method</p> */}
                <p>Status</p>
              </div>
              <div className="col-9">
                <p>: {ticketNumber}</p>
                {/* {dataBank.map((x, key) => {
                  return <p key={key}>: {x.desc}</p>;
                })} */}
                <p>: Paid</p>
              </div>
            </div>
          </div>
        </div>

        <div className="company-details">
          <h2>COMPANY DETAILS</h2>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <p>Name</p>
                <p>Email</p>
                <p>Address</p>
              </div>
              <div className="col-9">
                <p>: Binar Car Rental</p>
                <p>: binarcarrental@gmail.com</p>
                <p>
                  : Jalan Suroyo No. 161
                  <br />
                  &nbsp;&nbsp;Mayangan Kota Probolonggo
                  <br />
                  &nbsp;&nbsp;672000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="purchase-details">
          <h2>PURCHASE DETAILS</h2>
          <div className="container">
            <div className="row">
              <div className="col-3">
                {/* <p>Car Description</p> */}
                <p>Start Rent</p>
                <p>End Rent</p>
                {/* <p>Car Rental Time</p>
                <p>Daily Rate</p> */}
                <h4>Payment Amount</h4>
              </div>
              <div className="col-9">
                {/* <p>: {carName}</p> */}
                <p>: {mulaiSewa}</p>
                <p>: {akhirSewa}</p>
                {/* <p>: {totalHari} Days</p> */}
                {/* <p>: Rp {carPrice}</p> */}
                <h4>: Rp {Total}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
