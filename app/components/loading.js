import React from 'react';

const Loading = React.createClass({

	getInitialState:function(){
		return{
			classRefs: this.props.classRefs
		};
	},
	componentDidMount:function() {
		
    },
    classNameSet:function(){

    },
  	render: function() {
  		var classRefs = "loading "+ this.state.classRefs;
	    return (
	    	<div className={classRefs}>
		        <div className="wrap-loader">
		            <div className="sk-fading-circle">
		                <div className="sk-circle1 sk-circle"></div>
		                <div className="sk-circle2 sk-circle"></div>
		                <div className="sk-circle3 sk-circle"></div>
		                <div className="sk-circle4 sk-circle"></div>
		                <div className="sk-circle5 sk-circle"></div>
		                <div className="sk-circle6 sk-circle"></div>
		                <div className="sk-circle7 sk-circle"></div>
		                <div className="sk-circle8 sk-circle"></div>
		                <div className="sk-circle9 sk-circle"></div>
		                <div className="sk-circle10 sk-circle"></div>
		                <div className="sk-circle11 sk-circle"></div>
		                <div className="sk-circle12 sk-circle"></div>
		            </div>
		        </div>
		    </div>
	    );
  	}
});
export default Loading;