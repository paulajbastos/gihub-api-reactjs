import React from 'react';
import { Link } from 'react-router';
import RepoListService from '../services/RepoListService';
import RepoList from './repo-list';
import RepoItem from './repo-item';
import Loading from './loading';

const MainLayout = React.createClass({

	getInitialState:function(){
		return{
			repos:null,
			classLoaded: ""
		};
	},
	componentDidMount:function() {
		this.serverRequest = RepoListService.getList().then(function (response) {
	    	this.setState({
	        	repos: response.data,
	        	classLoaded: "-hidden"
	      	});
	    }.bind(this));
    },
  	render: function() {

	    /*
	    Page Loader
	    -----------------
	    <div className={this.state.classLoaded}>
			<Loading classBgColor={`-bg-blue-loader -fixed`}/>
			
		</div>*/
	    return (
	    	<div>
	    		
				<div className="content">
					<div className="row wrapper table clearfix">
						<div className="col-table col-3 table-cell -left -text-right">
							<aside>
								<h1 className={`-text-center -font-light`}>Repositórios:</h1>
								<div className={this.state.classLoaded}>
									<div className="loader clearfix">
										<Loading classRefs={`-white`}/>
									</div>
								</div>
								<div>
									<RepoList repos={this.state.repos}/>
								</div>
			        		</aside>
						</div>
						<div className="col-table col-9 table-cell -right">
							<div>{this.props.children}</div>
						</div>
					</div>
				</div>
			</div>
	    );
  	}
});
export default MainLayout;