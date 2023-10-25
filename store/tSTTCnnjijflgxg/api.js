import axios from "axios"
import {
  TST_TC1047NNJIJFLGXG_PASSWORD,
  TST_TC1047NNJIJFLGXG_USERNAME
} from "react-native-dotenv"
const tSTTCnnjijflgxg = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047NNJIJFLGXG_PASSWORD,
    password: TST_TC1047NNJIJFLGXG_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
