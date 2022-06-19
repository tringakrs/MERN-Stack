import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";

const peopleArr = [
  {
    firstName: "Doe",
    lastName: "Jane",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "Smith",
    lastName: "John",
    age: 88,
    hairColor: "brown",
  },
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
    </div>
  );
}

export default App;