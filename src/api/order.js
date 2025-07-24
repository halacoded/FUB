import instance from ".";
import { getToken } from "./storage";

export const createOrder = async (orderData) => {
  const { data } = await instance.post("/orders", orderData);
  return data;
};

export const getOrdersByRestaurant = async () => {
  const { data } = await instance.get("/orders", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};

export const updateOrderStatus = async (orderId, status) => {
  const { data } = await instance.put(
    `/orders/${orderId}/status`,
    { status },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
  return data;
};
