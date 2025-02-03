import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import DynamicRoutingPage from "./pages/Exercise_02/DynamicRouting/index.jsx";
import Layout from "./pages/Layout.jsx";
import FunctionalExamplePage from "./pages/Exercise_01/FunctionalExample/index.jsx";
import Exercise_01 from "./pages/Exercise_01/index.jsx";
import Exercise_02 from "./pages/Exercise_02/index.jsx";
import ClassExamplePage from "./pages/Exercise_01/ClassExample/index.jsx";
import ApiCallPage from "./pages/Exercise_02/ApiCall/index.jsx";
import UseContextPage from "./pages/Exercise_02/UseContext/index.jsx";
import Exe3App from "./pages/Exercise_03/Exe3App.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exercise_01" element={<Exercise_01 />} />
          <Route path="exercise_02" element={<Exercise_02 />} />
          <Route path="dynamic">
            <Route path="/dynamic/:id/:otherParam" element={<DynamicRoutingPage />} />
          </Route>
          <Route path="functional-example" element={<FunctionalExamplePage />} />
          <Route path="class-example" element={<ClassExamplePage />} />
          <Route path="api-call" element={<ApiCallPage />} />
          <Route path="use-context" element={<UseContextPage />} />
          <Route path="exercise-3" element={<Exe3App />} />
        </Route>
    )
)

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App
