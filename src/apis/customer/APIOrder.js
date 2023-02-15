import axiosCustomerInstance from "../../configs/axiosInstance";

const APIOrder = {
  //Create new car order
  createNewCarOrder: async ({ start_rent_at, finish_rent_at, car_id }) => {
    const params = { start_rent_at, finish_rent_at, car_id };
    console.log(params);
    const res = await axiosCustomerInstance.post("/order", params);
    return res;
  },

  //Get order details by order id
  getOrderDetails: async (orderId) => {
    const res = await axiosCustomerInstance.get(`/order/${orderId}`);
    return res;
  },

  //Delete order by id
  deleteOrder: async (orderId) => {
    const res = await axiosCustomerInstance.delete(`/order/${orderId}`);
    return res;
  },

  //Upload payment reciept
  uploadPaymentSlip: async (orderId, formData) => {
    console.log(formData);
    const res = await axiosCustomerInstance.put(
      `/order/${orderId}/slip`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  },

  //Get Order List
  getOrderList: async ({ page, pageSize }) => {
    const params = { page, pageSize };
    const res = await axiosCustomerInstance.get("/v2/order", { params });
    return res;
  },
};

export default APIOrder;
