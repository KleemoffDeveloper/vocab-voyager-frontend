import { useState } from 'react'
import './Navbar.css'


export default function Navbar() {

  const [searchData, setSearchData] = useState('')

  function navbarClickHandle(e, location){
    e.preventDefault()
    window.location.pathname = location
  }

  function handleSearch(e){
    e.preventDefault()
    console.log(searchData)
  }

  return (
    <div className="navbar-container">
        <img
        src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png"
        className="navbar-logo"
        onClick={(e) => navbarClickHandle(e, '/')}
        alt="website-logo"
        
        />
        <form className='navbar-searchbox-container' onSubmit={(e) => handleSearch(e)}>
            <input
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            className='navbar-searchbox'
            placeholder='Search words...'
            required/>
            <input type="submit" className='navbar-search-button' value="Search"/>
        </form>
        <div className='navbar-account-buttons'>
          <button className='navbar-button-sign-up' onClick={(e) => navbarClickHandle(e, '/sign-up') /*TODO: Change function */}>Sign Up</button>
          <button className='navbar-button-log-in' onClick={(e) => navbarClickHandle(e, '/log-in') /*TODO: Change function */}>Log In</button>
        </div>
    </div>
  )
}