import { Button } from "./shared/ui/Button/Button";
import './App.css'
import { Input } from "./shared/ui/Input/Input";
import { ChangeEvent, useState } from "react";

const  App =({}) => {

  const [value, setValue] = useState('');    
  const [value2, setValue2] = useState('');    
  const [value3, setValue3] = useState('');  

  const getChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const getChange2 = (e: ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)
  const getChange3 = (e: ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)

  return <div className="main">
    <div className="general">
    <Button text={'btn'} backgroundColor={'red'} size="60px" color="colorAqua"/>
    <Button text={'btn 1'} backgroundColor={'black'} size="100px" color="colorViolet"/>
    <Button text={'btn 2'} backgroundColor={'green'} size="150px" color="colorWhite"/>
    </div>
    <div className="general">
      {value}
    <Input placeholder="first" backgroundColor="red" onChange={getChange} value={value}/>
    {value2}
    <Input placeholder="second" backgroundColor="black" onChange={getChange2} value={value2}/>
    {value3}
    <Input placeholder="third" backgroundColor="green" onChange={getChange3} value={value3}/>
    </div>
  </div>;
}

export default App;
