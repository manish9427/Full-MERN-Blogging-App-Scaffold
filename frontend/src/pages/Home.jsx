import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Manish's Blogging App
      </Typography>
      <Typography variant="body1">
        Create, edit, and share blogs with ease. Get started by signing up!
      </Typography>
    </Container>
  );
}
