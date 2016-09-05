import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
    render: function() {
        return (
        	<div>
	        	<header className="-font-dark clearfix">
	            	<div className="float-left">Desafio Front-End.</div>
	            	<div className="-font-sm float-right"><a href="https://br.linkedin.com/in/paula-junqueira-bastos-82b89118" target="_blank" className="-font-blue-dark">Meu linkedin</a></div>
	           	</header>          	
	        </div>
        );
    }
});
export default Home