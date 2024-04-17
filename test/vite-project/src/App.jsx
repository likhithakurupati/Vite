import Animals from "./Animals";
import Fruits from "./Fruits";
import Games from "./Games";
import Message from "./Message";
import Persons from "./Persons";
import Counter from "./Counter";
import Form from "./Form";
import Form2 from "./Form2";

const animals = ["dog", "cat", "rabbit"];

const persons = { name: "Ravi", phone: "75759", age: "54" };

const fruits = [
  { name: "Apple", price: "50" },
  { name: "Banana", price: "10" },
  { name: "Guava", price: "30" },
];

const games = { name: "cricket", Players: ["Nick", "Kat", "Jess"] };

function App() {
  return (
    <>
      <h1>
        <Form />
        <Form2 />
        <Message />
        <Counter />
      </h1>
      <Animals animalArray={animals} />
      <Persons personObject={persons} />
      <Fruits fruitsArrayofObjects={fruits} />
      <Games gamesObjectwithArray={games} />
    </>
  );
}

export default App;
