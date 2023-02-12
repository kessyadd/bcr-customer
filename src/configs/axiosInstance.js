import axios from "axios";
import CONST from "../utils/constants";
import { requestHandler } from "./interceptors";

const axiosCustomerInstance = axios.create({
  baseURL: CONST.CUSTOMER_BASE_URL,
});
axiosCustomerInstance.interceptors.request.use(requestHandler);
export default axiosCustomerInstance;
