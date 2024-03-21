import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Map } from "../Map/Map";
import { Navbar } from "../Navbar/Navbar";
import "./home.css";

export const Home = () => {
  const [selectedOption, setSelectedOption] = useState("LAJA");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const distributionData = {
    LAJA: {
      data: [
        { name: "Nombre del Ramal", value: "TRONCAL" },
        { name: "Fecha", value: "21-sept-21" },
        { name: "Voltaje primario del transformador (KV)", value: "69" },
        { name: "Voltaje secundario del transformador (KV)", value: "23,8" },
        { name: "Icc3f(B.T.) EN AMPERES", value: "3205" },
        { name: "ANGULO (Icc3f)", value: "-88,2" },
        { name: "Icc1f(B.T.) EN AMPERES", value: "3350" },
        { name: "ANGULO (Icc1f)", value: "-88,8" },
        { name: "MVAb", value: "100" },
        { name: "Resistividad del terreno (ohms/mts.)", value: "100" },
        { name: "Resistencia de contacto a tierra (ohms)", value: "0" },
      ],
      coordinates: [
        {
          lat: 20.578131,
          lng: -103.147131,
          description: "S.E. Puente Grandre a C-5186",
        },
        {
          lat: 20.579809,
          lng: -103.125593,
          description: "C-5186 A CRUCERO AEREO",
        },
        {
          lat: 20.580238,
          lng: -103.124536,
          description: "CRUCERO AEREO HASTA  F 132",
        },
        { lat: 20.589277, lng: -103.113087, description: "F 132 A RTA 6564" },
        {
          lat: 20.614783,
          lng: -103.080317,
          description: "C RTA 6564 A RTE 6526",
        },
      ],
    },
    HUIZQUILCO: {
      data: [
        { name: "Nombre del Ramal", value: "TRONCAL" },
        { name: "Fecha", value: "05-mar-24" },
        { name: "Voltaje primario del transformador (KV)", value: "115" },
        { name: "Voltaje secundario del transformador (KV)", value: "23,8" },
        { name: "Icc3f(B.T.) EN AMPERES", value: "2572" },
        { name: "ANGULO (Icc3f)", value: "-87,3" },
        { name: "Icc1f(B.T.) EN AMPERES", value: "2758" },
        { name: "ANGULO (Icc1f)", value: "-88" },
        { name: "MVAb", value: "100" },
        { name: "Resistividad del terreno (ohms/mts.)", value: "100" },
        { name: "Resistencia de contacto a tierra (ohms)", value: "0" },
      ],
      coordinates: [
        {
          lat: 20.61465,
          lng: -103.07961,
          description: "DE SUBESTACION A C381",
        },
        {
          lat: 20.621969,
          lng: -103.050027,
          description: "DE C381 A  C309",
        },
        {
          lat: 20.621893,
          lng: -103.048886,
          description: "C309 A C310",
        },
        { lat: 20.621746, lng: -103.042287, description: "C310 A CT 107" },
        {
          lat: 20.622891,
          lng: -103.029398,
          description: "DE CT107 A F4729",
        },
        {
          lat: 20.622615,
          lng: -103.0286,
          description: "DE F4729 A F 8948",
        },
        {
          lat: 20.622356,
          lng: -103.022075,
          description: "DE F8948 A F697 CROMADORA",
        },
        {
          lat: 20.6182,
          lng: -103.009369,
          description: "DE F697 CROMADORA A RTA 597",
        },
        {
          lat: 20.603641,
          lng: -102.978259,
          description: "DE RTA 597 A  F 3387 BECAR ",
        },
        {
          lat: 20.601799,
          lng: -102.974436,
          description: "DE F 3387 A C0085",
        },
        {
          lat: 20.585448,
          lng: -102.927647,
          description: "C0085 A RTI 598",
        },
        {
          lat: 20.619164,
          lng: -102.914146,
          description: "DE RTI 598 A C1019",
        },
        {
          lat: 20.619008,
          lng: -102.908053,
          description: "DE C1019 A CALLE HUMBERTO DE ANDA TECO",
        },
        {
          lat: 20.63085,
          lng: -102.897061,
          description: "CALLE HUMBERTO DE ANDA A RTE 599",
        },
      ],
    },
    CALDERON: {
      data: [
        { name: "Nombre del Ramal", value: "TRONCAL" },
        { name: "Fecha", value: "06-mar-24" },
        { name: "Voltaje primario del transformador (KV)", value: "115" },
        { name: "Voltaje secundario del transformador (KV)", value: "23,8" },
        { name: "Icc3f(B.T.) EN AMPERES", value: "2572" },
        { name: "ANGULO (Icc3f)", value: "-87,3" },
        { name: "Icc1f(B.T.) EN AMPERES", value: "2758" },
        { name: "ANGULO (Icc1f)", value: "-88" },
        { name: "MVAb", value: "100" },
        { name: "Resistividad del terreno (ohms/mts.)", value: "100" },
        { name: "Resistencia de contacto a tierra (ohms)", value: "0" },
      ],
      coordinates: [
        {
          lat: 20.617411,
          lng: -103.069829,
          description: "S.E. ZAD A  F5310",
        },
        {
          lat: 20.617921,
          lng: -103.066771,
          description: "DE F 5310 A C298",
        },
        {
          lat: 20.618485,
          lng: -103.06307,
          description: "C298 A C285",
        },
        {
          lat: 20.621782,
          lng: -103.054241,
          description: "DE C285 A C408",
        },
        {
          lat: 20.622626,
          lng: -103.053798,
          description: "C408 A C409",
        },
        {
          lat: 20.623155,
          lng: -103.053643,
          description: "C409 A F 4842",
        },
        {
          lat: 20.641264,
          lng: -103.050094,
          description: "DE F4842 A F6408 3D",
        },
        {
          lat: 20.651571,
          lng: -103.044717,
          description: "F6408 3D A RTA 553",
        },
        {
          lat: 20.655184,
          lng: -103.033594,
          description: "DE RTA 553 A F4848",
        },
        {
          lat: 20.664353,
          lng: -103.013625,
          description: "DE F4848 A F4849 3D SAN JOSE DE LAS F",
        },
        {
          lat: 20.681602,
          lng: -103.00104,
          description: "DE LA F 4849 DE 3D A F5314 3D LA PURISIMA",
        },
        {
          lat: 20.685702,
          lng: -102.994391,
          description: "F5314 3D LA PURISIMA A C415",
        },
        {
          lat: 20.687306,
          lng: -102.991811,
          description: "C415 A F 163 3D LA JOYA",
        },
        {
          lat: 20.694556,
          lng: -102.980722,
          description: "DE F 163 A RTE 408",
        },
      ],
    },
  };

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
            <div className="col-lg-6">
              <div className="row">
                <table className="table table-hover align-middle ">
                  <thead className="table-success">
                    <tr>
                      <th className="col-5"></th>
                      <th className="text-center fs-5">Datos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Clave y Nombre del circuito:</td>
                      <td>
                        <select
                          className="form-select"
                          onChange={handleSelectChange}
                          value={selectedOption}
                        >
                          <option value="LAJA">PTD-5235 LA LAJA</option>
                          <option value="HUIZQUILCO">
                            ZAD-5135 HUIZQUILCO
                          </option>
                          <option value="CALDERON">ZAD-5125 CALDERON</option>
                        </select>
                      </td>
                    </tr>
                    {distributionData[selectedOption].data.map((row, index) => (
                      <tr key={index}>
                        <td>{row.name}</td>
                        <td className="text-center">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <Map coordinates={distributionData[selectedOption].coordinates} />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
