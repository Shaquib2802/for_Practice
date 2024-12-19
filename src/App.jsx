// import "./App.css";
import { useEffect, useState } from "react";
import Database from "./Component/Database";
import Check from "./Check";
import Interface from "./Component/Todo/Interface";
import Form1 from "./Component/Todo/Form1";
import Form2 from "./Component/Todo/Form2";

function App() {
  /*  const [data, setData] = useState([]);
  const ApiData = async () => {
    const data = await AddData();
    console.log(data?.data);

    setData(data?.data);
  };

  useEffect(() => {
    ApiData();
  }, []); */
  return (
    <>
      {/* <Database /> */}
      {/* <Check/> */}
      <Interface/>  
      
      
      {/* <Form1 /> */}
      {/* <Form2/> */}
      {/*    {data.map((item, index) => (
        <>
          <p key={index}>{item.id}</p>
          <img className=" w-20 h-20" src={item.image} />{" "}
        </>
      ))} */}
    </>
  );
}
export default App;
