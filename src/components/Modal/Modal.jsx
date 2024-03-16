import React from "react";
import { TiWarning } from "react-icons/ti";
import { RiProhibitedLine } from "react-icons/ri";

export const Modal = ({ title, name, show, handleClose }) => {
  const active = "modal d-block animate__animated animate__fadeInDown";
  const inactive = "modal d-block animate__animated  animate__fadeOutUp";

  let showHideClassName = show ? active : inactive;
  return (
    <div className={showHideClassName}>
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <span className="me-2">{title}</span>
              <TiWarning color="#f7b034" size={"2rem"} />
            </h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body text-center">
            <span className="text-danger fw-bold">{name} </span>
            fue localizado en la base de datos de personas con orden de
            detención.
            <div className="text-center">
              {/* <img
                src="src/assets/images/police.svg"
                style={{ height: "100px" }}
                alt=""
              /> */}
              <RiProhibitedLine color="#d90429" size={'4rem'} />
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center justify-content-center">
            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={handleClose}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
