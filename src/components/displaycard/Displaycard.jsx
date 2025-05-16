import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Displaycard.css";

function Displaycard() {
  return (
    <div>
      <h1 className="heading text_color">
        Congrats, <span className="span_heading">Raj Masihi !</span>
        <br />
        Your Ticket is ready.
      </h1>
      <div className="msg_div">
        <p className="msg text_color">
          We've dtoiled your Ticket to <br />
          <span className="email_span"> rajmasihi@gmail.com </span> and will
          send update in <br />
          the run up to the event.
        </p>
      </div>
      <div className="full_card">
        <div className="half_left_card">
          <div className="coding_conf">
            <img className="img" />
            <h1 className="text_color">
              Coding Conf
              <br />
              <span className="date text_color">Jan 31, 2025 / Austin, TK</span>
            </h1>
          </div>

          <br />
          <br />

          <div className="user_profile">
            <div>
              <img className="img" />
            </div>
            <h5 className="text_color">
              Raj Masihi
              <br />
              <span className="social_id text_color">@ rajmasihi</span>
            </h5>
          </div>
        </div>
        <div className="half_right_card">
          <p className="hash_number text_color">#01609</p>
        </div>
      </div>
    </div>
  );
}

export default Displaycard;
