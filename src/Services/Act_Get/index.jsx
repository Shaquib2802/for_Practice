import axios from "axios";
import {  BaseUrl6 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";



export const Act_get = async () => {
  try {
    const response = await axios.get(BaseUrl6 + ApiUrl.act_get);
    return response || [];
  } catch (e) {
    console.log(e);
  }
};
