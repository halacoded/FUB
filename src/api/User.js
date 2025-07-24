import instance from "."; // Axios instance
import { storeToken, getToken } from "./storage";

// Signup new restaurant user
export const signup = async (userData) => {
  try {
    const { data } = await instance.post("/users/signup", userData);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};

// Login existing restaurant user
export const login = async (credentials) => {
  try {
    const { data } = await instance.post("/users/login", credentials);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch logged-in restaurant profile
export const getProfile = async () => {
  try {
    const token = getToken();
    const { data } = await instance.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(
      "Profile fetch error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Update logged-in restaurant profile
export const updateProfile = async (profileData) => {
  try {
    const token = getToken();
    const { data } = await instance.put("/users/profile", profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(
      "Profile update error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
