(this.webpackJsonpkamas=this.webpackJsonpkamas||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),s=n(23),i=n(24),a=n(26),c=n(25),o=n(1),u=n.n(o),l=n(10),j=n(11),d=n(0),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(a.a)(o,t);var n=Object(c.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(b)(t)}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(35),s=n(3),i="SEND_MESSAGE",a={dialogs:[{id:1,name:"Gwyn"},{id:2,name:"Artorias"},{id:3,name:"Gwynewere"},{id:4,name:"Solar"},{id:5,name:"Firekeeper"},{id:6,name:"Sigward"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:i,message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(s.a)(Object(s.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.message}])});default:return e}}},128:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1MWGv"}},129:function(e,t,n){e.exports={item:"Post_item__3tt0v"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2Db9x",active:"Navbar_active__1OV-z",item:"Navbar_item__9ALDR",friends:"Navbar_friends__2DHV5"}},161:function(e,t,n){},27:function(e,t,n){e.exports={selectedPage:"Users_selectedPage__1mj-Q",avatar:"Users_avatar__l9ksR",paginatorButton:"Users_paginatorButton__3YNDc",paginatorItems:"Users_paginatorItems__3XsvR",pageItem:"Users_pageItem__20jt6",paginatorBody:"Users_paginatorBody__12pg1"}},286:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(63),a=n.n(i),c=n(23),o=n(24),u=n(26),l=n(25),j=(n(161),n(15)),d=n.n(j),b=n(12),p=n(0);var f=function(e){return Object(p.jsxs)("div",{className:d.a.nav,children:[Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/dialogs",activeClassName:d.a.active,children:"Messages"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/users",activeClassName:d.a.active,children:"Users"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/news",activeClassName:d.a.active,children:"News"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/music",activeClassName:d.a.active,children:"Music"})}),Object(p.jsx)("div",{className:d.a.item,children:Object(p.jsx)(b.b,{to:"/settings",activeClassName:d.a.active,children:"Settings"})})]})};var O=function(){return Object(p.jsx)("div",{children:" News "})};var h=function(){return Object(p.jsx)("div",{children:" Music "})};var g=function(){return Object(p.jsx)("div",{children:" Settings "})},m=n(10),v=n(11),x=n(36),_=n.n(x),w=n(67),y=n(35),S=n(3),P=n(127).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"38a32d9f-993b-478b-b9ea-b8b42b661e3c"}}),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return P.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},k=function(e){return P.post("follow/".concat(e))},I=function(e){return P.delete("follow/".concat(e))},N=function(){return P.get("auth/me")},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return P.post("auth/login",{email:e,password:t,rememberMe:n})},A=function(){return P.delete("auth/login")},U=function(e){return P.get("profile/".concat(e))},T=function(e){return P.get("profile/status/".concat(e))},B=function(e){return P.put("profile/status/",{status:e})},L="FOLLOW",z="UNFOLLOW",F="SET_CURRENT_PAGE",M="SET_TOTAL_USERS_COUNT",D="SET_USERS",R="TOGGLE_IS_FETCHING",G="TOGGLE_IS_FOLLOWING_PROGRESS",H={users:[],pageSize:10,totalItemsCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:L,id:e}},W=function(e){return{type:z,id:e}},V=function(e){return{type:R,isFetching:e}},X=function(e,t){return{type:G,followingInProgress:e,id:t}},Q=function(){var e=Object(w.a)(_.a.mark((function e(t,n,r,s){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(S.a)(Object(S.a)({},e),{},{followed:!0}):e}))});case z:return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(S.a)(Object(S.a)({},e),{},{followed:!1}):e}))});case F:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case M:return Object(S.a)(Object(S.a)({},e),{},{totalItemsCount:t.totalCount});case D:return Object(S.a)(Object(S.a)({},e),{},{users:Object(y.a)(t.users)});case R:return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case G:return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(y.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});default:return e}},J=n(27),K=n.n(J),q=n.p+"static/media/userImageDefault.b8cd16ab.jpg",$=n(54),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.onPageChanged,i=e.currentPage,a=e.portionSize,c=void 0===a?10:a,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var j=Math.ceil(o/c),d=Object(r.useState)(1),b=Object($.a)(d,2),f=b[0],O=b[1],h=(f-1)*c,g=f*c;return window.pages=u,Object(p.jsxs)("div",{className:K.a.paginatorBody,children:[f>1&&Object(p.jsx)("button",{className:K.a.paginatorButton,onClick:function(){O(f-1)},children:"PREV"}),Object(p.jsx)("div",{className:K.a.paginatorItems,children:u.filter((function(e){return e>=h&&e<g})).map((function(e){return Object(p.jsx)("span",{onClick:function(t){s(e)},className:K.a.pageItem+" "+(i===e&&K.a.selectedPage),children:e})}))}),f<j&&Object(p.jsx)("button",{className:K.a.paginatorButton,onClick:function(){O(f+1)},children:"NEXT"})]})},te=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ee,Object(S.a)({},e)),e.users.map((function(t){return Object(p.jsx)("div",{children:Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(b.b,{to:"/profile/"+t.id,children:Object(p.jsx)("img",{className:K.a.avatar,src:null!=t.photo?t.photo:q,alt:"ava"})})}),Object(p.jsx)("div",{children:t.followed?Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:t.name}),Object(p.jsx)("div",{children:t.status})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("div",{children:"'UK'"}),Object(p.jsx)("div",{children:"'London'"})]})]})]})})}))]})},ne=n.p+"static/media/Infinity-1.4s-200px.adff80df.svg",re=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:ne,alt:"Loading..."})})},se=n(102),ie=n(9),ae=(n(186),function(e){return e.usersPage.users}),ce=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.followingInProgress},le=function(e){return e.usersPage.totalItemsCount},je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.isFetching?Object(p.jsx)(re,{}):null,Object(p.jsx)(te,{pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowing:this.props.toggleFollowing,followingInProgress:this.props.followingInProgress,totalItemsCount:this.props.totalItemsCount})]})}}]),n}(s.a.Component),de={follow:function(e){return function(){var t=Object(w.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(n,e,k,Y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(n,e,I,W);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleFollowing:X,getUsers:function(e,t){return function(n){n(V(!0)),C(e,t).then((function(t){var r,s;n(V(!1)),n(function(e){return{type:F,currentPage:e}}(e)),n((r=t.items,{type:D,users:r})),n((s=t.totalCount,{type:M,totalCount:s}))}))}}},be=Object(ie.d)(Object(v.b)((function(e){return{users:ae(e),pageSize:ce(e),currentPage:oe(e),followingInProgress:ue(e),totalItemsCount:le(e)}}),de),se.a)(je),pe=n(128),fe=n.n(pe),Oe=function(e){var t=Object(r.useState)(!1),n=Object($.a)(t,2),s=n[0],i=n[1],a=Object(r.useState)(e.status),c=Object($.a)(a,2),o=c[0],u=c[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(p.jsxs)("div",{children:[!s&&Object(p.jsx)("div",{children:Object(p.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"-----"})}),s&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(e){u(e.target.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},value:o})})]})},he=function(e){return e.profile?Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://i.pinimg.com/originals/58/01/cf/5801cfba80c2e2af9d4fef797e5834ec.png"})}),Object(p.jsx)("div",{className:fe.a.descriptionBlock,children:Object(p.jsx)("img",{src:e.profile.photos.large})}),Object(p.jsx)(Oe,{status:e.status,updateStatus:e.updateStatus})]}):Object(p.jsx)(re,{})},ge="ADD-POST",me="SET_USER_PROFILE",ve="SET_STATUS",xe="GET_STATUS",_e={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:var n={id:5,message:t.postBody,likesCount:0};return Object(S.a)(Object(S.a)({},e),{},{newPostText:"",posts:[].concat(Object(y.a)(e.posts),[n])});case me:return Object(S.a)(Object(S.a)({},e),{},{profile:Object(S.a)({},t.profile)});case xe:case ve:return Object(S.a)(Object(S.a)({},e),{},{status:t.status});default:return e}},ye=n(88),Se=n.n(ye),Pe=n(129),Ce=n.n(Pe),ke=function(e){return Object(p.jsxs)("div",{className:Ce.a.item,children:[Object(p.jsx)("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"})," ",e.likesCount]})]})},Ie=n(124),Ne=n(125),Ee=n(40),Ae=n(41),Ue=Object(Ee.a)(30),Te=Object(Ne.a)({form:"newPostForm"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)(Ie.a,{component:Ae.b,name:"newPostBody",placeholder:"Write your post here!",validate:[Ee.b,Ue]})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})})),Be=function(e){var t=e.posts.map((function(e){return Object(p.jsx)(ke,{message:e.message,likesCount:e.likesCount})}));return Object(p.jsxs)("div",{className:Se.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(Te,{onSubmit:function(t){e.addPost(t.newPostBody)},props:e}),Object(p.jsx)("div",{className:Se.a.posts,children:t})]})},Le=Object(v.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:ge,postBody:e}}(t))}}}))(Be),ze=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(he,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)(Le,{})]})},Fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.match.params.id;e||(e=this.props.authorizedUserId),this.props.getUser(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(p.jsx)(ze,Object(S.a)({},this.props))}}]),n}(s.a.Component),Me={getUser:function(e){return function(t){U(e).then((function(e){var n;t((n=e.data,{type:me,profile:n}))}))}},getUserStatus:function(e){return function(t){T(e).then((function(e){var n;t((n=e.data,{type:xe,status:n}))}))}},updateStatus:function(e){return function(t){B(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:ve,status:e}}(e))}))}}},De=Object(ie.d)(Object(v.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),Me),m.f)(Fe),Re=n(92),Ge=n.n(Re);var He=function(e){return Object(p.jsxs)("header",{className:Ge.a.header,children:[Object(p.jsx)("img",{src:"https://v1.cosmos.network/img/logo.e561e4f3.png"}),Object(p.jsx)("div",{className:Ge.a.loginBlock,children:e.isAuth?Object(p.jsxs)("div",{children:[e.login," - ",Object(p.jsx)("button",{onClick:e.logOut,children:"Log Out"})]}):Object(p.jsx)(b.b,{to:"/login",children:"Login"})})]})},Ye=n(38),We="SET_USER_DATA",Ve={id:null,email:null,login:null,isAuth:!1},Xe=function(e,t,n,r){return{type:We,payload:{id:e,email:t,login:n,isAuth:r}}},Qe=function(){return function(e){return N().then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,s=n.email,i=n.login;e(Xe(r,s,i,!0))}}))}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We:return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},Je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(He,Object(S.a)({},this.props))}}]),n}(s.a.Component),Ke={logOut:function(){return function(e){A().then((function(t){0===t.data.resultCode&&e(Xe(null,null,null,!1))}))}}},qe=Object(v.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),Ke)(Je),$e=Object(Ne.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(p.jsxs)("form",{onSubmit:t,children:[Object(p.jsx)("div",{children:Object(p.jsx)(Ie.a,{placeholder:"Login",name:"email",component:Ae.a,validate:Ee.b})}),Object(p.jsx)("div",{children:Object(p.jsx)(Ie.a,{type:"password",name:"password",placeholder:"password",component:Ae.a,validate:Ee.b})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(Ie.a,{type:"checkbox",component:Ae.a,name:"rememberMe"})," Remember me!"]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})}),Object(p.jsx)("div",{children:n})]})})),et=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{logIn:function(e,t,n){return function(r){E(e,t,n).then((function(e){if(0===e.data.resultCode)r(Qe());else{var t=e.data.messages.length>0?e.data.messages[0]:"Common error";r(Object(Ye.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(p.jsx)(m.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)($e,{onSubmit:function(t){e.logIn(t.email,t.password,t.rememberMe)}})]})})),tt="INITIALIZED_SUCCESS",nt={initialized:!1},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},st=s.a.lazy((function(){return n.e(3).then(n.bind(null,288))})),it=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"app-wrapper",children:[Object(p.jsx)(qe,{}),Object(p.jsx)(f,{store:this.props.store}),Object(p.jsxs)("div",{className:"app-wrapper-content",children:[Object(p.jsx)(m.b,{path:"/profile/:id?",render:function(){return Object(p.jsx)(De,{})}}),Object(p.jsx)(m.b,{path:"/dialogs",render:(e=st,function(t){return Object(p.jsx)(s.a.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading..."}),children:Object(p.jsx)(e,Object(S.a)({},t))})})}),Object(p.jsx)(m.b,{path:"/users",render:function(){return Object(p.jsx)(be,{})}}),Object(p.jsx)(m.b,{path:"/login",render:function(){return Object(p.jsx)(et,{})}}),Object(p.jsx)(m.b,{path:"/news",render:O}),Object(p.jsx)(m.b,{path:"/music",render:h}),Object(p.jsx)(m.b,{path:"/settings",render:g})]})]})}):Object(p.jsx)(re,{});var e}}]),n}(s.a.Component),at=Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Qe()).then((function(){e({type:tt})}))}}})(it),ct=n(123),ot={},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot;return e},lt=n(126),jt=n(131),dt=Object(ie.c)({profilePage:we,dialogsPage:ct.a,sidebar:ut,usersPage:Z,auth:Ze,form:lt.a,app:rt}),bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,pt=Object(ie.e)(dt,bt(Object(ie.a)(jt.a)));window.__store__=pt;var ft=pt;a.a.render(Object(p.jsx)(v.a,{store:ft,children:Object(p.jsx)(at,{})}),document.getElementById("root"))},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var r=n(3),s=n(69),i=(n(1),n(89)),a=n.n(i),c=n(0),o=["input","meta"],u=["input","meta","child"],l=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=Object(s.a)(e,o),r=t.touched&&t.error;return Object(c.jsxs)("div",{className:a.a.formControl+" "+(r?a.a.error:""),children:[Object(c.jsx)("div",{children:n.children}),r&&Object(c.jsx)("span",{children:t.error})]})},d=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,u));return Object(c.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,e.child,Object(s.a)(e,l));return Object(c.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},88:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1e0Qb",posts:"MyPosts_posts__7O9L7"}},89:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2zzbA",error:"FormsControls_error__1ZSZL"}},92:function(e,t,n){e.exports={header:"Header_header__obYEB",loginBlock:"Header_loginBlock__29Qec"}}},[[286,1,2]]]);
//# sourceMappingURL=main.372da843.chunk.js.map