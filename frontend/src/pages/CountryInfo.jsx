import React from 'react';
import Header from '../components/Header';
import GetCountryInfo from '../components/GetCountryInfo';
import './countryInfo.css';


export default function CountryInfo() { 
return ( 
	<div className="App"> 
	<Header />
	<center className="main-body">
	<GetCountryInfo />

	</center>
	</div> 
); 
} 
