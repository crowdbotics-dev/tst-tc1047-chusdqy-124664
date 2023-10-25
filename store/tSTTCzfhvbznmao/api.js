import axios from "axios"
import {
  TST_TC1047ZFHVBZNMAO_PASSWORD,
  TST_TC1047ZFHVBZNMAO_USERNAME
} from "react-native-dotenv"
const tSTTCzfhvbznmao = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ZFHVBZNMAO_PASSWORD,
    password: TST_TC1047ZFHVBZNMAO_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
