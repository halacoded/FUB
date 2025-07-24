import instance from ".";

export const createOrUpdateCustomer = async (customerData) => {
  const { data } = await instance.post("/customers", customerData);
  return data;
};

export const getCustomerByPhone = async (phone) => {
  const { data } = await instance.get(`/customers/${phone}`);
  return data;
};
