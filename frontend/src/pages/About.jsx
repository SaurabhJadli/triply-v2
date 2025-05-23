import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>

    <div style={styles.container}>
    <Header /><br />
      <h1>Triply: Exploring the World Through a Web App</h1>
      <img src="/img/travel_about.png" className="img-fluid rounded" alt="road from forest"></img>
      <br /><br /><h4>
      Triply is a cutting-edge web application that empowers users to discover
and plan their dream travel destinations around the world. With a sleek
and intuitive interface, Triply offers a seamless experience for exploring
the globe's most captivating locations.
      </h4><br /><br /><br />
      <h1>Key Features of Triply</h1>
      <ul>
    <li className="bg-success-subtle rounded p-3 m-2">
    <h3>Destination Discovery</h3>
      <h4>Triply's extensive database of global destinations, complete with detailed descriptions, photos, and reviews.</h4>
    </li>  

     <li className="bg-success-subtle rounded p-3 m-2">
     <h3>Trip Planning Tools</h3>
      <h4>Intuitive itinerary builders, calendars, and cost estimators to help users plan their perfect trip.</h4>
     </li> 
     
     <li className="bg-success-subtle rounded p-3 m-2">
     <h3>Collaborative Features</h3>
      <h4>Shared trip planning, group chat, and real-time updates to ensure a seamless group travel experience.</h4>
     </li>
      </ul>
      
<br /><br /><br />

      <h2>Future Improvements and Conclusion</h2>
      <img src="/img/about_futue.png" className="img-fluid rounded" alt="future_photo"></img>
<br /><br />
<ul>
  <li className="bg-primary-subtle rounded p-3 m-2">
  <h3>Virtual Reality Integration</h3>
      <h4>Exploring the integration of virtual reality technology to provide users with immersive destination experiences.</h4>
  </li>

  <li className="bg-primary-subtle rounded p-3 m-2">
  <h3>Personalized Recommendations</h3>
      <h4>Enhancing the recommendation engine to provide even more tailored suggestions based on user behavior and preferences.</h4>

  </li>

  <li className="bg-primary-subtle rounded p-3 m-2">
  <h3>Voice-Controlled Features</h3>
      <h4>Implementing voice-controlled functionalities to enable hands-free interaction and seamless trip planning.</h4>

  </li>

  <li className="bg-primary-subtle rounded p-3 m-2">
  <h3>Sustainability Initiatives</h3>
      <h4>Integrating eco-friendly travel options and sustainability-focused features to promote responsible tourism.</h4>

  </li>

</ul>
      
      
      
     
<br /><br />

      <h4>Triply is a revolutionary web application that redefines the way people
explore and plan their travels. With its cutting-edge features, intuitive
design, and robust technology stack, Triply is poised to continue
evolving and enhancing the travel experience for users worldwide.</h4>
    </div>
    <Footer />

    </div>

  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
};