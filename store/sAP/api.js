import axios from "axios"
import { SAP_USERNAME, SAP_PASSWORD } from "react-native-dotenv"
const sAP = axios.create({
  baseURL: "https://sap.com",
  auth: { username: SAP_USERNAME, password: SAP_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
