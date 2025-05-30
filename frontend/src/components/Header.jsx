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
import { Button } from "@mui/material";

// Category logos
import nationalPark from "../assets/logos/national-park.png";
import beach from "../assets/logos/beach.png";
import hillStation from "../assets/logos/mountains.png";
import island from "../assets/logos/island.png";
import city from "../assets/logos/city.png";
import ancient from "../assets/logos/ancient.png";
import religious from "../assets/logos/religious.png";
import deserts from "../assets/logos/desert.png";
import snow from "../assets/logos/snowman.png";

export default function Header() {

  const [searchTerm, setSearchTerm] = useState("");

  const data = {st:searchTerm};

	return (
		
			<div className="container mb-4">
			<nav className="navbar navbar-expand-lg nav-color  fixed-top" >
  <div className="container-fluid nav-color">

  <Link to="/home" className="navbar-brand " >
  <Button title="Triply home"><h4 className="logoTitle">Triply</h4></Button>
  </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll scrollHeight" >  
          <li className="nav-item">
		<Link to="/plan" className="nav-link active" aria-current="page" >
    <Button 
    title="Plan your trip"
    className="text-dark fs-6 p-2">
		<img src={plan} alt="planLogo" className="headLogo mx-2" />
			Plan trip
    </Button>
      </Link>
        </li>

		
        <li className="nav-item dropdown">
		<Button className="nav-link active dropdown-toggle p-2" aria-current="page" data-bs-toggle="dropdown" aria-expanded="false">
		<img src={category} alt="planLogo" className="headLogo mx-2" />
		Category</Button>

    <ul className="dropdown-menu">
   
            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("NationalPark");
        }}>
            <img src={nationalPark} className="rounded-circle img-fluid category-img" alt="national_park" />
            National Parks</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Beaches");
        }}>
            <img src={beach} className="rounded-circle img-fluid category-img" alt="Beaches" />
            Beaches</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("HillStation");
        }}>
            <img src={hillStation} className="rounded-circle img-fluid category-img" alt="Hill Station" /> 
            Hill Station</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Island");
        }}>
            <img src={island} className="rounded-circle img-fluid category-img" alt="Island" />
            Island</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("city");
        }}>
            <img src={city} className="rounded-circle img-fluid category-img" alt="Mega cities" /> 
            Mega cities</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Ancient");
        }}>
            <img src={ancient} className="rounded-circle img-fluid category-img" alt="Ancient and Historical" /> 
            Ancient and Historical</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Religious");
        }}>
            <img src={religious} className="rounded-circle img-fluid category-img" alt="Religious Sites" />  
            Religious Sites</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Deserts");
        }}>
            <img src={deserts} className="rounded-circle img-fluid category-img" alt="Deserts" />
            Deserts</Link></li>

            <li><Link to="/searchResult" state={data} className="dropdown-item fw-bold" onClick={() =>{
         data.st=("Snow");
        }}>
            <img src={snow} className="rounded-circle img-fluid category-img" alt="Snow and Ice" />
            Snow and Ice</Link></li>
           
            <li><hr className="dropdown-divider" /></li>

            <li><button className="dropdown-item">
            
            <Link to="/searchResult" state={data} > 
            <button type="button" className="btn btn-success me-2" onClick={() =>{
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
		<Link to="/currency" className="nav-link">
    <Button
    title="convert currency"
    className="text-dark fs-6 p-2"
    >
		<img src={currency} alt="currency convert" className="headLogo mx-2" />
		Currency Convert
    </Button>
    </Link>
        </li>

        <li className="nav-item">
		<Link to="/countryInfo" className="nav-link">
       
    <Button
     title="get country info"
    className="text-dark fs-6 p-2">
		<img src={map} alt="country info" className="headLogo mx-2" />
		Country info
    </Button>
    </Link>
        </li>

        <li className="nav-item">

		<Link to="/about" className="nav-link">
        <Button
        title="about us"
    className="text-dark fs-6 p-2"
    >
		<img src={about} alt="About" className="headLogo mx-2" />
		About
        </Button>
    </Link>
        </li>

        <li className="nav-item">
		<Link to="/contact" className="nav-link">
    <Button
    title="contact us"
    className="text-dark fs-6 p-2"
    >
		<img src={contact} alt="contact" className="headLogo mx-2" />
		Contact
    </Button>
    </Link>
        </li>

        <li className="nav-item">
		<Link to="/login" className="nav-link">
    <Button
    title="log out"
    className="text-dark p-2"
    >
		<img src={logout} alt="Logout" className="headLogo mx-2" />
		log out
    </Button>
    </Link>
        </li>

      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) =>{
          setSearchTerm(e.target.value);
        }} aria-label="Search" />
     <Link to="/searchResult" state={data}> <Button className="btn btn-outline-success bg-success text-white rounded-2">Search</Button></Link>
      </form> 
    </div>
  </div>
</nav>
</div>
	);

  
}