import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ViewBlog.css'
import Contribute from './Contribute'

const ViewBlogs = () => {
  return (
    <>
      <div className='d-flex'>

        <aside className='sidebar'>
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
          </div>
        </aside>

        <main className='container mt-4 bg-warning'>
          <Contribute/>
        </main>
      </div>
    </>
  )
}

export default ViewBlogs