import React, { useState } from 'react'

const AddATale = () => {
  const [formFields, setFormFields] = useState([
    { placeName: '', placeImage: '', transport: '' }
  ])

  const addFields = () => {
    let object = {
      placeName: '', 
      placeImage: '', 
      transport: ''
    }
  }


  return (
    <>
      <div className="container p-4">
        <form>
          <div className="form-group">
            <label htmlFor="blog-title">Title:</label>
            <input type="text" className="form-control" id="blog-title" placeholder="Enter Title of the Blog" />
          </div>
          <div className="form-group col-2">
            <label htmlFor="">Date: </label> <br />
            From : <input type="date" className="form-control" /> &nbsp;&nbsp;
            To: <input type="date" className="form-control" />
          </div>


          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Destinations:</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Members:</label>
            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Total cost:</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          {/* -----------LOG1----------------- */}




          <div className="form-group">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                select a type
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Trekking</li>
                <li className="dropdown-item">Educational</li>
                <li className="dropdown-item">Bussiness</li>
                <li className="dropdown-item">Pilgrimage</li>
                <li className="dropdown-item"><input type="text" placeholder='Other' /></li>
              </ul>
            </div>
          </div>
        <hr/>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Place Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name="placeName" placeholder="Password" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input type="file" class="form-control-file" name="placeImage" id="exampleFormControlFile1" />
          </div>
          <div className="form-group col-2">
            <label htmlFor="">Date: </label> <br />
            From : <input type="date" className="form-control" name="startDate"/> &nbsp;&nbsp;
            To: <input type="date" className="form-control" name="endDate"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Transport:</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name="transport" placeholder="Password" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description: </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
      <hr/> <br></br>
          <button className="btn btn-outline-success m-2">Add Log</button>

          {/* ----------miniLogs---------- */}
          {/* <div className="form-group">
            <label htmlFor="exampleInputPassword1">Place Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div> */}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>







      </div>
    </>
  )
}

export default AddATale