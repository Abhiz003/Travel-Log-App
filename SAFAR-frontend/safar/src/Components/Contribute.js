import React from 'react'

const Contribute = () => {
  return (
    <>
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
    </>
  )
}

export default Contribute