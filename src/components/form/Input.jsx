import React from "react";
import "./form.css";
function Input({ label, type, placeholder }) {
  return (
    <div>
      <p className="label">{label}</p>
      <input type={type} className="input" placeholder={placeholder} />
    </div>
  );
}

export default Input;
