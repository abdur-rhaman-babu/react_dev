import { useState } from "react";

const Form = () => {
//   const [firstName, setFirstName] = useState("Abdur Rhaman");
//   const [lastName, setLastName] = useState("Babu");
//   const [email, setEmail] = useState("babu@gmail.com");

const [person, setPerson] = useState({
    firstName: '',
    lastName:'',
    email:''
})


const handleFirstNameChange = (e) =>{
    setPerson({
        ...person,
        firstName: e.target.value
    })
}

const handleLastNameChange = (e) =>{
    setPerson({
        ...person,
        lastName: e.target.value
    })
}

const handleEmailChange = (e) =>{
    setPerson({
        ...person,
        email: e.target.value
    })
}

  return (
    <div>
      <form>
        <label>
          First Name:{" "}
          <input
            value={person.firstName}
            onChange={handleFirstNameChange}
            type="text"
          />
        </label>{" "}
        <br />
        <br />
        <label>
          Last Name:{" "}
          <input
            value={person.lastName}
            onChange={handleLastNameChange}
            type="text"
          />
        </label>{" "}
        <br />
        <br />
        <label>
          Email:{" "}
          <input
            value={person.email}
            onChange={handleEmailChange}
            type="email"
          />
        </label>
       
      </form>
      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </div>
  );
};

export default Form;
