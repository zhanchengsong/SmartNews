(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(27)},16:function(e,n,t){},18:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},19:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),s=t.n(a),o=t(9),l=t.n(o),c=(t(16),t(1)),r=t(2),i=t(4),u=t(3),d=t(5),m=(t(18),t(6)),h=(t(19),function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"news-container",onClick:function(){return e.redirectToUrl(e.props.news.url)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s4 fill"},s.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),s.a.createElement("div",{className:"col s8"},s.a.createElement("div",{className:"news-intro-col"},s.a.createElement("div",{className:"news-intro-panel"},s.a.createElement("h4",null,this.props.news.title),s.a.createElement("div",{className:"news-description"},s.a.createElement("p",null,this.props.news.description),s.a.createElement("div",null,null!=this.props.news.source&&s.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&s.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.class&&s.a.createElement("div",{className:"chip light-red news-chip"},this.props.news.class),null!=this.props.news.time&&s.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))))}},{key:"redirectToUrl",value:function(e){window.open(e,"_blank")}}]),n}(s.a.Component)),p=t(10),w=t.n(p),v=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).state={news:null},e.handleScroll=e.handleScroll.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.loadMoreNews(),this.loadMoreNews=w.a.debounce(this.loadMoreNews,1e3),window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;window.innerHeight+e>=document.body.offsetHeight-50&&(console.log("Loading more news"),this.loadMoreNews())}},{key:"loadMoreNews",value:function(){var e=this,n=new Request("http://localhost:3000/news",{method:"GET",cache:"no-cache"});fetch(n).then(function(e){return e.json()}).then(function(n){console.log(n);var t=JSON.parse(n.result);console.log(t),e.setState({news:e.state.news?e.state.news.concat(t):t})})}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return s.a.createElement("a",{className:"list-group-item",key:e.digest,href:"#"},s.a.createElement(h,{news:e}))});return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?s.a.createElement("div",null,this.renderNews()):s.a.createElement("div",null,s.a.createElement("div",{id:"msg-app-loading"},"Loading"))}}]),n}(s.a.Component),f=(t(22),t(24),t(25),function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement(v,null)))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.b937b2b6.chunk.js.map