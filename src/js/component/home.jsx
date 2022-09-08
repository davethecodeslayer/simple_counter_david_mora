import React from "react";
import {Counter} from "./Counter.jsx"
import PropTypes from "prop-types"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="row position-absolute top-50 start-50 translate-middle">

			<div className="col-2 slot" >
			<img src="https://static.vecteezy.com/system/resources/previews/005/298/726/non_2x/clock-it-is-white-icon-vector.jpg" height="40px"></img>
			</div>

			<div className="col-2 slot" >
				<Counter unidad={Math.floor((props.seconds/10000)%10)}/>
			</div>

			<div className="col-2 slot" >
				<Counter unidad={Math.floor((props.seconds/1000)%10)}/>
			</div>

			<div className="col-2 slot" >
				<Counter unidad={Math.floor((props.seconds/100)%10)}/>
			</div>

			<div className="col-2 slot" >
				<Counter unidad={Math.floor((props.seconds/10)%10)}/>
			</div>

			<div className="col-2 slot" >
				<Counter unidad={Math.floor((props.seconds/1)%10)}/>
			</div>
		</div>
	);
};
Home.propTypes = {
seconds: PropTypes.number, 
}

export default Home;
