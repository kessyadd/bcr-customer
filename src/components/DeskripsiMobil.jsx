import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import User from "../assets/img/fi_users.png";
import { useNavigate, useParams } from "react-router-dom";
import APICar from "../apis/customer/APICar";
import APIOrder from "../apis/customer/APIOrder";
import "../assets/css/deskripsiMobil.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

const DeskripsiMobil = () => {
  const [car, setCar] = useState();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const navigate = useNavigate();
  const params = useParams();
  const [isValid, setIsValid] = useState("false");
  const [totalPrice, setTotalPrice] = useState(0);
  const [start_rent_at, setStart_rent_at] = useState();
  const [finish_rent_at, setFinish_rent_at] = useState();

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await APICar.getCarDetails(params.carId);
      setCar(res.data);
    };
    // call the function
    fetchData().catch(console.error);
    const handleDatePicker = () => {
      let date2 = new Date();
      let dateFormat1 = "";
      let dateFormat2 = "";
      let Difference_In_Time = 0;
      let Difference_In_Days = 0;

      const date1 = new Date(dateRange[0]);
      dateFormat1 =
        date1.getFullYear() +
        "-" +
        (date1.getMonth() + 1) +
        "-" +
        date1.getDate();
      setStart_rent_at(dateFormat1);
      if (dateRange[1]) {
        date2 = new Date(dateRange[1]);
        dateFormat2 =
          date2.getFullYear() +
          "-" +
          (date2.getMonth() + 1) +
          "-" +
          date2.getDate();
        setFinish_rent_at(dateFormat2);
        Difference_In_Time = date2.getTime() - date1.getTime();
        Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        let totalPrice = 0;
        if (Difference_In_Days < 7) {
          setIsValid("true");

          totalPrice = car.price * (Difference_In_Days + 1);
          setTotalPrice(totalPrice);
          console.log(isValid);
        } else {
          setIsValid("false");
          setTotalPrice(0);
          alert("maksimal peminjaman 7 hari!");
        }
      }
    };
    handleDatePicker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.carId, dateRange, isValid]);

  const handleButton = async () => {
    try {
      const car_id = params.carId;
      const result = await APIOrder.createNewCarOrder({
        start_rent_at,
        finish_rent_at,
        car_id,
      });
      if (result) {
        navigate(`/payment/${result.data.id}`);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h6 className="fw-bold">Exclude</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h6 className="fw-bold">Refund, Reschedule, Overtime</h6>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
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
                  <span class="px-1"></span>{" "}
                  {car.category === "small" && "2 - 4 orang"}
                  {car.category === "medium" && "4 - 6 orang"}
                  {car.category === "Medium" && "4 - 6 orang"}
                  {car.category === "large" && "6 - 8 orang"}
                </p>
                <div className="cardetail-date-bg">
                  <p className="cardetail-date-title">
                    Tentukan lama sewa mobil (max. 7 hari)
                  </p>
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
                    <p>{formatter.format(totalPrice)}</p>
                  </Col>
                </Row>
                <br />
                <div>
                  <button
                    disabled={isValid === "false" ? true : false}
                    onClick={handleButton}
                    className="cardetail-button"
                  >
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
