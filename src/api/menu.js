import instance from ".";
import { getToken } from "./storage";

export const createMenuItem = async (itemData) => {
  const { data } = await instance.post("/menu", itemData, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};

export const getMenuItems = async () => {
  const { data } = await instance.get("/menu/mine", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};

export const updateMenuItem = async (id, updates) => {
  const { data } = await instance.put(`/menu/${id}`, updates, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return data;
};
