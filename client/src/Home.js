import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
export default function Home() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name);
    console.log("DOB:", dob);
    console.log("Number:", number);

    setName("");
    setDob("");
    setNumber("");
  }

  return (
    <div className="formStyle">
      <form onSubmit={handleSubmit}>
        <h1 className="labelStyle">Course Registration</h1>

        <label className="labelStyle">First Name</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Enter your first name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label className="labelStyle">Date of Birth (DD-MM-YYYY)</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Enter your date of birth"
          value={dob}
          onChange={e => setDob(e.target.value)}
        />

        <label className="labelStyle">Mobile Number</label>
        <input
          className="inputStyle"
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />

        <label className="labelStyle">Username</label>
        <input
          className="inputStyle"
          type="text"
          placeholder="Enter your username"
          name="uname"
        />

        <label className="labelStyle">Password</label>
        <input
          className="inputStyle"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
<center>
        <Link to="/home">
          <button className="buttonStyle">register</button>
        </Link>
        </center>
      </form>
    </div>
  );
}