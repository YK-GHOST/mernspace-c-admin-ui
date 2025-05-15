import { Credentials } from "../types/types";
import { api } from "./client";

//Auth Service
export const login = (credentials: Credentials) =>
  api.post("/auth/login", credentials);
export const logout = () => api.post("/auth/logout");
export const self = () => api.get("/auth/self");
