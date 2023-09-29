import './App.css';
import Container from "@mui/material/Container"

import FormSignUp from './components/FormSignUp';
function App() {
  return (
    <Container 
      component="section" 
      maxWidth="sm">
      <h1>Formulario Registro</h1>
      <FormSignUp />
    </Container>
  );
}

export default App;
