import React, { useState } from "react";

const PasswordSetForm = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    try {
      const response = await fetch("http://localhost:3001/set-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token }),
      });

      const result = await response.json();
      setMessage(result.message);

      //   if (response.ok) {
      //     window.location.href = "/login";
      //   }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Set Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Set Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PasswordSetForm;
