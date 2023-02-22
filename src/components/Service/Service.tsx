import "./Service.css";
import frontendImg from "../../assets/frontend.svg";
import backendImg from "../../assets/backend.svg";
import cloudComputingImg from "../../assets/cloud-computing.svg";
import databaseImg from "../../assets/database.svg";
import mobileImg from "../../assets/mobile-dev.svg";
import softwareImg from "../../assets/software-dev.svg";

const Service = () => {
  return (
    <section>
      <div className="md:container md:mx-auto p-4">
        <h1>My Services</h1>
        <div className="grid md:gap-6 gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 cards">
          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={frontendImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">Frontend Development</h5>
                <p className="card-text">
                  A front-end developer builds the front-end portion of websites
                  and web applications—the part users see and interact with. A
                  front-end developer creates websites and applications using
                  web languages such as HTML, CSS, and JavaScript that allow
                  users to access and interact with the site or app..
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={backendImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">Backend Development</h5>
                <p className="card-text">
                  Back-end development means working on server-side software,
                  which focuses on everything you can't see on a website.
                  Back-end developers ensure the website performs correctly,
                  focusing on databases, back-end logic, application programming
                  interface (APIs), architecture, and servers.
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={softwareImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">
                  Database Design & Development
                </h5>
                <p className="card-text">
                  Database Design is a collection of processes that facilitate
                  the designing, development, implementation and maintenance of
                  enterprise data management systems.
                </p>
              </div>
            </div>
          </div>
          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={cloudComputingImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">
                  Cloud Architecture & Solution
                </h5>
                <p className="card-text">
                  Image result for Cloud Architecture & Solution Cloud
                  architecture is the way technology components combine to build
                  a cloud, in which resources are pooled through virtualization
                  technology and shared across a network.
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={mobileImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">
                  Mobile Application Development
                </h5>
                <p className="card-text">
                  Mobile application development is the process of creating
                  software applications that run on a mobile device, and a
                  typical mobile application utilizes a network connection to
                  work with remote computing resources.
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 p-4 flex justify-center">
            <div className="card">
              <div className="items-center justify-center flex flex-col">
                <img
                  src={softwareImg}
                  height="50px"
                  width="50px"
                  className="icon"
                  alt="Service One"
                />
                <h5 className="card-title my-3">Software Development</h5>
                <p className="card-text">
                  Software development refers to a set of computer science
                  activities dedicated to the process of creating, designing,
                  deploying and supporting software. Software itself is the set
                  of instructions or programs that tell a computer what to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
