import axios from "axios";
import { BaseUrl3, BaseUrl4 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const Registration = async (req) => {
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