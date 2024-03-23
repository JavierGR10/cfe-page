import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import distributionData from "../../assets/js/data";
import selectData from "../../assets/js/selectData";
import { Map } from "../Map/Map";

export const CircuitTable = () => {
  const [selectedZone, setSelectedZone] = useState("ZONA CHAPALA");
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedNode, setSelectedNode] = useState("");
  const [selectedNode2, setSelectedNode2] = useState("");
  const [coordinates, setCoordinates] = useState({}); // Estado para almacenar las coordenadas

  const getCoordinatesForNode = () => {
    const circuitData = distributionData[selectedCircuit];
    if (circuitData) {
      const nodeData = circuitData.coordinates.find(
        (node) => node.node === selectedNode
      );
      if (nodeData) {
        return nodeData;
      }
    }
    return null;
  };

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
    setSelectedCircuit("");
  };
  const handleCircuitChange = (event) => {
    setSelectedCircuit(event.target.value);
    setSelectedNode("");
    setSelectedNode2("");
    setCoordinates(null);
  };

  const handleNode1Change = (event) => {
    setSelectedNode(event.target.value);
    const nodeCoordinates = getCoordinatesForNode();
    setCoordinates({ lat: nodeCoordinates.lat, lng: nodeCoordinates.lng });
  };

  const handleNode2Change = (event) => {
    setSelectedNode2(event.target.value);
    const nodeCoordinates = getCoordinatesForNode();
    setCoordinates({ lat: nodeCoordinates.lat, lng: nodeCoordinates.lng });
  };

  // Función para obtener los circuitos de la zona seleccionada
  const getCircuits = () => {
    const selectedZoneData = selectData.zones.find(
      (zone) => zone.value === selectedZone
    );
    return selectedZoneData ? selectedZoneData.circuitName : [];
  };
  // Función para obtener los nodos de la zona seleccionada
  const getNodes = () => {
    const selectedNodeData = distributionData[selectedCircuit];
    return selectedNodeData ? selectedNodeData.coordinates : [];
  };

  useEffect(() => {
    // Actualizar las coordenadas cuando selectedNode cambie
    if (selectedNode !== "") {
      const nodeCoordinates = getCoordinatesForNode();
      setCoordinates(nodeCoordinates);
    } else {
      setCoordinates(null);
    }
  }, [selectedNode]); // Ejecutar el efecto cuando selectedNode cambie

  return (
    <>
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
                <td>Zona:</td>
                <td>
                  <select
                    className="form-select"
                    onChange={handleZoneChange}
                    value={selectedZone}
                  >
                    <option value="" disabled>
                      Selecciona una zona
                    </option>
                    {selectData.zones.map((zone) => (
                      <option value={zone.value} key={zone.value}>
                        {zone.value}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                {selectedZone && (
                  <>
                    <td>Clave y Nombre del circuito:</td>
                    <td>
                      <select
                        className="form-select"
                        onChange={handleCircuitChange}
                        value={selectedCircuit}
                      >
                        <option value="" disabled>
                          Selecciona un circuito
                        </option>
                        {getCircuits().map((circuit) => (
                          <option key={circuit.value} value={circuit.value}>
                            {circuit.label}
                          </option>
                        ))}
                      </select>
                    </td>
                  </>
                )}
              </tr>
              {selectedCircuit && distributionData[selectedCircuit] ? (
                distributionData[selectedCircuit].data.length > 0 ? (
                  distributionData[selectedCircuit].data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td className="text-center">{row.value}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center">
                      No se encontraron datos
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    <div className="wrapper-flex vh-40">
                      <span className="mb-2">Datos no encontrados</span>
                      <BarLoader color="#008a57" width={40} />
                    </div>
                  </td>
                </tr>
              )}
              {distributionData[selectedCircuit] && (
                <tr>
                  <td>Icc3f(B.T.) EN AMPERES</td>
                  <td>
                    <select
                      className="form-select"
                      value={selectedNode}
                      onChange={handleNode1Change}
                    >
                      <option value="" disabled>
                        Selecciona un nodo
                      </option>
                      {getNodes().map((node) => (
                        <option key={node.node} value={node.node}>
                          {node.node}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              {distributionData[selectedCircuit] && (
                <tr>
                  <td>Icc1f(B.T.) EN AMPERES</td>
                  <td>
                    <select
                      className="form-select"
                      value={selectedNode2}
                      onChange={handleNode2Change}
                    >
                      <option value="" disabled>
                        Selecciona un nodo
                      </option>
                      {getNodes().map((node) => (
                        <option key={node.node} value={node.node}>
                          {node.node}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-6">
        <Map coordinates={coordinates} />
      </div>
    </>
  );
};
