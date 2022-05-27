// import React from 'react'

// const Navbarr = () => {
//   return (
//     <div>
//         <ul className="nav nav-pills">
//             {/* <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">root of equation</a> */}
//             <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Bisection</a>                 
//                 <ul className="dropdown-menu">
//                     <li><a classNames="dropdown-item" href="/">Bisection</a></li>
//                     <li><a classNames="dropdown-item" href="/">Bisection</a></li>
//                 </ul>
//         </ul>
        
//   </div>
//   )
// }

// export default Navbarr
// import React from 'react'

// const Navbarr = () => {
//   return (
//     <div>
//     <ul className="nav nav-pills">
//     {/* <li className="nav-item">
//       <a className="nav-link active" aria-current="page" href="#">Active</a>
//     </li> */}
//     {/* <li className="nav-item dropdown"> */}
//       <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
//       <ul className="dropdown-menu">
//         <li><a className="dropdown-item" href="/">Action</a></li>
//         <li><a className="dropdown-item" href="/">Another action</a></li>
//         <li><a className="dropdown-item" href="/">Something else here</a></li>
//         <li><hr className="dropdown-divider"/></li>
//         <li><a className="dropdown-item" href="/">Separated link</a></li>
//       </ul>
//     {/* </li> */}
//     {/* <li className="nav-item">
//       <a className="nav-link" href="#">Link</a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link disabled">Disabled</a>
//     </li> */}
//   </ul>
//   </div>
//   )
// }

// export default Navbarr
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <div>
    <nav className="nav">
    <Link className="nav-link active" aria-current="page" to="/Bisection">Bisection</Link>
    <Link className="nav-link active" aria-current="page" to="/FalsePosition">FalsePosition</Link>
    <Link className="nav-link active" aria-current="page" to="/OnePointIteration">OnePointIteration</Link>
    <Link className="nav-link active" aria-current="page" to="/NewTonRaphson">NewTonRaphson</Link>
    <Link className="nav-link active" aria-current="page" to="/Secant">Secant</Link>
    </nav>
    </div>
  )
}

export default Navbarr
// import React from 'react'

// const Navbarr = () => {
//   return (
//     <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Numer</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
//         <ul class="navbar-nav">
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Root of equation</a>
//             <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
//               <li><a class="dropdown-item" href="#">Action</a></li>
//               <li><a class="dropdown-item" href="#">Another action</a></li>
//               <li><a class="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav></div>
//   )
// }

// export default Navbarr