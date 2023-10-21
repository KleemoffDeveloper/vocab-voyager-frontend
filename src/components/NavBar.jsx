import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
        <img src="https://4m4you.com/wp-content/uploads/2020/06/logo-placeholder.png" className="navbar-logo" alt="website-logo"/>
        <form className='navbar-searchbox-container'>
            <input
            type="text"
            className='navbar-searchbox'
            placeholder='Search words...'
            required/>
            <select
            name="filter"
            className="navbar-filter">
                <option value="All">All</option>
                <option value="Front end">Front end</option>
                <option value="Back end">Back end</option>
            </select>
        </form>
        <div className='navbar-account-buttons'>
          <button className='navbar-button-sign-up' onClick={(e) => console.log(e) /*TODO: Change function */}>Sign Up</button>
          <button className='navbar-button-log-in' onClick={(e) => console.log(e) /*TODO: Change function */}>Log In</button>
        </div>
    </div>
  )
}