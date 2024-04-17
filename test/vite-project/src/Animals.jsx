/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function Animals(props) {
  return (
    <div>
      <ul>
        {props.animalArray.map((animal) => (
          <li key={animal}> {animal} </li>
        ))}
      </ul>
    </div>
  );
}
