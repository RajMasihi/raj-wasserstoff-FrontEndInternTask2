import React from "react";
import "./form.css";
import Input from "./Input";

function Form() {
  return (
    <div className="form_div">
      <h1 className="color">
        Your Journey to Coding Conf <br />
        2025 Start Here
      </h1>
      <p className="color">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form>
        <p className="label">Upload Avatar</p>

        <label for="images" className="drop-container" id="dropcontainer">
          <span className="drop-title">Drag and drop or click to upload</span>
          <input
            type="file"
            className="file_input"
            id="images"
            accept="image/*"
            required
          />
        </label>
        <br />

        <Input label="Full Name" type="text" placeholder="enter name" />
        <br />

        <Input label="Email Address" type="email" placeholder="Enter email" />
        <br />
        <Input
          label="Github Username"
          type="text"
          placeholder="enter github username"
        />
        <br />
        <button className="form-control btn btn-danger">
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default Form;
