import{NavLink} from 'react-router-dom'
import React from'react'
import CartWidget from '../CartWidget/CartWidget'

export const NavBar=() =>{
  return(
    <div class="NavBar">
      <nav>
        <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/categoria/taza'>tazas</NavLink>
        </li>
        <li>
        <NavLink to='/categoria/taza-duo'>tazas Duo</NavLink>
        </li>
        <li>
        <NavLink to='/categoria/taza3d'>tazas 3D</NavLink>
        </li>
        <li>
        <NavLink to='/'>Contactanos</NavLink>
        </li>
        <li>
        <NavLink classname="nav__link" to='/cart'>
          <CartWidget/>
        </NavLink>
        </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar;