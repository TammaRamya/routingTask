import React from "react";
import Tip from "./images/Tipcalculator.png";
export default function TipCalculator() {
    return (
		<div className="mt-5">
			<h4>TipCalculator</h4>
			<br/>
			<p>Description of App:By using this app,we are calculating totaltip and TotalbillperPerson 
			</p>
			<a href="https://friendly-colden-328c94.netlify.app/"> demoLink</a><br/>
			<img src={Tip}  alt = '' height={300} width={400} /><br/>
			
		</div>
	);


}