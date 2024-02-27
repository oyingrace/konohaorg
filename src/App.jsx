
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <div>
<BrowserRouter>
<Routes>
  <Route index element= {<Home/>}/>
  <Route path="/programs" element= {<Programs/>}/>
</Routes>
</BrowserRouter>
  </div>
);

export default App;
