import  './Navbar-style.css'
import logo_image from '../assets/images/codepen-icon.jpg'


const Navbar = () => {
  return (
  
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo_image} width={30} height={30} className="d-inline-block align-top" alt /> &nbsp;<b>Untitled</b>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button type="button" className="btn btn-secondary"><i className="fa fa-heart" aria-hidden="true" /></button>
            <button type="button" className="btn btn-secondary ml-2"><i className="fa fa-cog" aria-hidden="true" /> Settings</button>
            <button type="button" className="btn btn-secondary ml-2"><i className="fa fa-th-large" aria-hidden="true" /></button>
            <button className="btn btn-success my-2 my-sm-0 ml-2" type="submit">Sign Up</button>
            <button type="button" className="btn btn-secondary ml-2">Log In</button>
          </form>
        </div>
      </nav>

    </>
  )
}

export default Navbar