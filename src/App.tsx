import HiveQRCode from "hive-qrcode";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HiveQRCode op={["transfer", {}]} />
    </div>
  );
}

export default App;
