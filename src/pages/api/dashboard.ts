import { LOCAL_BASE_URL } from "@/utils/global.config";
import axios from "axios";

// http://localhost:8000/v1/users/getEC2Details
// http://localhost:8000/v1/users/getEc2StorageUtilization/767397878280
const accessToken =
  (typeof window !== "undefined" && localStorage.getItem("token")) || null;

export const dashboardData = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };
    const data = await axios.get(
      `${LOCAL_BASE_URL}/users/getEc2StorageUtilization/767397878280`,
      { headers: headers }
    );
    return data;
  } catch (error: any) {
    return error?.response;
  }
};

// http://localhost:8000/v1/users//gets3data/767397878280

export const getS3Data = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };
    const data = await axios.get(
      `${LOCAL_BASE_URL}/users/gets3data/767397878280`,
      { headers: headers }
    );
    return data;
  } catch (error: any) {
    return error?.response;
  }
};

export const getEC2InstanceData = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };
    const data = await axios.get(`${LOCAL_BASE_URL}/users/getInstances`, {
      headers: headers,
    });
    console.log("EC2 Instance", data);
    return data;
  } catch (error: any) {
    return error?.response;
  }
};
