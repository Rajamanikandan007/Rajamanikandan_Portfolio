import React from "react";
import cit from "../assets/certificates/cit.webp";
import codesoft from "../assets/certificates/codesoft.webp";
import collegeCer from "../assets/certificates/college cer.webp";
import data from "../assets/certificates/data.webp";
import edureka from "../assets/certificates/edureka.webp";
import knime from "../assets/certificates/knime.webp";
import mobileApp from "../assets/certificates/mobile app.webp";
import nm4G5G from "../assets/certificates/NM_Certificate_4G5G Communication Networks.webp";
import quantumComputing from "../assets/certificates/NM_Certificate_Quantum Computing with Black Opal.webp";
import q from "../assets/certificates/q.webp";
import saveetha from "../assets/certificates/saveetha.webp";
import sit from "../assets/certificates/sit.webp";

const Certificate = () => {
  return (
    <>
      <div className="container-fluid px-3" id="Certification">
        <div>
          <h1 className="display-5 fw-bold lh-1 m-5 text-center">
            Certifications
          </h1>
          <div className="text-center py-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center g-4">
                  <a
                    href="javascript:void(0)"
                    className="card col-md-3 p-0 mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#certificationmodal"
                  >
                    <img
                      data-bs-target="#lightboxExampleCarousel"
                      data-bs-slide-to="0"
                      src={nm4G5G}
                      className="shadow rounded img-fluid"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="card col-md-3 p-0 mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#certificationmodal"
                  >
                    <img
                      data-bs-target="#lightboxExampleCarousel"
                      data-bs-slide-to="1"
                      src={q}
                      className="shadow bg-body-tertiary rounded img-fluid"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </a>
                  <a
                    href="#"
                    className="card col-md-3 p-0 mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#certificationmodal"
                  >
                    <img
                      data-bs-target="#lightboxExampleCarousel"
                      data-bs-slide-to="2"
                      src={sit}
                      className="shadow bg-body-tertiary rounded img-fluid"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="container"/>
        </div>
        
      </div>

      {/** certification modal */}

      <div
        id="certificationmodal"
        tabIndex="-1"
        className="modal fade"
        aria-labelledby="exampleLightboxLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleLightboxLabel">
                Certificates
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="lightboxExampleCarousel" className="carousel slide">
                <div className="carousel-inner bg-transparent">
                  <div className="carousel-item text-center active">
                    <img
                      src={nm4G5G}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={quantumComputing}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center justify-content-center">
                    <img
                      src={q}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={sit}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>

                  <div className="carousel-item text-center">
                    <img
                      src={cit}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={collegeCer}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={edureka}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={data}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={codesoft}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={saveetha}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={mobileApp}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                  <div className="carousel-item text-center">
                    <img
                      src={knime}
                      className="img-fluid mh-100"
                      style={{ margin: "0 auto", width: "100%", maxWidth: "100%" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#lightboxExampleCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#lightboxExampleCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
