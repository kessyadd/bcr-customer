import axiosCustomerInstance from "../../configs/axiosInstance";

const APICar = {
  //Get car list
  getCarList: async ({
    name,
    category,
    isRented,
    minPrice,
    maxPrice,
    page,
    pageSize,
  }) => {
    const params = {};
    if (name) params["name"] = name;
    if (category) params["category"] = category;
    if (isRented) params["isRented"] = isRented;
    if (minPrice) params["minPrice"] = minPrice;
    if (maxPrice) params["maxPrice"] = maxPrice;
    if (page) params["page"] = page;
    if (pageSize) params["pageSize"] = pageSize;
    const res = await axiosCustomerInstance.get("/v2/car", { params });
    return res;
  },

  //Get car details by car id
  getCarDetails: async (carId) => {
    const res = await axiosCustomerInstance.get(`/car/${carId}`);
    return res;
  },
};

export default APICar;
