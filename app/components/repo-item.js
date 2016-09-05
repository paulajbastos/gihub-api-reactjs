import React from 'react';
import RepoListService from '../services/RepoListService';
import Paginator from './paginator';
import Loading from './loading';
import {Link} from 'react-router';

const RepoItem = React.createClass({
	getInitialState:function(){

		return{
			classRepoLoaded: "",
			classCommitLoaded: "",
			repo: null,
			commits: [],
			newCommits: [],
			nextPage: null,
			lastPage: null
		};
	},
	componentDidMount:function() {
		this.updateRepo(this.props.params.name);
    },
    /* Will update Item */
	componentWillReceiveProps: function(props) {
		this.setState({ newCommits: [] });
		this.updateRepo(props.params.name);
	},
	clickLoadmore: function (){
		if(this.state.nextPage != null){
			this.commitsLoad(this.state.nextPage, this.props.params.name)
			this.setState({ newCommits: this.state.commits.slice() });
		}
	},
	commitsLoad: function(page,repo){

		this.serverRequestCommits = RepoListService.getCommitByPage(page, repo,{
    	onSuccess: function (response) {
    		
    		if(this.state.commits != null && this.state.commits.length > 0){
    			
    			var _c = this.state.newCommits;
    			response.commits.forEach(function (item) { 
    				_c.push(item); 
    			});
				this.setState({ commits: _c });

    		}else{
    			this.setState({commits: response.commits});
    		}

        	this.setState({
        		classCommitLoaded:'-hidden',
        		nextPage: response.nextPage,
        		lastPage: response.lastPage
      		});
        }.bind(this),
        onFail: function (response) {
        	this.setState({
        		classCommitLoaded:'-hidden',
        		commits: response
      		});
        }.bind(this)});
	},
	updateRepo: function(repo){
		this.serverRequestRepo = RepoListService.getRepo(repo).then(function (response){
	    	this.setState({
	    		classRepoLoaded: "-hidden",
	        	repo: response.data
	      	});
	      	this.commitsLoad(1, this.props.params.name)
	    }.bind(this)).catch(function (error) {
		});
	},
  	render: function() {

  		if(this.state.repo){
  			var paginator = "";
  			var commits = null;
  			if(this.state.commits != null && this.state.commits.length > 0){
  				
  				commits = this.state.commits.map(function(commit, key) {
					return (
						<li key={key} className="item">
							<div className="title"></div>
							<div className="desc">
								<div className="commit-title">{key+1} - {commit.commit.message}</div>
							</div>
								
						</li>
					);
				});

  				if(this.state.lastPage != null && (this.state.lastPage != this.state.nextPage))
				{
					paginator = <Paginator clickLoadmore={this.clickLoadmore} last={this.state.lastPage} next={this.state.nextPage} />
				}

  			}else{
  				commits = "Sem commits.";
  				paginator = "";
  			}
  			
			return (
				<div>
					<div className={this.state.classRepoLoaded}>
						<div className="loader clearfix">
							<Loading classRefs={`-bg-white -blue`}/>
						</div>
					</div>
					<div className="repo-content">
						<h1 className="-font-dark -uppercase">{this.state.repo.name}</h1>
						<div className="clearfix">
							<div className="stars float-left"><i className="fa fa-star -font-gray1"></i> {this.state.repo.stargazers_count}</div>
							<div className="forks float-left"><i className="fa fa-code-fork -font-gray1"></i> {this.state.repo.forks}</div>
						</div>
						<div className="commits-wrap">
							<div className="title -font-blue-dark">Commits:</div>
							<div className={this.state.classCommitLoaded}>
								<div className="loader clearfix">
									<Loading classRefs={`-bg-white -blue`}/>
								</div>
							</div>
							<div className="commit-content">
								<ul className="commit-list">
									{commits}
								</ul>
								<div className="paginator-wrap">
									{paginator}
								</div>
								
							</div>
						</div>
					</div>
				</div>
			);
		}else{
			return null;
		}
	}
});

export default RepoItem;