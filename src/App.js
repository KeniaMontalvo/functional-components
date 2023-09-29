import './App.css';
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';

import FormSignUp from './components/FormSignUp';
function App() {

  const handleSubmit = (valores) => {
    console.log("appjs:", valores)
  }

  return (
    <Container 
      component="section" 
      maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        component="h1">
          Formulario Registro
        </Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
