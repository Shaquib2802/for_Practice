import axios from "axios";
import {BaseUrl4 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const NewLogin = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl4 + ApiUrl.newLogin,req,{
        headers:{
            'Content-Type': 'application/json',
        }
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};