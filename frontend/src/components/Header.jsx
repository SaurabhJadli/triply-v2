import React, { useState } from "react";
import { Link } from "react-router";
import '../App.css';

// Logo imports
import plan from "../assets/logos/plan.png";
import category from "../assets/logos/category_search.svg";
import currency from "../assets/logos/money.png";
import map from "../assets/logos/map.png";
import about from "../assets/logos/about.png";
import contact from "../assets/logos/contact.png";
import logout from "../assets/logos/log-out.png";

export default function Header() {

  const [searchTerm, setSearchTerm] = useState("");

  const data = {st:searchTerm};

	return (
		
			<div className="container">
			<nav className="navbar navbar-expand-lg nav-color  fixed-top" >
  <div className="container-fluid nav-color">
  <Link to="/home" className="navbar-brand " ><h2 className="logoTitle">Triply</h2></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll scrollHeight" >  
          <li className="nav-item">
		<Link to="/plan" className="nav-link active" aria-current="page" >
		<img src={plan} alt="planLogo" className="headLogo" />
			Plan trip</Link>
        </li>

		
        <li className="nav-item dropdown">
		<button href="#" className="nav-link active dropdown-toggle" aria-current="page" data-bs-toggle="dropdown" aria-expanded="false">
		<img src={category} alt="planLogo" className="headLogo" />
		Category</button>

    <ul className="dropdown-menu">
   
            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("NationalPark");
        }}>
            <img src="/img/national-park.png" className="rounded-circle img-fluid category-img" alt="national_park" />
            National Parks</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Beaches");
        }}>
            <img src="/img/beach.png" className="rounded-circle img-fluid category-img" alt="Beaches" />
            Beaches</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("HillStation");
        }}>
            <img src="/img/mountains.png" className="rounded-circle img-fluid category-img" alt="Hill Station" /> 
            Hill Station</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Island");
        }}>
            <img src="/img/island.png" className="rounded-circle img-fluid category-img" alt="Island" />
            Island</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("city");
        }}>
            <img src="/img/city.png" className="rounded-circle img-fluid category-img" alt="Mega cities" /> 
            Mega cities</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Ancient");
        }}>
            <img src="/img/ancient.png" className="rounded-circle img-fluid category-img" alt="Ancient and Historical" /> 
            Ancient and Historical</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Religious");
        }}>
            <img src="/img/religious.png" className="rounded-circle img-fluid category-img" alt="Religious Sites" />  
            Religious Sites</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Deserts");
        }}>
            <img src="/img/desert.png" className="rounded-circle img-fluid category-img" alt="Deserts" />
            Deserts</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" href="#"  onClick={() =>{
         data.st=("Snow");
        }}>
            <img src="/img/snowman.png" className="rounded-circle img-fluid category-img" alt="Snow and Ice" />
            Snow and Ice</Link></li>
           
            <li><hr className="dropdown-divider" /></li>

            <li><button className="dropdown-item" href="#">
            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-success me-2" onClick={() =>{
            data.st=("asia");}}>
            Asia</button></Link>

            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-light me-2" onClick={() =>{
            data.st=("Antartica");}}>Antartica</button></Link>

            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-warning me-2" onClick={() =>{
            data.st=("Africa");}}>Africa</button></Link>

            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-secondary me-2" onClick={() =>{
            data.st=("Austalia");}}>Austalia</button></Link>

           <Link to="/searchResult" state={data} > <button type="button" className="btn btn-primary me-2" onClick={() =>{
            data.st=("Europe");}}>Europe</button> </Link>

            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-info me-2" onClick={() =>{
            data.st=("America");}}>N.America</button> </Link>

            <Link to="/searchResult" state={data} > <button type="button" className="btn btn-danger me-2" onClick={() =>{
            data.st=("America");}}>S.America</button> </Link>
                  </button></li>
          </ul>
        </li>

        <li className="nav-item">
		<Link to="/currency" className="nav-link" href="#">
		<img src={currency} alt="currency convert" className="headLogo" />
		Currency converter</Link>
        </li>

        <li className="nav-item">
		<Link to="/countryInfo" className="nav-link">
		<img src={map} alt="country info" className="headLogo" />
		Country info</Link>
        </li>

        <li className="nav-item">
		<Link to="/about" className="nav-link" href="#">
		<img src={about} alt="About" className="headLogo" />
		About</Link>
        </li>

        <li className="nav-item">
		<Link to="/contact" className="nav-link" href="#">
		<img src={contact} alt="contact" className="headLogo" />
		Contact</Link>
        </li>

        <li className="nav-item">
		<Link to="/login" className="nav-link" href="#">
		<img src={logout} alt="Logout" className="headLogo" />
		log out</Link>
        </li>

      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) =>{
          setSearchTerm(e.target.value);
        }} aria-label="Search" />
     <Link to="/searchResult" state={data}> <button className="btn btn-outline-success bg-success text-white">Search</button></Link>
      </form> 
    </div>
  </div>
</nav>


</div>
	);

  
}