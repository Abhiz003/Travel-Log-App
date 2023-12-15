import React from 'react'

const TripLog = () => {
    var name = ["Log1", "Log2","Log3", "Log4", "Log5", "Log6", "Log7", "Log8", "Log9"]
	const handleTimeLine = () => {
		const timelineItems = [];

		
		let year1 = 2020, year2 = 21;
		for (let i = 0; i < 10; i++) {
			const side = i % 2 === 0 ? "left" : "right"; // Set side dynamically
			timelineItems.push(
			  <div key={i} className={`container1 ${side}-container`}>
				<i className="fa-solid fa-gear"></i>
				<div className="text-box">
				  <img className="d-block w-100" src={`Images/${side === 'left' ? 'Antman' : 'Ironman'}.jpg`} alt={side} />
				  <h2>{`${name[i]}`}</h2>
				  <small>{`${year1++} - ${year2++}`}</small>
				  <p>
					#Activity - {i}
				  </p>
				  <span className={`${side}-container-arrow`}></span>
				  <button className="btn btn-primary">View more</button>
				</div>
			  </div>
			);
		  }
		

		return timelineItems;
	};

	return (
		<>
			<div className="timeline">

				{handleTimeLine()}
				
				<i className="fa-solid fa-caret-down text-light"></i>
			</div>

		</>
	)
}

export default TripLog