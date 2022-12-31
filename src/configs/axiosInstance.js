import axios from "axios";
import CONST from "../utils/constants";

const axiosAdminInstance = axios.create({
  baseURL: CONST.ADMIN_BASE_URL,
  headers: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
  },
});

export default axiosAdminInstance;
