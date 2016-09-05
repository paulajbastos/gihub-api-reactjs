import React from 'react';
import { Link } from 'react-router';
import RepoListService from '../services/RepoListService';

const RepoList = React.createClass({

	getInitialState: function() {
	    return {
	      null
	    }
	},
	render: function(){
		if(this.props.repos){
			var repos = this.props.repos.map(function(repo, key) {
				return (
				    <div key={key} className="item"><Link to={`/gihub-api-reactjs/${repo.name}`} className="-font-light" title={repo.name}>{repo.name}</Link></div>
				);
			});
			return (<nav className="navigation">{repos}</nav>);
		}else{
			return null;
		}
	}

});

RepoList.propTypes = {
	repos: React.PropTypes.array
}

export default RepoList;

/*
DEV
<div key={key} className="item"><Link to={`/${repo.name}`} className="-font-light" title={repo.name}>{repo.name}</Link></div>

AR
<div key={key} className="item"><Link to={`/gihub-api-reactjs/${repo.name}`} className="-font-light" title={repo.name}>{repo.name}</Link></div>
*/