import React from 'react';
import RepoListService from '../services/RepoListService';

const Paginator = React.createClass({
	getInitialState:function(){
		return{
			nextPage: null,
			lastPage: null,
			active: ""
		};
	},
    /* Will update Item */
	componentWillReceiveProps: function(props) {
		if(props.last != null || props.last != null){
			this.setState({active: "active"})
		}
	},
  	render: function() {
  		return (
  			<div className="paginator">
  				<button onClick={this.props.clickLoadmore} className="bt bt-circle {this.state.active} -bg-blue-default -font-light" title="Ver mais">Ver mais</button>
  			</div>
		)
	}
});

export default Paginator;