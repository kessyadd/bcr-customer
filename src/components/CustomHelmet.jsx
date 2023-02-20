import React, { useState, useEffect } from "react";
import { Helmet, HelmetData } from "react-helmet-async";
import { useLocation } from "react-router";

const CustomHemlet = ({ title, url, description }) => {
  const dataRouters = [
    {
      key: 0,
      name: "Beranda",
      path: "/",
      ogTitle: "Binar Car Rental - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.",
    },
    {
      key: 1,
      name: "Cari Mobil",
      path: "/cari-mobil",
      ogTitle: "Binar Car Rental - Temukan Sewa Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Temukan mobil sewa terbaik yang sesuai dengan selera anda dengan harga yang terjangkau!",
    },
    {
      key: 2,
      name: "Hasil Pencarian",
      path: "/hasil-pencarian",
      ogTitle: "Binar Car Rental - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Temukan mobil sewa terbaik yang sesuai dengan selera anda dengan harga yang terjangkau!",
    },
    {
      key: 3,
      name: "Detil Mobil",
      path: "/detil-mobil",
      ogTitle: "Binar Car Rental - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Temukan mobil sewa terbaik yang sesuai dengan selera anda dengan harga yang terjangkau!",
    },
    {
      key: 4,
      name: "Sign In",
      path: "/sign-in",
      ogTitle: "Masuk ke Binar Car Rental - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Masuk dan temukan mobil sewa terbaik dengan harga terjangkau di Jakarta!",
    },
    {
      key: 5,
      name: "Sign Up",
      path: "/sign-up",
      ogTitle: "Daftar ke Binar Car Rental - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Daftar dan temukan mobil sewa terbaik dengan harga terjangkau di Jakarta!",
    },
    {
      key: 6,
      name: "Payment",
      path: "/payment",
      ogTitle: "Binar Car Rental Payment - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Lakukan pembayaran untuk melanjutkan proses penyewaan mobil anda!",
    },
    {
      key: 7,
      name: "E-Ticket",
      path: "/e-tiket",
      ogTitle: "Binar Car Rental E-Ticket - Sewa & Rental Mobil Terbaik di Kawasan Jakarta",
      ogDescription: "Download E-Ticket untuk ditunjukkan saat melakukan sewa mobil",
    },
  ];

  const generateTitle = (routeList, url) => {
    const pathTemp = url.split("/");
    const currentPath = `/${pathTemp[1]}`;
    let pathData = null;

    const route = routeList.find((val) => val.path === currentPath);
    if (route) {
      pathData = route;
    }
    return pathData;
  };

  const location = useLocation();
  const [data, setData] = useState();
  const pageUrl = window.location.href;

  useEffect(() => {
    setData(generateTitle(dataRouters, location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const helmetData = new HelmetData({});
  return (
    <>
      {data && (
        <Helmet helmetData={helmetData}>
          <title>{data.name} - BCR Customer</title>
          <meta property="og:title" content={data.ogTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:description" content={data.ogDescription} />
        </Helmet>
      )}
    </>
  );
};

export default CustomHemlet;
