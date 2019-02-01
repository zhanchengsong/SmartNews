(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(217)},194:function(e,t,a){},196:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},197:function(e,t,a){},203:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(100),o=a.n(r),l=(a(194),a(12)),c=a(13),i=a(16),m=a(14),u=a(15),d=(a(196),a(10)),h=(a(197),function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,null,[{key:"authenticateUser",value:function(e,t){localStorage.setItem("token",e),localStorage.setItem("email",t)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token"),localStorage.removeItem("email")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getEmail",value:function(){return localStorage.getItem("email")}}]),e}()),p=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"sendClickLog",value:function(){var e="http://localhost:3000/news/userId/"+h.getEmail()+"/newsId/"+this.props.news.digest,t=new Request(encodeURI(e),{method:"POST",headers:{Authorization:"bearer "+h.getToken()},cache:"no-cache"});fetch(t)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"news-container",onClick:function(){return e.redirectToUrl(e.props.news.url)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s4 fill"},n.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),n.a.createElement("div",{className:"col s8"},n.a.createElement("div",{className:"news-intro-col"},n.a.createElement("div",{className:"news-intro-panel"},n.a.createElement("h4",null,this.props.news.title),n.a.createElement("div",{className:"news-description"},n.a.createElement("p",null,this.props.news.description),n.a.createElement("div",null,null!=this.props.news.source&&n.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source.name),null!=this.props.news.reason&&n.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.class&&n.a.createElement("div",{className:"chip light-red news-chip"},this.props.news.class),null!=this.props.news.time&&n.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))))}},{key:"redirectToUrl",value:function(e){this.sendClickLog(),window.open(e,"_blank")}}]),t}(n.a.Component),g=a(101),w=a.n(g),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={news:null,pageNum:1,totalPages:1,loadedAll:!1},e.handleScroll=e.handleScroll.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadMoreNews(),this.loadMoreNews=w.a.debounce(this.loadMoreNews,1e3),window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-50&&(console.log("Loading more news"),this.loadMoreNews())}},{key:"loadMoreNews",value:function(){var e=this;if(!0!==this.state.loadedAll){var t="http://localhost:3000/news/userId/"+h.getEmail()+"/pageNum/"+this.state.pageNum,a=new Request(encodeURI(t),{method:"GET",headers:{Authorization:"bearer "+h.getToken()},cache:"no-cache"});fetch(a).then(function(e){return e.json()}).then(function(t){t&&0!==t.length||e.setState({loadedAll:!0}),e.setState({news:e.state.news?e.state.news.concat(t):t,pageNum:e.state.pageNum+1})})}}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return n.a.createElement("a",{className:"list-group-item",key:e.digest,href:"#"},n.a.createElement(p,{news:e}))});return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?n.a.createElement("div",null,this.renderNews()):n.a.createElement("div",null,n.a.createElement("div",{id:"msg-app-loading"},"Loading"))}}]),t}(n.a.Component),E=(a(200),a(202),a(203),a(9)),f=(n.a.Component,function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement(v,null)))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav-bar indigo lighten-1"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/",className:"brand-logo"},"\xa0\xa0Tap News"),n.a.createElement("ul",{id:"nav-mobile",className:"right"},h.isUserAuthenticated()?n.a.createElement("div",null,n.a.createElement("li",null,h.getEmail()),n.a.createElement("li",null,n.a.createElement(E.a,{to:"/logout"},"Log out"))):n.a.createElement("div",null,n.a.createElement("li",null,n.a.createElement(E.a,{to:"/login"},"Log in")),n.a.createElement("li",null,n.a.createElement(E.a,{to:"/signup"},"Sign up")))))),n.a.createElement("br",null),t)},b=(a(213),function(e){var t=e.onSubmit,a=e.onChange,s=e.errors;e.user;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card-panel login-panel"},n.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},n.a.createElement("h4",{className:"center-align"},"Login"),s.summary&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.summary)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{className:"validate",id:"email",type:"email",name:"email",onChange:a}),n.a.createElement("label",{htmlFor:"email"},"Email"))),s.email&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.email)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{className:"validate",id:"password",type:"password",name:"password",onChange:a}),n.a.createElement("label",{htmlFor:"password"},"Password"))),s.password&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.password)),n.a.createElement("div",{className:"row right-align"},n.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Log in"})),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"right-align"}," New to Tap News?  ",n.a.createElement(E.a,{to:"/signup"},"Sign Up"))))))}),y=function(e){function t(e,a){var s;return Object(l.a)(this,t),(s=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:""}},s.processForm=s.processForm.bind(Object(d.a)(Object(d.a)(s))),s.changeUser=s.changeUser.bind(Object(d.a)(Object(d.a)(s))),s}return Object(u.a)(t,e),Object(c.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,s=this.state.user.password;console.log("email:",a),console.log("password:",s),fetch("http://localhost:3000/auth/login",{method:"POST",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.user.email,password:this.state.user.password})}).then(function(e){200===e.status?(t.setState({errors:{}}),e.json().then(function(e){console.log(e),h.authenticateUser(e.token,a),this.context.router.replace("/")}.bind(t))):(console.log("Login failed"),e.json().then(function(e){var t=e.errors?e.errors:{};t.summary=e.message,this.setState({errors:t})}.bind(t)))})}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;a[t]=e.target.value,this.setState({user:a})}},{key:"render",value:function(){return n.a.createElement(b,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,user:this.state.user})}}]),t}(n.a.Component);y.contextTypes={router:s.PropTypes.object.isRequired};var j=y,O=(a(215),function(e){var t=e.onSubmit,a=e.onChange,s=e.errors;e.user;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card-panel signup-panel"},n.a.createElement("form",{className:"col s12",action:"/",onSubmit:t},n.a.createElement("h4",{className:"center-align"},"Sign Up"),s.summary&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.summary)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{id:"email",type:"email",name:"email",className:"validate",onChange:a}),n.a.createElement("label",{htmlFor:"email"},"Email"))),s.email&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.email)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{id:"password",type:"password",name:"password",className:"validate",onChange:a}),n.a.createElement("label",{htmlFor:"password"},"Password"))),s.password&&n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"error-message"},s.password)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{id:"confirm_password",type:"password",name:"confirm_password",className:"validate",onChange:a}),n.a.createElement("label",{htmlFor:"confirm_password"},"Conform Password"))),n.a.createElement("div",{className:"row right-align"},n.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn indigo lighten-1",value:"Sign Up"})),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"right-align"}," Already have an account? ",n.a.createElement(E.a,{to:"/login"},"Login"))))))}),S=function(e){function t(e,a){var s;return Object(l.a)(this,t),(s=Object(i.a)(this,Object(m.a)(t).call(this,e,a))).state={errors:{},user:{email:"",password:"",confirm_password:""}},s.processForm=s.processForm.bind(Object(d.a)(Object(d.a)(s))),s.changeUser=s.changeUser.bind(Object(d.a)(Object(d.a)(s))),s}return Object(u.a)(t,e),Object(c.a)(t,[{key:"processForm",value:function(e){var t=this;e.preventDefault();var a=this.state.user.email,s=this.state.user.password,n=this.state.user.confirm_password;console.log("email:",a),console.log("password:",s),console.log("confirm_assword:",n),s===n&&fetch("http://localhost:3000/auth/signup",{method:"POST",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:this.state.user.email,password:this.state.user.password})}).then(function(e){200===e.status?(t.setState({errors:{}}),t.context.router.replace("/login")):e.json().then(function(e){console.log(e);var t=e.errors?e.errors:{};t.summary=e.message,console.log(this.state.errors),this.setState({errors:t})}.bind(t))})}},{key:"changeUser",value:function(e){var t=e.target.name,a=this.state.user;if(a[t]=e.target.value,this.setState({user:a}),this.state.user.password!==this.state.user.confirm_password){var s=this.state.errors;s.password="Password and Confirm Password don't match.",this.setState({errors:s})}else{var n=this.state.errors;n.password="",this.setState({errors:n})}}},{key:"render",value:function(){return n.a.createElement(O,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,user:this.state.user})}}]),t}(n.a.Component);S.contextTypes={router:s.PropTypes.object.isRequired};var k={component:N,childRoutes:[{path:"/",getComponent:function(e,t){h.isUserAuthenticated()?t(null,f):t(null,j)}},{path:"/login",component:j},{path:"/signup",component:S},{path:"/logout",onEnter:function(e,t){h.deauthenticateUser(),t("/")}}]};o.a.render(n.a.createElement(E.b,{history:E.c,routes:k}),document.getElementById("root"))}},[[106,2,1]]]);
//# sourceMappingURL=main.27f6151b.chunk.js.map