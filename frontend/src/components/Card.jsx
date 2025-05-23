import React from 'react';
import '../App.css';


export default function Cards(props) {
	return (

			<div className="card mb-3 card-style" > 
			  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.item.coverImg} className="img-fluid rounded card-img" alt={props.item.title} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
	   <span className='material-symbols-outlined card-text'>location_on</span>
	   <span className="card-country card-text">{props.item.country} </span>
		<a href={props.item.googleMapLink} target='_blank' className='card-text' rel="noopener noreferrer">View on Google Maps</a>
<br /><br />
        <h5 className="card-title title">{props.item.title}</h5>
        <p className="card-text desc">{props.item.description}</p>
		<a href={props.item.details} target='_blank' rel="noopener noreferrer"> <p className="card-text"><small className="text-body-secondary">Read more..</small></p></a>
      </div>
    </div>
  </div>
</div>
		
	)
}