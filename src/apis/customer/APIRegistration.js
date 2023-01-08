import axiosCustomerInstance from "../../configs/axiosInstance";

const APIRegistration = {
  register: async ({ email, password, role }) => {
    try {
      const res = await axiosCustomerInstance.post("/auth/register", {
        email,
        password,
        role, //need to check the params for customer role
      });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIRegistration;
