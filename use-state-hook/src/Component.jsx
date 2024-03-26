import React, { useState } from 'react';

function Component() {
	const [name, setName] = useState("Guest");
	const [age, setAge] = useState(0);
	const [isEmployed, setIsEmployed] = useState(false);

	const updateName = () => {
		setName("Vaeep");
	}

	const incrementAge = () => {
		setAge(age + 1);
	}

	const toggleEmployedStatus = () => {
		setIsEmployed(!isEmployed);
	}

	return (<div>
		<p>Name: {name}</p>
		<button onClick={updateName}>Set Name</button>

		<p>Age: {age}</p>
		<button onClick={incrementAge}>Increment age</button>

		<p>Is employed: {isEmployed ? "Yes" : "No"}</p>
		<button onClick={toggleEmployedStatus}>Toggle Status</button>
	</div>);
}

export default Component