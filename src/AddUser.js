import { useState } from "react";

function AddUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { userName, email, password };

const response = await fetch("https://renderdemo-r0vb.onrender.com/addusers", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(user),
});


    if (response.ok) {
      alert("User added successfully");
      setUserName("");
      setEmail("");
      setPassword("");
    } else {
      alert("Error adding user");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="User Name" value={userName} onChange={e => setUserName(e.target.value)} required /><br/><br/>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br/><br/>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
