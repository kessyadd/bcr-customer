import axios from "axios";
import CONST from "../utils/constants";

const axiosCustomerInstance = axios.create({
  baseURL: CONST.CUSTOMER_BASE_URL,
});

export default axiosCustomerInstance;
