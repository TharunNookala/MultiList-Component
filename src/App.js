import { useState } from "react";
import "./App.css";
import MultiList from "./components/MultiList/MultiList";
import data from "./utils/listData.json";

function App() {
  const OptionsList = data.skills;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter((s) => s !== option));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name} 👋!.Thanks for submitting the form. Check the details that you shared: \n Role : ${role} \n Skills :
     ${selectedOptions}`);
    console.log(
      "Name : " + name,
      "Role : " + role,
      "Skills : " + selectedOptions
    );
  };

  return (
    <div className="App">
      <header className="App-header">HELLO!👋</header>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <MultiList
            options={OptionsList}
            selectedOptions={selectedOptions}
            onSelect={handleSelect}
            onRemove={handleRemove}
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
