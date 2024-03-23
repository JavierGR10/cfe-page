import React, { useEffect, useState } from "react";
import distributionData from "../../assets/js/data";
import selectData from "../../assets/js/selectData";
import { Map } from "../Map/Map";

export const CircuitTable = () => {
  const [selectedZone, setSelectedZone] = useState("ZONA CHAPALA");
  const [selectedCircuit, setSelectedCircuit] = useState("");
  const [selectedNode, setSelectedNode] = useState("");
  const [coordinates, setCoordinates] = useState({}); // Estado para almacenar las coordenadas

  const getCoordinatesForNode = () => {
    const circuitData = distributionData[selectedCircuit];
    if (circuitData) {
      const nodeData = circuitData.coordinates.find(
        (node) => node.node === selectedNode
      );
      console.log(selectedNode);
      console.log(nodeData);
      if (nodeData) {
        return nodeData;
      }
    }
    return null;
  };

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };
  const handleCircuitChange = (event) => {
    setSelectedCircuit(event.target.value);
    setCoordinates(null);
  };
  const handleNodeChange = (event) => {
    setSelectedNode(event.target.value);
    const nodeCoordinates = getCoordinatesForNode();
    setCoordinates(nodeCoordinates);
  };

  // Función para obtener los circuitos de la zona seleccionada
  const getCircuits = () => {
    const selectedZoneData = selectData.zones.find(
      (zone) => zone.value === selectedZone
    );
    return selectedZoneData ? selectedZoneData.circuitName : [];
  };

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
      
        <div>
          <h2>Selecciona una zona:</h2>

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

          {selectedZone && (
            <>
              <h2>Selecciona un circuito:</h2>
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
            </>
          )}
          {selectedCircuit && (
            <div>
              <h1>Selecciona un nodo:</h1>
              <select
                className="form-select"
                value={selectedNode}
                onChange={handleNodeChange}
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
            </div>
          )}

          {coordinates && (
            <div>
              <h3>Coordenadas seleccionadas:</h3>
              <p>Latitud: {coordinates.lat}</p>
              <p>Longitud: {coordinates.lng}</p>
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-6">
          <Map coordinates={coordinates} />
      </div>
    </>
  );
};
