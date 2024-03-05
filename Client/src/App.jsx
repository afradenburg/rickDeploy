import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Form from "./views/Form.jsx";
import ErrorPage from "./views/ErrorPage.jsx";
import Favorites from "./views/Favorites.jsx";
import {Container} from "./styled/containerStyled.js"


axios.defaults.baseURL = "rickdeploy-production.up.railway.app"
function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const URL = "/login";
  // const EMAIL = "afradenbur@gmail.com"
  // const PASSWORD = "123456a"

  function logOut() {
    navigate("/");
    logoutHandler();
  }

  const login = async (userData) => {
    try {
      const { correo, password } = userData;
    const { data } = await axios("/login"+`?correo=${correo}&password=${password}`);
    const {access} = data;
     setAccess(data)
      access && navigate("/home");
    } catch (error) {
      alert("datos no validos")
    }
  };

  function logoutHandler() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
    //eslint-disable-next-line
  }, [access]);

  const searchHandler = async (id) => {
    try {
      const { data } = await axios(
        `/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };
  function closeHandler(id) {
    // nos llega un string
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );

    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let memoria = [];
    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      searchHandler(randomId);
    } else {
      alert("Ese personaje ya fue agregado");
      return;
    }
  }

  return (
    <Container>
      {location.pathname !== "/" && (
        <Nav
        onSearch={searchHandler}
        randomize={randomHandler}
        logout={logoutHandler}
        logOut={logOut}
        isActiveButtons={true}
        />
        )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            // <BackGif>
            <Cards
            characters={characters}
            onClose={closeHandler}
            isActiveButtons={true}
            />
            // </BackGif>
          }
          />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route parth="*" element={<ErrorPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
