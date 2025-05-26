import React from "react";
import Todo from "../components/Todo";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Plan() {
    return(
        <div>
        <Header />
        <h2 className='text-center mt-4'>Hi, plan your trip here.</h2>
        <hr className="w-75 m-auto" />

      <Todo />
        <hr/>

        <Footer />
        </div>
    );
}