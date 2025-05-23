import React from "react";
import Todo from "../components/Todo";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Plan() {
    return(
        <div className="plan">
        <Header />
        <h2>Hi, plan your trip here.</h2>

        <hr/>

      <Todo />
        <hr/>

        <Footer />
        </div>
    );
}