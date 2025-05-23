import React from 'react';
import Header from '../components/Header.jsx'
import Cards from '../components/Card.jsx'
import { data } from '../data.js'
import Footer from '../components/Footer.jsx'

export default function Home() {

    const mappedData = data.map((item) => {
        return(
            <Cards key={item.id} item={item} />
        )
    })

	
	return (
		
		<div>
            <Header />

            <br /><br /> <br /> 
            <div className='homeCards'>
            {mappedData}
            </div>

            <Footer />
            </div>
    )
};