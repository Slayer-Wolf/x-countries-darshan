import React from "react";
import "./Card.css";
const Card = (flagData) => {
	console.log(flagData, "in cards");
	return (
		<>
			<div className="box">
				<img
					className="image"
					src={flagData?.flag?.flags?.png}
					alt={flagData?.flag?.name?.common}
				/>
				<h3>{flagData?.flag?.name?.common}</h3>
			</div>
		</>
	);
};

export default Card;
