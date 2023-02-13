import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import User from "../assets/img/fi_users.png";
import { useNavigate, useParams } from "react-router-dom";
import APICar from "../apis/customer/APICar";
import "../assets/css/deskripsiMobil.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCarID, setStartDate, setEndDate, setTotalDays, setTotalPrice, setOrderID } from "../store/features/rentSlice";

const DeskripsiMobil = () => {
  const [car, setCar] = useState();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rent);
  const total = state.totalPrice;
  const navigate = useNavigate();
  const params = useParams();
  // const [carCategory, setCarCategory] = useState();
  // console.log(`deskripsi ${params.carId}`);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await APICar.getCarDetails(params.carId);
      setCar(res.data);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
    const handleDatePicker = () => {
      dispatch(setCarID(params.carId));
      let date2 = new Date();
      let dateFormat2 = "";
      let Difference_In_Time = 0;
      let Difference_In_Days = 0;
      let totalPrice = 0;
      const date1 = new Date(dateRange[0]);
      const dateFormat1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
      dispatch(setStartDate(dateFormat1));
      if (dateRange[1]) {
        date2 = new Date(dateRange[1]);
        dateFormat2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
        dispatch(setEndDate(dateFormat2));
        Difference_In_Time = date2.getTime() - date1.getTime();
        Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        dispatch(setTotalDays(Difference_In_Days + 1));
        totalPrice = car.price * (Difference_In_Days + 1);
        dispatch(setTotalPrice(totalPrice));
      }
      console.log(Difference_In_Days);
      console.log(dateFormat1, dateFormat2);
      console.log(date2);
      console.log(dateRange);
    };
    handleDatePicker();
  }, [params.carId, dateRange]);

  const handleButton = () => {
    navigate("/payment/1805");
  };

  return (
    <>
      {car ? (
        <Container fluid className="mt-3">
          <Container className="m-5 p-3"></Container>
          <Row
            className="d-row"
            style={{
              marginLeft: "9.2rem",
              marginRight: "9.2rem",
              paddingTop: "2em",
              paddingBottom: "3em",
            }}
          >
            <Col lg={8} md={12} sm={12}>
              <Card className="p-5 shadow-sm mb-3">
                <h6 className="mb-4 fw-bold">Tentang Paket</h6>
                <h6 className="fw-bold">Include</h6>
                <ul>
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h6 className="fw-bold">Exclude</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h6 className="fw-bold">Refund, Reschedule, Overtime</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <Card className="card_right p-5 shadow-sm">
                <img src={car.image} alt="mobil" />
                <h6 className="fw-bold mt-4">{car.name}</h6>
                <p className="p_jumlah_orang mt-2">
                  <img src={User} alt="user" />
                  <span class="px-1"></span> {car.category === "small" && "2 - 4 orang"}
                  {car.category === "medium" && "4 - 6 orang"}
                  {car.category === "Medium" && "4 - 6 orang"}
                  {car.category === "large" && "6 - 8 orang"}
                </p>
                <div className="cardetail-date-bg">
                  <p className="cardetail-date-title">Tentukan lama sewa mobil (max. 7 hari)</p>
                  <div className="cardetail-date-input">
                    <DatePicker
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      onChange={(e) => {
                        setDateRange(e);
                      }}
                      dateFormat="dd MMMM yyyy"
                      isClearable={true}
                      placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                      showDisabledMonthNavigation
                    />
                    <div>
                      <FiCalendar size={18} />
                    </div>
                  </div>
                </div>
                <br />
                <Row>
                  <Col>
                    <p>Total</p>
                  </Col>
                  <Col className="text-end">
                    <p>Rp {total}</p>
                  </Col>
                </Row>
                <br />
                <div>
                  <button onClick={handleButton} className="cardetail-button">
                    Lanjutkan Pembayaran
                  </button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container style={{ marginTop: "200px", textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      )}
    </>
  );
};

export default DeskripsiMobil;
