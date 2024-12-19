import axios from "axios";
import { BaseUrl3 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const Registration = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl3 + ApiUrl.Register,req,{
        headers:{
            'Content-Type': 'application/json',
        }
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
