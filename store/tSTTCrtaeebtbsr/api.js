import axios from "axios"
import {
  TST_TC1047RTAEEBTBSR_PASSWORD,
  TST_TC1047RTAEEBTBSR_USERNAME
} from "react-native-dotenv"
const tSTTCrtaeebtbsr = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047RTAEEBTBSR_PASSWORD,
    password: TST_TC1047RTAEEBTBSR_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
