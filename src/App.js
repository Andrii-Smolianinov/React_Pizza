import Container from "./Container";
import Header from "./components/Header";
import Sort from "./components/Sort/Sort";
import Main from "./pages/Main";

function App() {
  return (
    <Container>
      <Header />
      <Sort />
      <Main />
    </Container>
  );
}

export default App;
