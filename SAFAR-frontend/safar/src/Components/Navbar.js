import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className='col-1'>
					<Link to="/intro" >
						<img src="Images/safar_logo.png" className="logo" alt="SAFAR" />
					</Link>
					</div>
				
				<div className='navlinks1'>
					<ul className='d-flex'>
						<Link to="/home" className="btn btn-primary">HOME</Link>
						<Link to="/feed/allusers" className="btn btn-primary">FEED</Link>
						<Link to="/viewblogs" className="btn btn-primary">BLOGS</Link>
						<Link to="/signup" className="btn btn-warning">SIGNUP</Link>
						<Link to="/login" className="btn btn-success">LOGIN</Link>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar