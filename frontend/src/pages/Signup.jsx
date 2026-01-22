import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", { name, email, password });
      alert("Signup successful!");
      navigate("/login");
    } catch {
      alert("Signup failed!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <form onSubmit={handleSignup}>
        <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Signup</Button>
      </form>
    </Container>
  );
}
