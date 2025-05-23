import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return(
        <div>
              <Header />
              <br />
              <div style={styles.container}>
              <div className="bg-primary-subtle rounded p-3">
              <h1>Explore the World with Triply</h1>
              <img src="/img/connect.png" className="img-fluid rounded" alt="road from forest"></img>
<br /><br />
                <h3>Discover new travel destinations, plan your next adventure, and connect with fellow explorers.</h3>
              </div>
                
                <br /><br /><br />
              <h1><b>Connect with Us</b></h1>

              <ul className="navbar-nav">
                <li className="m-4">
                <img src="/img/contact.png" className="rounded-circle img-fluid category-img" alt="national_park" />

                    <h3>
                    Phone</h3>
                    <h4>248 123-4567</h4>
                </li>

                <li className="m-4">
                <img src="/img/email.png" className=" img-fluid category-img" alt="email logo" />

                    <h3>
                    Email</h3>
                    <h4>support@triply.com</h4>
                </li>

                <li className="m-4">
                <img src="/img/address.png" className="img-fluid category-img" alt="address logo" />

                    <h3>Address</h3>
                    <h4>123 Main St, Anytown India</h4>
                </li>

                <li className="m-4">
                <img src="/img/instagram.png" className="rounded-circle img-fluid category-img" alt="instagram logo" />

                    <h3>Social Media</h3>
                    <h4>@triplytravel</h4>
                </li>
              </ul>
              </div>
             <Footer />
        </div>
      
    );
}

const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
    },
  };