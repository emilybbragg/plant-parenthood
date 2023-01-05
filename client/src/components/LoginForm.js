import React, { useState } from 'react';
import FormField from "../styles/FormField.js"
import Label from "../styles/Label.js"
import Input from "../styles/Input.js"
import Button from "../styles/Button.js"

function LoginForm ( { onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
    } else {
      r.json().then((err) => setErrors(err.errors))
    }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <span className="flex items-center justify-center">Username</span>
        <Input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </FormField>

      <FormField>
        <span className="flex items-center justify-center">Password</span>
        <Input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </FormField>

      <FormField>
        <div className="flex flex-col items-center justify-center">
        <Button>{isLoading ? "Loading..." : "Login"}</Button>
        </div>
      </FormField>

      <FormField>
        <div className="flex flex-col items-center justify-center">
          {errors.map((err) => (
            <ul key={err} className="error-list">Error: {err}</ul>
          ))}
        </div>
      </FormField>
    </form>
  );
}

export default LoginForm;