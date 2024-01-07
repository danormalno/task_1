import { Button } from "./shared/ui/Button/Button";
import './App.css'
import { Input } from "./shared/ui/Input/Input";

const  App =() => {
  return <div className="main">
    <div className="general">
    <Button text={'btn'} backgroundColor={'red'} size="60px" color="colorAqua"/>
    <Button text={'btn 1'} backgroundColor={'black'} size="100px" color="colorViolet"/>
    <Button text={'btn 2'} backgroundColor={'green'} size="150px" color="colorWhite"/>
    </div>
    <div className="general input">
    <Input placeholder="first" backgroundColor="red" />
    <Input placeholder="second" backgroundColor="black"/>
    <Input placeholder="third" backgroundColor="green"/>
    </div>
  </div>;
}

export default App;
