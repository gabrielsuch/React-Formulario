import './App.css';
import Form from "./components/Form/form"
import Card from "./components/Card/card"

import {useState} from "react"

function App() {

  const [datas, setDatas] = useState([])

  const submitRegister = (data) => {
    data.day >= 1 && data.day <= 31 && data.month >= 1 && data.month <= 12 ?
    setDatas(data)
    :
    <>
    </>
  }

  return (
    <div className="App">
      <Form submitRegister={submitRegister}/>
      {
        datas.length !== 0?
          <Card data={datas}/>
        :
        <> 
        </>
      }
    </div>
  );
}

export default App;
