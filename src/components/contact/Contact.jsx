import React from "react";

function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-50 m-5 p-5 border rounded bg-light shadow">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Full Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your full name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter your email address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter Message Here
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
