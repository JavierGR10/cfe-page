import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { CircuitTable } from "../Table/CircuitTable";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div className="hero">
          <img
            src="https://www.sap.com/dam/application/imagelibrary/photos/286000/286069-restricted.jpg/_jcr_content/renditions/286069_restricted_photo_2480_0676.jpg.adapt.1920_522.false.false.false.false.jpg/1601575184293.jpg"
            alt="Hero Image"
          />
          <div className="hero-content">
            <h1>CÁLCULO DE CORTO-CIRCUITO EN CIRCUITOS DE DISTRIBUCIÓN</h1>
          </div>
        </div>
        <div className="container-fluid px-5 py-4 min-vh-100">
          <div className="row">
            <CircuitTable />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
