import React from "react";

function Project() {
  return (
    <div className="container d-flex align-items-center flex-column">
      <h3 className="text-center text-decoration-underline b-10">Projects</h3>
      <div className="row">
        <div className="col">
          <div class="card" style={{ width: "18rem", height: "400px" }}>
            <img
              src="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top"
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem", height: "400px" }}>
            <img
              src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img-top"
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" style={{ width: "18rem", height: "400px" }}>
            <img
              src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img-top"
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
