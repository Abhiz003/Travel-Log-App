import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div><img src="Images/safar_logo.png" alt="SAFAR" /></div>
				<div className='navlinks'>
					<ul className='d-flex'>
						<Link to="/" className="btn btn-primary">HOME</Link>
						<Link to="/feed" className="btn btn-primary">FEED</Link>
						<Link to="/viewblogs" className="btn btn-primary">GUIDE</Link>
						<Link to="/signup" className="btn btn-warning">SIGNUP</Link>
						<Link to="/login" className="btn btn-success">LOGIN</Link>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar