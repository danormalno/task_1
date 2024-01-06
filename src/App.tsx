import { Button } from "./shared/ui/Button/Button";
import './App.css'
import { Input } from "./shared/ui/Input/Input";

const  App =() => {
  return <div className="general">
    <Button text={'btn'} backgroundColor={'red'}/>
    <Button text={'btn 1'} backgroundColor={'black'}/>
    <Button text={'btn 2'} backgroundColor={'green'}/>
    <div>
    <Input placeholder="first" backgroundColor="red"/>
    <Input placeholder="second" backgroundColor="black"/>
    <Input placeholder="third" backgroundColor="green"/>
    </div>
  </div>;
}

export default App;
