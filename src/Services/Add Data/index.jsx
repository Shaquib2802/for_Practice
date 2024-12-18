import axios from "axios"
import { BaseUrl } from "../../Config"
import { ApiUrl } from "../../Config/APIURL"


export const AddData= async()=>{
    try{

         const response = await axios.get(BaseUrl+ApiUrl.product)

         return response || []

    }
    catch(e){
        console.log(e)

    }
}