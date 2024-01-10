import { Button } from "./shared/ui/Button/Button";
import "./App.css";

import { Input } from "./shared/ui/Input/Input";
import { ChangeEvent, useState } from "react";
import Select from "./shared/ui/Select/Select";

const App: React.FC = ({}) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const getChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const getChange2 = (e: ChangeEvent<HTMLInputElement>) =>
    setValue2(e.target.value);
  const getChange3 = (e: ChangeEvent<HTMLInputElement>) =>
    setValue3(e.target.value);


    interface Option {
      value: string;
      label: string;
    }

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div className="main">
      <div className="general">
        <Button
          text={"btn"}
          backgroundColor={"red"}
          size="60px"
          color="colorAqua"
        />
        <Button
          text={"btn 1"}
          backgroundColor={"black"}
          size="100px"
          color="colorViolet"
        />
        <Button
          text={"btn 2"}
          backgroundColor={"green"}
          size="150px"
          color="colorWhite"
        />
      </div>
      <div className="general">
        {value}
        <Input
          placeholder="first"
          backgroundColor="red"
          onChange={getChange}
          value={value}
        />
        {value2}
        <Input
          placeholder="second"
          backgroundColor="black"
          onChange={getChange2}
          value={value2}
        />
        {value3}
        <Input
          placeholder="third"
          backgroundColor="green"
          onChange={getChange3}
          value={value3}
        />
      </div>
      _______________________________________________________________
      <div>
        
        <Select options={options} selectedOption={selectedOption} onSelect={handleSelectChange}/>
      </div>
    </div>
  );
};

export default App;
