import { BaseUrl6 } from "../../Config";
import axios from "axios";
import { ApiUrl } from "../../Config/ApiUrl";


export const Act_Post = async (req) => {
    console.log("this is service data", req);
    try {
      const response = await axios.post(BaseUrl6 + ApiUrl.act_post, req, {
        headers: {
          "Content-Type": 'application/json',
        },
      });
  
      return response || [];
    } catch (e) {
      console.log(e);
    }
  };

  export const Act_Put = async (req, id) => {
    console.log("this is service data", req);
    try {
      const response = await axios.put(BaseUrl6 + ApiUrl.act_post + "/" + id, req, {
        headers: {
          "Content-Type":'application/json',
        },
      });
  
      return response || [];
    } catch (e) {
      console.log(e);
    }
  };
  

  export const Act_Delete= async(id)=>{

    console.log("this is service data")
    try{
  
         const response = await axios.delete(BaseUrl6+ApiUrl.update+"/"+id,{
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