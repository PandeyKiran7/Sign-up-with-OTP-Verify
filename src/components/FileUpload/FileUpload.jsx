import React from "react";
import "./FileUpload.css";
import UploadIcon from "../../assets/UploadIcon.png";

const FileUpload = () => {
  return (
    <>
      <div className="upload-container">
        <div className="upload-field">
          <label htmlFor="certification-upload">
            Certification of Incorporation <span>*</span>
          </label>
          <div className="file-upload-box">
            <p>Upload Certification of Incorporation</p>
            <label htmlFor="file-input" className="file-upload-label">
              <img src={UploadIcon} alt="Upload Icon" className="upload-icon" />
              <span className="upload-text" style={{ color: "black" }}>
                Click to Upload
              </span>
              <span style={{ color: "grey" }}>or drag and drop</span>
            </label>
            <input
              type="file"
              id="file-input"
              className="file-input"
              accept="application/pdf, image/*"
              required
            />
            <p
              className="file-size"
              style={{ fontSize: "13px", marginBottom: "30px" }}
            >
              {" "}
              Maximum file size 50 MB
            </p>
          </div>
        </div>

        <div className="upload-field">
          <label htmlFor="certification-upload">
            Company Logo <span>*</span>
          </label>
          <div className="file-upload-box">
            <p>Upload the company logo</p>
            <label htmlFor="file-input" className="file-upload-label">
              <img src={UploadIcon} alt="Upload Icon" className="upload-icon" />
              <span className="upload-text" style={{ color: "black" }}>
                Click to Upload
              </span>
              <span style={{ color: "grey" }}>or drag and drop</span>
            </label>
            <input
              type="file"
              id="file-input"
              className="file-input"
              accept="application/pdf, image/*"
              required
            />
            <p
              className="file-size"
              style={{ fontSize: "13px", marginBottom: "30px" }}
            >
              {" "}
              Maximum file size 50 MB
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="prev-btn">Previous</button>
          <button className="next-btn">Next</button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
