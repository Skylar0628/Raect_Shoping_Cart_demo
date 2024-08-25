import React, { useContext } from 'react'
import Context from '../stroe'


const NavBar = () => {
  const [ state, dispatch ] = useContext(Context);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">甜點蛋糕店</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button class="btn btn-outline-dark position-relative" type="submit">
        Search
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {state.CartList.length}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  </nav>
  )
}

export default NavBar
