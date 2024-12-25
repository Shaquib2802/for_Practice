import axios from "axios";
import { BaseUrl2, BaseUrl5 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const AddData = async (req) => {
  console.log("this is service Post", req);
  try {
    const response = await axios.post(BaseUrl5 + ApiUrl.get1,req,{
    headers:{
      'Content-Type': 'application/json',
  }
});

return response || [];
} catch (e) {
console.log(e);
}
};