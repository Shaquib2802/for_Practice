import axios from "axios";
import {BaseUrl4, BaseUrl5 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const PostData = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl5 + ApiUrl.newLogin,req,{
        headers:{
            'Content-Type': 'application/json',
        }
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};