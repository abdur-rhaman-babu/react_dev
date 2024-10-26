import { useState } from "react";

let nextId = 0;
const List = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState([]);

  const handleAddName = () => {
    const newPerson = [...persons, person];
    setPersons(newPerson);
  };

  const person = {
    id: nextId++,
    name: name,
    email: email,
  };

  return (
    <div>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>{" "}
      <br /> <br />
      <label>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>{" "}
      <br />
      <br />
      <button onClick={handleAddName}>Add</button>
      <div>
        {persons.map((person, index) => (
          <ul key={person.id}>
            {" "}
            <li>{index + 1}</li>
            <li>Name: {person.name}</li>
            <li>Email: {person.email}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default List;
