// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//       <>
//         <Outlet />
//       </>
//   )
// }

// export default Layout


import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/Exe3App">Exercise 3</Link></li> 
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
