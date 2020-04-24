import React, {Component} from "react";
import "../assets/container/council.css";

class Council extends Component {
  render() {
    return (
      <div>
        <div id="winter-2019-meetings" className="center">
          <h2>Winter 2019 Meeting Notes</h2>
          <div className="container-fluid meeting-docs">
            <div className="row">
              <div className="col-sm">
                <iframe
                  className="meeting-doc"
                  src="https://drive.google.com/file/d/1_e7VpiyhpUONBOlgQ_QT7i_wzgeBErCY/preview"
                ></iframe>
              </div>
              <div className="col-sm">
                <iframe
                  className="meeting-doc"
                  src="https://drive.google.com/file/d/1ZiJP8xOyod29P2mDsC11fAujjTunWng1/preview"
                ></iframe>
              </div>
              <div className="col-sm">
                <iframe
                  className="meeting-doc"
                  src="https://drive.google.com/file/d/1oLLUbm2XGR3n-_go00JJNI_MbnJqAPWz/preview"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Council;
