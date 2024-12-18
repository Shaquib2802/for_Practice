import axios from "axios";
import { BaseUrl2 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const LoginPage = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl2 + ApiUrl.Login, {
      ...req,
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
