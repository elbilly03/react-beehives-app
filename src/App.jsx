import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Arnia from './components/arnia.jsx'

function App() {
  return (
    <div className="flex flex-col gap-10 text-center">
      <Arnia nome="Arnia Gialla" posizione="43.459..., 12.239..." />
      <Arnia nome="Arnia Rossa" posizione="45.459..., 12.239..." />
      <Arnia nome="Arnia Blu" posizione="47.459..., 12.239..." />
    </div>
  )
}

export default App;
