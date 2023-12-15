import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ViewBlog.css'

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
          <form>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                select a type
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Trekking</li>
                <li className="dropdown-item">Educational</li>
                <li className="dropdown-item">Bussiness</li>
                <li className="dropdown-item">Pilgrimage</li>
                <li className="dropdown-item"><input type="text" placeholder='Other'/></li>
              </ul>
            </div>
            <div>
              <label htmlFor="">Trip Spots: </label> <br/>
              <input type="number" placeholder="Input no. of spots explored"/>
            </div>
            <div>
              <label htmlFor="">Spot Name: </label> <br/>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="">Total Cost</label> <br/>
              <input type="number" placeholder="Input no. of spots explored"/>
            </div>
            <div>
              <label htmlFor="">Date: </label> <br/>
              From : <input type="date" /> &nbsp;&nbsp;
              To: <input type="date"/>
            </div>
            <div>
              <label htmlFor="">Trip Spots: </label> <br/>
              <input type="number" placeholder="Input no. of spots explored"/>
            </div>
            <div>
              <label htmlFor="">Trip Spots: </label> <br/>
              <input type="number" placeholder="Input no. of spots explored"/>
            </div>


          </form>
        </main>
      </div>
    </>
  )
}

export default ViewBlogs