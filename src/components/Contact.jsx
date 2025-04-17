import React from 'react';

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="container d-flex flex-column align-items-center justify-content-center"
      >
        <h1 className="display-5 fw-bold lh-1 m-5 text-center">Contact</h1>
        <form className="w-50">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: '100px' }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
