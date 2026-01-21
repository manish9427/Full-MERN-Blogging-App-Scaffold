import apiClient from "./apiClient";

export const signup = (userData) => apiClient.post("/auth/signup", userData);
export const login = (credentials) => apiClient.post("/auth/login", credentials);
