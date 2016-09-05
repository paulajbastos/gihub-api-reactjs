import axios from 'axios';
import parse from 'parse-link-header';

//var _urlRepos = 'https://api.github.com/users/globocom/repos';
var _urlRepos = 'https://api.github.com/users/globocom/repos?sort=updated&direction=desc';
//var _urlRepos = 'https://api.github.com/users/globocom/repos?sort=stars&direction=desc';
var _urlRepo = 'https://api.github.com/repos/globocom/';

var RepoListService = {
	getList: function(){
		return axios.get(_urlRepos);
	},
	getRepo: function(name){
		return axios.get(_urlRepo+name);
	},
	getCommitByPage: function(page, name, settings){
		var commitsObj = {};
		var commits = [];
		var link = null;
		var paginatorObj = null;
		var nextPage = null;
		var lastPage = null;

		axios.get(_urlRepo+name+'/commits?page='+page+'&per_page=20')
		.then(function (response) {
		    
		    commits = response.data;
		   	link = response.headers.link;
		    if(link != null){
				paginatorObj = parse(link);
				nextPage = paginatorObj.next.page;
			 	lastPage = paginatorObj.last.page;
		    }
		   
		    commitsObj = {
		    	commits,
		    	nextPage,
		    	lastPage
		    }

		    settings.onSuccess(commitsObj);
		})
		.catch(function (error) {
			console.log("commits error");
		    console.log(error);
		    commitsObj = {};
		    settings.onFail(commitsObj);
		});
	}
}

module.exports = RepoListService;