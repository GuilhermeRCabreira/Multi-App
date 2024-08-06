import Tradutor from "./components/LanguageTranslator";
import Movie from "./components/MovieSearchEngine";
import QRCode from "./components/QRCodeGenerator";
import IPAddressFinder from "./components/IPAddressFinder";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <>
      <Tradutor />,
      {/* <Movie />,
      <QRCode />, */}
      {/* <IPAddressFinder />, */}
      <Login />
    </>
  );
}

export default App;
