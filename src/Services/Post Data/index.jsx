import axios from "axios";
import { BaseUrl4, BaseUrl5 } from "../../Config";
import { ApiUrl } from "../../Config/APIURL";

export const PostData = async (req) => {
  console.log("this is service data", req);
  try {
    const response = await axios.post(BaseUrl5 + ApiUrl.update, req, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};
export const PutData = async (req, id) => {
  console.log("this is service data", req);
  try {
    const response = await axios.put(BaseUrl5 + ApiUrl.update + "/" + id, req, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response || [];
  } catch (e) {
    console.log(e);
  }
};

export const DeleteData= async(id)=>{

  console.log("this is service data")
  try{

       const response = await axios.delete(BaseUrl5+ApiUrl.update+"/"+id,{
          headers:{
              "Content-Type": "application/json"
              
          }
       })

       return response || []

  }
  catch(e){
      console.log(e)

  }
}