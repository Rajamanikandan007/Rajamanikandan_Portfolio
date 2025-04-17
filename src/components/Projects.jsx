import React from "react";
import Fire from "../assets/projects/fire main.jpeg";
import imageProcessing from "../assets/projects/Image Processing Based Fire Detection block.png";
import iotIrrigation from "../assets/projects/iot irrigation.png";
import iotIrrigationMain from "../assets/projects/iot irrigation.jpg";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div id="projects">
          <h1 className="display-5 fw-bold lh-1 m-5 text-center">
            Projects
          </h1>

          {/* Project Section */}
          <div className="container py-5">
            <div className="row gy-4">
              {/* Project 1 */}
              <div className="col-md-6 d-flex justify-content-center">
                <div
                  className="card shadow  rounded mb-4"
                  style={{ width: "25rem" }}
                >
                  <img src={Fire} alt="loading" />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <b>
                        Smart Fire Detector and Alert System Using Image
                        Processing and IoT
                      </b>
                    </h5>
                    <p className="card-text">
                      It uses image processing and IoT for instant fire
                      detection and real-time alerts, enabling swift response
                      with live monitoring and automated alarms. 🔥🚀
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#projectModal-1"
                    >
                      Explore..
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="col-md-6 d-flex justify-content-center">
                <div
                  className="card shadow  mb-4"
                  style={{ width: "25rem" }}
                >
                  <img
                    src={iotIrrigationMain}
                    alt="loading"
                    
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <b>IoT-Based Smart Irrigation System</b>
                    </h5>
                    <p className="card-text">
                      This system uses sensors and automation to monitor soil
                      and manage water smartly. With cloud integration, it
                      reduces wastage and boosts crop health. 🌱💧
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#projectModal-2"
                    >
                      Explore..
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/**project Modal- 1*/}
      <div
        className="modal fade"
        id="projectModal-1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable  modal-xl">
          {" "}
          {/** Added modal-lg for better visibility */}
          <div className="modal-content shadow">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center w-100"
                id="exampleModalLabel"
              >
                <b>
                  Smart Fire Detector and Alert System Using Image Processing
                  and IoT
                </b>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/** Project Overview */}
              <h5 className="fw-bold">Project Overview:</h5>
              <p>
                The <b>Smart Fire Detector and Alert System</b> integrates{" "}
                <b>image processing and IoT</b> to detect fire hazards in real
                time. Unlike traditional smoke detectors, it leverages{" "}
                <b>computer vision</b> for rapid fire detection and alerts.
              </p>

              {/** Block Diagram */}
              <h5 className="fw-bold">Block Diagram:</h5>
              <img
                src={imageProcessing}
                alt="Block Diagram"
                className="img-fluid"
              />

              {/** Key Functionalities */}
              <h5 className="fw-bold mt-3">Key Functionalities</h5>
              <ul>
                <li>
                  <b>AI-Powered Fire Detection</b> – Uses image processing to
                  detect fire patterns.
                </li>
                <li>
                  <b>IoT-Based Alert System</b> – Sends real-time SMS alerts.
                </li>
                <li>
                  <b>Live Camera Monitoring</b> – Remote surveillance via a
                  Wi-Fi camera.
                </li>
                <li>
                  <b>Real-Time Alarm System</b> – Triggers buzzer & LED alerts.
                </li>
                <li>
                  <b>LCD Display with I2C Module</b> – Displays live system
                  status.
                </li>
              </ul>

              {/** Hardware Components */}
              <h5 className="fw-bold mt-3">Hardware Components</h5>
              <ul>
                <li>
                  <b>Arduino Uno</b> – Microcontroller for processing and
                  alerts.
                </li>
                <li>
                  <b>Wi-Fi Camera</b> – Captures real-time images.
                </li>
                <li>
                  <b>LCD Display with I2C Module</b> – Shows system status.
                </li>
                <li>
                  <b>Buzzer & LED</b> – Provides local alerts.
                </li>
                <li>
                  <b>IoT Module (ESP8266/GSM)</b> – Sends emergency alerts.
                </li>
              </ul>

              {/** How It Works */}
              <h5 className="fw-bold mt-3">How It Works</h5>
              <ol>
                <li>The camera captures frames from the environment.</li>
                <li>
                  Image processing algorithms analyze frames to detect fire.
                </li>
                <li>If fire is detected, the Arduino Uno triggers an alarm.</li>
                <li>The IoT module sends real-time alerts via SMS.</li>
                <li>Users can view the live camera feed remotely.</li>
              </ol>

              {/** Potential Enhancements */}
              <h5 className="fw-bold mt-3">Potential Enhancements</h5>
              <ul>
                <li>
                  <b>AI-Based Fire Classification</b> – Enhanced accuracy with
                  deep learning.
                </li>
                <li>
                  <b>Smart Fire Suppression</b> – Automatic sprinkler
                  activation.
                </li>
                <li>
                  <b>Mobile App Integration</b> – Real-time monitoring via an
                  app.
                </li>
                <li>
                  <b>Cloud Dashboard</b> – Stores and analyzes fire incidents.
                </li>
              </ul>

              {/** Technology Used */}
              <h5 className="fw-bold mt-3">Technology Used</h5>
              <ul>
                <li>
                  <b>Python (OpenCV, NumPy)</b> – Fire detection via image
                  processing.
                </li>
                <li>
                  <b>Arduino IDE & C++</b> – Microcontroller programming.
                </li>
                <li>
                  <b>IoT Modules (ESP8266 / GSM)</b> – Real-time alerts.
                </li>
                <li>
                  <b>Flask / Web Dashboard (Optional)</b> – Live camera feed
                  access.
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** project modal-2 */}
      <div
        className="modal fade"
        id="projectModal-2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                <b>IoT-Based Smart Irrigation System</b>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/** Project Overview */}
              <h5 className="fw-bold">Project Overview:</h5>
              <p>
                The <b>IoT-Based Smart Irrigation System</b> optimizes water
                usage in agriculture using <b>real-time sensor data</b> and
                automation. It employs{" "}
                <b>Arduino, IoT modules, and multiple sensors</b> to monitor
                soil conditions and automate irrigation, reducing water wastage
                and improving crop health.
              </p>

              {/** Block Diagram */}
              <h5 className="fw-bold">Block Diagram:</h5>
              <img src={iotIrrigation} alt="loading" className="img-fluid" />

              {/** Key Functionalities */}
              <h5 className="fw-bold">Key Functionalities</h5>
              <ul>
                <li>
                  <b>Real-Time Soil Monitoring</b> – Measures moisture,
                  temperature, humidity, and pH levels.
                </li>
                <li>
                  <b>Automated Irrigation</b> – Controls water pumps based on
                  soil conditions.
                </li>
                <li>
                  <b>Cloud Integration</b> – Enables remote monitoring and data
                  storage.
                </li>
                <li>
                  <b>Energy Efficient</b> – Reduces power consumption by
                  optimizing irrigation cycles.
                </li>
                <li>
                  <b>Manual & Automatic Control</b> – Farmers can adjust
                  irrigation settings remotely.
                </li>
              </ul>

              {/** Hardware Components */}
              <h5 className="fw-bold">Hardware Components</h5>
              <ul>
                <li>
                  <b>Arduino Microcontroller</b> – Processes sensor data and
                  automation.
                </li>
                <li>
                  <b>Soil Moisture Sensor</b> – Detects soil water levels.
                </li>
                <li>
                  <b>Temperature & Humidity Sensors</b> – Analyzes weather
                  conditions.
                </li>
                <li>
                  <b>pH Sensor</b> – Measures soil acidity for crop health.
                </li>
                <li>
                  <b>Water Pump & Relay Module</b> – Controls irrigation
                  process.
                </li>
                <li>
                  <b>Wi-Fi/LoRa Module</b> – Enables IoT connectivity for remote
                  access.
                </li>
              </ul>

              {/** How It Works */}
              <h5 className="fw-bold">How It Works</h5>
              <ol>
                <li>Sensors monitor soil conditions continuously.</li>
                <li>
                  Arduino processes data and determines if irrigation is needed.
                </li>
                <li>
                  If moisture is low, the system activates the water pump.
                </li>
                <li>Data is sent to the cloud for remote access.</li>
                <li>
                  Farmers can monitor and control irrigation via a mobile app.
                </li>
              </ol>

              {/** Potential Enhancements */}
              <h5 className="fw-bold">Potential Enhancements</h5>
              <ul>
                <li>
                  <b>AI-Based Water Optimization</b> – Uses machine learning for
                  better scheduling.
                </li>
                <li>
                  <b>Smart Weather Prediction</b> – Adjusts irrigation based on
                  forecasts.
                </li>
                <li>
                  <b>Solar Power Integration</b> – Reduces energy consumption.
                </li>
                <li>
                  <b>Mobile App Notifications</b> – Sends real-time alerts and
                  reports.
                </li>
              </ul>

              {/** Technology Used */}
              <h5 className="fw-bold">Technology Used</h5>
              <ul>
                <li>
                  <b>Arduino IDE & C++</b> – Microcontroller programming.
                </li>
                <li>
                  <b>IoT Cloud Platforms</b> – ThingSpeak, Blynk, or Firebase
                  for data storage.
                </li>
                <li>
                  <b>Wi-Fi/LoRa Modules</b> – Enables remote monitoring.
                </li>
                <li>
                  <b>Mobile App (Optional)</b> – Provides real-time insights and
                  controls.
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
