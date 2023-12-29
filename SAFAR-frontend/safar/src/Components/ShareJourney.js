import React, { useState } from 'react'

const ShareJourney = () => {
	const [formFields, setFormFields] = useState([
		{ placeName: '', age: '', placeImage: '', transport: '', desciption: '' }
	])

	const handleFormChanges = (event, index) => {
		let data = [...formFields];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	}

	const submit = (e) => {
		e.preventDefault();
		console.log(formFields);
	}

	const addFields = () => {
		let object = {
			placeName: '',
			age: '',
			placeImage: '',
			transport: '',
			desciption: ''
		}
		setFormFields([...formFields, object])
	}


	return (
		<>
			<div className="container">
				<form onSubmit={submit}>
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
						<label htmlFor="destination">Destinations:</label>
						<input type="text" className="form-control" id="destination" placeholder="Enter Destinations" />
					</div>
					<div className="form-group">
						<label htmlFor="members">Members:</label>
						<input type="number" className="form-control" id="members" placeholder="How many members?" />
					</div>
					<div className="form-group">
						<label htmlFor="totalCost">Total cost:</label>
						<input type="number" className="form-control" id="totalCost" placeholder="Total cost?" />
					</div>
					<br />


					{/* -----------------Dynamic miniForm-------------- */}
					{formFields.map((form, index) => {
						return (
							<div key="index" className='mb-4'>
								<hr />
								<b>Log {index + 1}</b>
								<div className="form-group mb-2">
									<input type="text" className='form-control' name="placeName" placeholder="Enter Place Name"
										onChange={event => handleFormChanges(event, index)}
										value={formFields.name} />
								</div>
								<div className="form-group mb-2">
									<input type="text" className='form-control' name="age" placeholder="Enter Age"
										onChange={event => handleFormChanges(event, index)}
										value={formFields.age} />
								</div>

								<div class="mb-3">
									<label htmlFor="formFileMultiple" className="form-label">Add Images </label>
									<input className="form-control" type="file" name="placeImage" id="formFileMultiple" multiple 
									
									/>
								</div>


								<div className="form-group col-2 mb-2">
									<label htmlFor="">Date: </label> <br />
									From : <input type="date" className="form-control" name="startDate" /> &nbsp;&nbsp;
									To: <input type="date" className="form-control" name="endDate" />
								</div>
								<div className="form-group mb-2">
									<label htmlFor="exampleInputPassword1">Transport:</label>
									<input type="text" className="form-control" id="exampleInputPassword1" name="transport" placeholder=" Enter Transportation details" />
								</div>




								<div className="form-group mb2">
									<textarea className="form-control" name="desciption" rows="3" placeholder="Enter Description" ></textarea>
								</div>
							</div>
						)
					})}
					<button onClick={addFields} className='btn btn-primary'>AddMore</button> &nbsp;
					<button type="submit" className='btn btn-success'>submit</button>
				</form>
			</div>
		</>
	)
}

export default ShareJourney