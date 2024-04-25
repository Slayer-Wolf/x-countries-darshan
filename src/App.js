import Card from "./Card.js";
import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
	const [Countries, setCountries] = useState([]);

	// const fetchFlag = async () => {
	// 	try {
	// 		const response = await fetch("https://restcountries.com/v3.1/all");
	// 		if (!response.ok) {
	// 			throw new Error("Failed to fetch data");
	// 		}
	// 		const data = await response.json();
	// 		return data;
	// 	} catch (error) {
	// 		console.error("Error fetching data:", error);
	// 	}
	// };

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data))
			.catch((err) => console.error("Error fetching data", err));
	}, []);

	return (
		<>
			<div className="gridBox">
				{Countries?.map((flagData, index) => (
					<Card key={index} flag={flagData} />
				))}
			</div>
		</>
	);
}
