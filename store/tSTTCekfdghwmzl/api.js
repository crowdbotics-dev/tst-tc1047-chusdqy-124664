import axios from "axios"
import {
  TST_TC1047EKFDGHWMZL_PASSWORD,
  TST_TC1047EKFDGHWMZL_USERNAME
} from "react-native-dotenv"
const tSTTCekfdghwmzl = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047EKFDGHWMZL_PASSWORD,
    password: TST_TC1047EKFDGHWMZL_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
