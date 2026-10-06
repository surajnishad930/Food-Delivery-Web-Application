import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddFood from './pages/AddFood/AddFood'
import ListFood from './pages/ListFood/ListFood'
import Orders from './pages/Orders/Orders'
import Sidebar from './components/Sidebar/Sidebar'
import Menubar from './components/Menubar/Menubar'
import { ToastContainer} from 'react-toastify'

const App = () => {
  const [sidebarVisible, setSidebarVisible]=useState(true);

  const toggleSidebar=()=>{
    setSidebarVisible(!sidebarVisible);
  }

  return (
     <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <Sidebar sidebarVisible={sidebarVisible} /> 
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                <Menubar toggleSidebar={toggleSidebar} />
                <ToastContainer/>
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    <Routes>
                      <Route path='/add' element={<AddFood/>}/>
                      <Route path='/list' element={<ListFood/>}/>
                      <Route path='/orders' element={<Orders/>}/>
                      <Route path='/' element={<ListFood/>}/>
                    </Routes>
                </div>
            </div>
        </div>
  )
}

export default App

// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import AddFood from './pages/AddFood/AddFood'
// import ListFood from './pages/ListFood/ListFood'
// import Orders from './pages/Orders/Orders'
// import Sidebar from './components/Sidebar/Sidebar'
// import Menubar from './components/Menubar/Menubar'

// const App = () => {
//   return (
//     <div classNameName="d-flex" id="wrapper">
//       {/* Sidebar*/}
//       <Sidebar/>

//       {/* Page content wrapper*/}
//       <div id="page-content-wrapper">
//         {/* Top navigation*/}
//         <Menubar/>

//         {/* Page content*/}
//         <div classNameName="container-fluid">
//           <Routes>
//             <Route path='/add' element={<AddFood/>}/>
//             <Route path='/list' element={<ListFood/>}/>
//             <Route path='/orders' element={<Orders/>}/>
//             <Route path='/' element={<ListFood/>}/>
//           </Routes>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import AddFood from './pages/AddFood/AddFood'
// import ListFood from './pages/ListFood/ListFood'
// import Orders from './pages/Orders/Orders'

// const App = () => {
//   return (
//     <div classNameName="d-flex" id="wrapper">

//       {/* Sidebar */}
//       <div classNameName="border-end bg-white" id="sidebar-wrapper">
//         <div classNameName="sidebar-heading border-bottom bg-light">
//           Start Bootstrap
//         </div>

//         <div classNameName="list-group list-group-flush">
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Dashboard
//           </a>
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Shortcuts
//           </a>
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Overview
//           </a>
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Events
//           </a>
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Profile
//           </a>
//           <a classNameName="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
//             Status
//           </a>
//         </div>
//       </div>

//       {/* Page content wrapper */}
//       <div id="page-content-wrapper">

//         {/* Top navigation */}
//         <nav classNameName="navbar navbar-expand-lg navbar-light bg-light border-bottom">
//           <div classNameName="container-fluid">

//             <button classNameName="btn btn-primary" id="sidebarToggle">
//               Toggle Menu
//             </button>

//             <button
//               classNameName="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span classNameName="navbar-toggler-icon"></span>
//             </button>

//             <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul classNameName="navbar-nav ms-auto mt-2 mt-lg-0">

//                 <li classNameName="nav-item active">
//                   <a classNameName="nav-link" href="#!">
//                     Home
//                   </a>
//                 </li>

//                 <li classNameName="nav-item">
//                   <a classNameName="nav-link" href="#!">
//                     Link
//                   </a>
//                 </li>

//                 <li classNameName="nav-item dropdown">
//                   <a
//                     classNameName="nav-link dropdown-toggle"
//                     id="navbarDropdown"
//                     href="#"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-haspopup="true"
//                     aria-expanded="false"
//                   >
//                     Dropdown
//                   </a>

//                   <div
//                     classNameName="dropdown-menu dropdown-menu-end"
//                     aria-labelledby="navbarDropdown"
//                   >
//                     <a classNameName="dropdown-item" href="#!">
//                       Action
//                     </a>

//                     <a classNameName="dropdown-item" href="#!">
//                       Another action
//                     </a>

//                     <div classNameName="dropdown-divider"></div>

//                     <a classNameName="dropdown-item" href="#!">
//                       Something else here
//                     </a>
//                   </div>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Page content */}
//         <div classNameName="container-fluid">
//           <Routes>
//             <Route path="/add" element={<AddFood />} />
//             <Route path="/list" element={<ListFood />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route
//               path="/"
//               element={
//                 <>
//                   <h1 classNameName="mt-4">Simple Sidebar</h1>
//                   <p>
//                     The starting state of the menu will appear collapsed on
//                     smaller screens, and will appear non-collapsed on larger
//                     screens. When toggled using the button below, the menu will
//                     change.
//                   </p>
//                   <p>
//                     Make sure to keep all page content within the
//                     <code> #page-content-wrapper</code>.
//                     The top navbar is optional, and just for demonstration.
//                     Just create an element with the
//                     <code> #sidebarToggle</code> ID which will toggle the menu
//                     when clicked.
//                   </p>
//                 </>
//               }
//             />
//           </Routes>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App