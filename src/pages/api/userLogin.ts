import { LOCAL_BASE_URL } from "@/utils/global.config";
import axios from "axios";


type payloadLoginType = {
  email: string;
  password: string;
}

type payloadRegisterType = {
  email: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  accountId: string;
}

export const userLogin = async (payload: payloadLoginType) => {
  try {
    const data = await axios.post(`${LOCAL_BASE_URL}/auth/login`, payload);
    return data;
  } catch (error: any) {
    return error?.response;
  }
};

export const userRegister = async (payload: payloadRegisterType) => {
  delete payload?.confirmPassword;
  try {
    const data = await axios.post(`${LOCAL_BASE_URL}/auth/register`, payload);
    return data;
  } catch (error: any) {
    return error?.response;
  }
};




