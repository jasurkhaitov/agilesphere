import { useState } from "react";
import { Contexts } from "./context/Context";
import Getstart from "./pages/Getstart";

function App() {

  const [className, setClassName] = useState<boolean>(false)
  const [] = useState()

  return (
    <div className="font-poppins h-full">
      <Contexts.Provider value ={{ className, setClassName }}>
        <Getstart/>
      </Contexts.Provider>
    </div>
  )
}

export default App;