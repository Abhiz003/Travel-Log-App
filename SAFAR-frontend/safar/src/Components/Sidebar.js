import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  aria-expanded="false" aria-controls="collapseThree">
                  Contribute
                </button>
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  My Journey
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <Link to="/" ><li>Edit</li></Link>
                    <Link to="/"><li>View</li></Link>
                    <Link to="/"><li>Delete</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Get Suggestions
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <Link to="/" ><li>Edit</li></Link>
                    <Link to="/"><li>View</li></Link>
                    <Link to="/"><li>Delete</li></Link>
                  </ul>
                </div>
              </div>
            </div>





            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Converters
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <Link to="/" ><li>Language</li></Link>
                    <Link to="/"><li>Unit</li></Link>
                    <Link to="/"><li>Video to Audio</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFive">
                Maps
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <Link to="/" ><li>Current Location</li></Link>
                    <Link to="/"><li>Another Locations</li></Link>
                    <Link to="/"><li>Amenities</li></Link>
                    {/* hotels, tourist spots, restraunts, bustop, rickshaw stop, tollgates */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Sidebar