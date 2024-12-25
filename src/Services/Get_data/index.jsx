import axios from "axios";
import { BaseUrl5 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const GetData = async () => {
  try {
    const response = await axios.get(BaseUrl5 + ApiUrl.get1);
    return response || [];
  } catch (e) {
    console.log(e);
  }
};
