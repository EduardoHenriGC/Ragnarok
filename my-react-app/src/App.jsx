import Homepage from "./pages/home";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return <div>{isLoading ? <Loading /> : <Homepage />}</div>;
}

export default App;
