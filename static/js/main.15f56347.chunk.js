(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1560:function(e,t,c){},1575:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(20),s=c.n(n),i=c(15),o=(c(54),c(14)),l=c(8),d=c(5),j=(c(55),c(56),c(2));var u=function(){return Object(j.jsx)("div",{className:"footer"})},h=(c(58),c(48));var b=function(){function e(){document.querySelector(".header-container__items").classList.toggle("background"),document.querySelector(".header-container__item ul").classList.toggle("showMenu")}return window.onscroll=function(){return function(){var e=document.querySelector(".header");document.body.scrollTop>10||document.documentElement.scrollTop>10?e.style.backgroundColor="#8a8af9":e.style.backgroundColor="#ccccff"}()},Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(i.c,{to:"/",className:"header-container__logo",onClick:function(){document.querySelector(".header-container__items").classList.remove("background"),document.querySelector(".header-container__item ul").classList.remove("showMenu")},children:"Front-End"}),Object(j.jsx)("div",{className:"header-container__items",onClick:e,children:Object(j.jsx)(h.a,{color:"#fff",size:"35px"})})]}),Object(j.jsx)("div",{className:"header-container__item",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.d,{exact:!0,to:"/birthdays",activeClassName:"active",onClick:e,children:"Birthday"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.d,{exact:!0,to:"/user",activeClassName:"active",onClick:e,children:"List User"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.d,{exact:!0,to:"/cart",activeClassName:"active",onClick:e,children:"Shopping Cart"})})]})})]})})},m=c(7);c(67);var O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)("transparent"),s=Object(d.a)(n,2),i=s[0],o=s[1],l=Object(a.useRef)("transparent");return Object(a.useEffect)((function(){var e=setInterval((function(){var e=function(e){var t="0".concat(e.getHours()).slice(-2),c="0".concat(e.getMinutes()).slice(-2),a="0".concat(e.getSeconds()).slice(-2);return"".concat(t,":").concat(c,":").concat(a)}(new Date);r(e)}),1e3);return function(){return clearInterval(e)}}),[]),Object(a.useEffect)((function(){var e=setInterval((function(){var e=function(e){for(var t=["red","orange","yellow","green","blue","purple","black"],c=t.indexOf(e),a=c;c===a;)a=Math.trunc(7*Math.random());return t[a]}(l.current);o(e),l.current=e}),500);return function(){return clearInterval(e)}}),[]),Object(j.jsx)("div",{className:"clock",style:{border:"4px solid ".concat(i)},children:c})},p=(c(68),c.p+"static/media/cv.71dc8e39.jpg"),x=c(16);var v=function(){return Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"info--chung",children:[Object(j.jsx)("img",{src:p,alt:"Avatar",className:"info--chung-avt"}),Object(j.jsxs)("div",{className:"info--chung-title",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(x.c,{style:{paddingRight:"5px",opacity:"0.5"}})," L\xea H\u1eefu L\u1ed9c"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.d,{style:{paddingRight:"5px",opacity:"0.5"}})," Nam"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{style:{paddingRight:"5px",opacity:"0.5"}})," 27-11-99"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.b,{style:{paddingRight:"5px",opacity:"0.5"}}),"Ho\xe0i \xc2n - B\xecnh \u0110\u1ecbnh"]})]})]}),Object(j.jsxs)("div",{className:"info-work",children:[Object(j.jsx)("h4",{children:"H\u1ecdc v\u1ea5n"}),Object(j.jsxs)("div",{className:"info-work__child",children:[Object(j.jsx)("p",{children:"Duy T\xe2n University"}),Object(j.jsx)("p",{children:"K\u1ef9 s\u01b0 ph\u1ea7n m\u1ec1m"})]}),Object(j.jsxs)("div",{className:"info-work__skills",children:[Object(j.jsx)("h4",{children:"K\u1ef9 n\u0103ng"}),Object(j.jsx)("p",{children:"HTML, CSS, JAVASCRIPT, REACTJS"})]}),Object(j.jsxs)("div",{className:"info-work__skills",children:[Object(j.jsx)("h4",{children:"Li\xean h\u1ec7"}),Object(j.jsx)("p",{children:"Phone: 0983395820"}),Object(j.jsx)("p",{children:"Email: huuloc271199@gmail.com"})]})]})]})};var y=function(){return Object(j.jsx)("div",{children:"Opps...C\xf3 l\u1ed7i r\u1ed3i b\u1ea1n \u01a1i !"})},g=c(1578),f=c(1579),_=c(1580),N=c(1581),S=c(1582);c(69);function C(){return["https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg","https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-girl-deo-kinh-thoi-trang-tri-thuc-dep-nhat.jpg","https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg"][Math.trunc(3*Math.random())]}function L(){document.querySelector(".container-project div .add__user").classList.toggle("show"),document.querySelector(".name-error").classList.remove("error"),document.querySelector(".time-error").classList.remove("error")}function k(e){var t=e.onAddUser,c=e.listUser,r=e.onDeleteUser,n=e.onUpdateUser,s=e.onUpdate,i=Object(a.useState)(""),l=Object(d.a)(i,2),u=l[0],h=l[1],b=Object(a.useState)(""),m=Object(d.a)(b,2),O=m[0],p=m[1],v=Object(a.useState)(""),y=Object(d.a)(v,2),k=y[0],R=y[1],I=Object(a.useState)(""),E=Object(d.a)(I,2),T=E[0],w=E[1],D=Object(a.useState)(""),q=Object(d.a)(D,2),A=q[0],U=q[1],F=Object(a.useState)(""),M=Object(d.a)(F,2),H=M[0],B=M[1],Y=Object(a.useState)(""),P=Object(d.a)(Y,2),z=P[0],V=P[1],J=Object(a.useState)(""),Q=Object(d.a)(J,2),G=Q[0],K=Q[1],$=Object(a.useState)(""),W=Object(d.a)($,2),X=W[0],Z=W[1],ee=Object(a.useState)(""),te=Object(d.a)(ee,2),ce=te[0],ae=te[1],re=Object(a.useState)(""),ne=Object(d.a)(re,2),se=ne[0],ie=ne[1],oe=Object(a.useState)((function(){return localStorage.getItem("box-img")||"https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"})),le=Object(d.a)(oe,2),de=le[0],je=le[1];function ue(){document.querySelector(".container-project div .update__user").classList.toggle("show"),document.querySelector(".nameUD-error").classList.remove("error"),document.querySelector(".timeUD-error").classList.remove("error")}var he=Object(o.a)(c).filter((function(e){return""===se||e.name.toLowerCase().includes(se.toLowerCase())?e:e.search})),be=Object(a.useState)(0),me=Object(d.a)(be,2),Oe=me[0],pe=me[1],xe=4*Oe,ve=Math.ceil(he.length/4);function ye(e){pe(e)}return Object(j.jsxs)("div",{className:"user",children:[Object(j.jsx)("div",{className:"list__user",children:Object(j.jsxs)(g.a,{children:[Object(j.jsxs)("div",{className:"reponsive__filters",children:[Object(j.jsxs)("div",{className:"list__user--search",children:[Object(j.jsx)("p",{children:"Search"}),Object(j.jsx)("input",{id:"searchId",type:"text",value:se,onChange:function(e){ie(e.target.value),pe(0)},placeholder:"H\u1eefu L\u1ed9c..."})]}),Object(j.jsx)("div",{className:"list__user--plus",onClick:L,children:Object(j.jsx)(x.e,{size:"25px"})})]}),Object(j.jsx)("div",{className:"user__items",children:c.filter((function(e){return""===se||e.name.toLowerCase().includes(se.toLowerCase())?e:e.search})).slice(xe,xe+4).map((function(e){return Object(j.jsxs)("div",{className:"user__items--item",children:[Object(j.jsx)("img",{width:"200px",height:"200px",src:e.image,alt:"Error img ".concat(e.image)}),Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:["0".concat(e.date).slice(-2),"-","0".concat(e.month).slice(-2),"-",e.year]}),Object(j.jsxs)("div",{className:"item__btn",children:[Object(j.jsx)(f.a,{type:"button",color:"primary",onClick:function(){return function(e){r&&r(e)}(e)},children:"Delete"}),Object(j.jsx)(f.a,{type:"button",color:"primary",onClick:function(){return function(e){s&&s(e),U(e.name),B(e.date),V(e.month),K(e.year),Z(e.image),ae(e.id),ue()}(e)},children:"Update"})]})]},e.id)}))})]})}),Object(j.jsx)("div",{className:"add__user",children:Object(j.jsxs)(g.a,{className:"add__user--container",children:[Object(j.jsx)("div",{className:"add__user--close",onClick:L,children:Object(j.jsx)(x.f,{size:"25px"})}),Object(j.jsxs)(_.a,{children:[Object(j.jsx)(N.a,{for:"nameId",children:"Name"}),Object(j.jsx)(S.a,{name:"name",id:"nameId",placeholder:"Eg: H\u1eefu L\u1ed9c...",value:u,onChange:function(e){h(e.target.value);var t=document.querySelector(".name-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),Object(j.jsx)(N.a,{className:"name-error",children:"B\u1ea1n ph\u1ea3i nh\u1eadp tr\u01b0\u1eddng n\xe0y"})]}),Object(j.jsxs)(_.a,{children:[Object(j.jsx)(N.a,{for:"birthdayId",children:"Birthday"}),Object(j.jsxs)("div",{className:"add__user--container__birthday",children:[Object(j.jsx)(S.a,{type:"number",min:"1",max:"31",name:"birthday",id:"birthdayId",placeholder:"dd",value:O,onChange:function(e){p(e.target.value);var t=document.querySelector(".time-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),"/",Object(j.jsx)(S.a,{type:"number",min:"1",max:"12",placeholder:"mm",value:k,onChange:function(e){R(e.target.value);var t=document.querySelector(".time-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),"/",Object(j.jsx)(S.a,{type:"number",min:"1990",max:"2021",placeholder:"yyyy",value:T,onChange:function(e){w(e.target.value);var t=document.querySelector(".time-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}})]}),Object(j.jsx)(N.a,{className:"time-error",children:"Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng (dd-mm-yyyy)"})]}),Object(j.jsx)(_.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{width:"100%",height:"200px",src:de,alt:"Random"})})}),Object(j.jsx)(_.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f.a,{type:"button",outline:!0,color:"primary",onClick:function(){var e=C();je(e),localStorage.setItem("box-img",e)},children:"Random a photo"}),Object(j.jsx)(f.a,{type:"button",color:"primary",onClick:function(){var e=document.querySelector(".time-error"),c=document.querySelector(".name-error");if(u&&O>0&&O<31&&k>0&&k<12&&T>1990&&T<2021){if(e.classList.remove("error"),c.classList.remove("error"),t){var a={name:u,date:parseInt(O),month:parseInt(k),year:parseInt(T),image:de};t(a),h(""),p(""),R(""),w("")}L()}else u?e.classList.add("error"):c.classList.add("error")},children:"Add"})]})})]})}),Object(j.jsx)("div",{className:"update__user",children:Object(j.jsxs)(g.a,{className:"update__user--container",children:[Object(j.jsx)("div",{className:"update__user--close",onClick:ue,children:Object(j.jsx)(x.f,{size:"25px"})}),Object(j.jsxs)(_.a,{children:[Object(j.jsx)(N.a,{for:"nameId",children:"Name"}),Object(j.jsx)(S.a,{name:"name",id:"nameId",value:A,onChange:function(e){U(e.target.value);var t=document.querySelector(".nameUD-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),Object(j.jsx)(N.a,{className:"nameUD-error",children:"B\u1ea1n ph\u1ea3i nh\u1eadp tr\u01b0\u1eddng n\xe0y"})]}),Object(j.jsxs)(_.a,{children:[Object(j.jsx)(N.a,{for:"birthdayId",children:"Birthday"}),Object(j.jsxs)("div",{className:"add__user--container__birthday",children:[Object(j.jsx)(S.a,{type:"number",min:"1",max:"31",name:"birthday",id:"birthdayId",placeholder:"dd",value:H,onChange:function(e){B(e.target.value);var t=document.querySelector(".timeUD-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),"/",Object(j.jsx)(S.a,{type:"number",min:"1",max:"12",placeholder:"mm",value:z,onChange:function(e){V(e.target.value);var t=document.querySelector(".timeUD-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}}),"/",Object(j.jsx)(S.a,{type:"number",min:"1990",max:"2020",placeholder:"yyyy",value:G,onChange:function(e){K(e.target.value);var t=document.querySelector(".timeUD-error");e.target.value?t.classList.remove("error"):t.classList.add("error")}})]}),Object(j.jsx)(N.a,{className:"timeUD-error",children:"Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng (dd-mm-yyyy)"})]}),Object(j.jsx)(_.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{width:"100%",height:"200px",src:X,alt:"Random"})})}),Object(j.jsx)(_.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f.a,{type:"button",outline:!0,color:"primary",onClick:function(){var e=C();Z(e)},children:"Random a photo"}),Object(j.jsx)(f.a,{type:"button",color:"primary",onClick:function(){var e=document.querySelector(".timeUD-error"),t=document.querySelector(".nameUD-error");if(A&&parseInt(H)>0&&parseInt(H)<31&&parseInt(z)>0&&parseInt(z)<12&&parseInt(G)>1990&&parseInt(G)<2021){if(e.classList.remove("error"),t.classList.remove("error"),n){var c={id:ce,name:A,date:parseInt(H),month:parseInt(z),year:parseInt(G),image:X};n(c)}ue()}else A?e.classList.add("error"):t.classList.add("error")},children:"Update"})]})})]})}),Object(j.jsxs)("div",{className:"user__btn",children:[Object(j.jsx)("button",{disabled:Oe<=0,type:"button",onClick:function(){return ye(Oe-1)},children:"Prev"}),Object(j.jsx)("p",{children:Oe+1}),Object(j.jsx)("button",{disabled:Oe>=ve-1,type:"button",onClick:function(){return ye(Oe+1)},children:"Next"})]})]})}k.defaultProps={onAddUser:null,onDeleteUser:null,onUpdateUser:null,onUpdate:null,listUser:[]};var R=k;c(70);function I(e){for(var t=e.listUser,c=new Date,a=c.getDate(),r=c.getMonth()+1,n=c.getFullYear(),s=[],i=0;i<t.length;i++)t[i].date===a&&t[i].month===r&&s.push(t[i]);function o(e){e.currentTarget.style.backgroundColor="rgb(37 175 212 / 100%)",e.currentTarget.lastChild.classList.add("isHovering")}function l(e){e.currentTarget.style.backgroundColor="rgb(37 175 212 / 50%)",e.currentTarget.lastChild.classList.remove("isHovering")}return Object(j.jsxs)("div",{className:"birthday",children:[Object(j.jsxs)("div",{className:"total",children:[s.length," Birthdays today"]}),Object(j.jsx)("div",{className:"user__birthday",children:s.map((function(e){return Object(j.jsxs)("div",{className:"birthday__item",onMouseEnter:o,onMouseLeave:l,children:[Object(j.jsx)("img",{width:"85px",height:"75px",src:e.image,alt:"Error img ".concat(e.image),className:"birthday__item--img"}),Object(j.jsxs)("div",{className:"birthday__item--mota",children:[Object(j.jsx)("p",{className:"birthday__item--name",children:e.name}),Object(j.jsxs)("p",{className:"birthday__item--old",children:[n-e.year," tu\u1ed5i"]})]}),Object(j.jsxs)("div",{className:"notHovering",children:[Object(j.jsx)("img",{width:"150px",height:"150px",src:e.image,alt:"Error img ".concat(e.image)}),Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("p",{children:["0".concat(e.date).slice(-2),"-","0".concat(e.month).slice(-2),"-",e.year]})]})]},e.id)}))})]})}I.defaultProps={listUser:[]};var E=I,T=(c(71),c(23)),w=c(26),D=c(17),q=c.n(D),A=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:[].concat(Object(o.a)(e.cart),[Object(l.a)(Object(l.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(l.a)(Object(l.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(l.a)(Object(l.a)({},e),{},{cart:e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty}))});default:return e}},U=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(l.a)(Object(l.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(l.a)(Object(l.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(l.a)(Object(l.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(l.a)(Object(l.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{searchQuery:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""};default:return e}},F=Object(a.createContext)();q.a.seed(99);var M=function(e){var t=e.children,c=Object(o.a)(Array(20)).map((function(){return{id:q.a.datatype.uuid(),name:q.a.commerce.productName(),price:q.a.commerce.price(),image:q.a.random.image(),isStock:q.a.random.arrayElement([0,3,5,6,7]),fastDelivery:q.a.datatype.boolean(),ratings:q.a.random.arrayElement([1,2,3,4,5])}})),r=Object(a.useReducer)(A,{products:c,cart:[]}),n=Object(d.a)(r,2),s=n[0],i=n[1],l=Object(a.useReducer)(U,{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""}),u=Object(d.a)(l,2),h=u[0],b=u[1];return Object(j.jsx)(F.Provider,{value:{state:s,dispatch:i,productState:h,productDispatch:b},children:t})},H=function(){return Object(a.useContext)(F)},B=function(e){var t=e.rating,c=(e.onClick,e.style);return Object(j.jsx)(j.Fragment,{children:Object(o.a)(Array(5)).map((function(e,a){return Object(j.jsx)("span",{style:c,children:t>a?Object(j.jsx)(T.a,{size:"20px"}):Object(j.jsx)(T.c,{size:"20px"})},a)}))})},Y=c(19);c(44);Y.a.configure();var P=function(e){var t=e.product,c=H(),a=c.state.cart,r=c.dispatch;return Object(j.jsx)("div",{className:"products",children:Object(j.jsxs)("div",{className:"products__card",children:[Object(j.jsx)("img",{src:t.image,alt:t.name,width:"240px",height:"180"}),Object(j.jsxs)("div",{className:"card__body",children:[Object(j.jsx)("span",{className:"card__body--title",children:t.name}),Object(j.jsxs)("div",{className:"card__body--subtitle",children:[Object(j.jsxs)("span",{children:["$",t.price.split(".")[0]]}),t.fastDelivery?Object(j.jsx)("div",{children:"Fast Delivery"}):Object(j.jsx)("div",{children:"4 days delivery"}),Object(j.jsx)(B,{rating:t.ratings}),a.some((function(e){return e.id===t.id}))?Object(j.jsx)("button",{style:{background:"red"},onClick:function(){var e;r({type:"REMOVE_FROM_CART",payload:t}),e=t,Y.a.error("Delete ".concat(e.name))},children:"Remove from Cart"}):Object(j.jsx)("button",{style:{background:"#5600ff"},onClick:function(){var e;r({type:"ADD_TO_CART",payload:t}),e=t,Y.a.success("Add ".concat(e.name))},disabled:!t.isStock,children:t.isStock?"Add to Cart":"Out to Stock"})]})]})]})})},z=(c(1560),c(1583)),V=c(30),J=c(49),Q=function(){var e=H(),t=e.productState,c=t.byStock,a=t.byFastDelivery,r=e.productDispatch;return Object(j.jsx)("div",{className:"filters",children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Filters"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)(z.a,{className:"".concat(c?"active":""),onClick:function(){r({type:"FILTER_BY_STOCK"})},children:"Include Out to Stock"})}),Object(j.jsx)("span",{children:Object(j.jsx)(z.a,{className:"".concat(a?"active":""),onClick:function(){r({type:"FILTER_BY_DELIVERY"})},children:"Fast Delivery"})}),Object(j.jsx)("span",{className:"price",children:Object(j.jsx)(V.a,{options:[{value:"lowToHigh",label:"Ascending"},{value:"highToLow",label:"Descending"}],placeholder:"Price...",onChange:function(e){r({type:"SORT_BY_PRICE",payload:e.value})}})}),Object(j.jsx)("span",{className:"rating",children:Object(j.jsx)(V.a,{options:[{value:0,label:"--"},{value:1,label:"1 Star"},{value:2,label:"2 Star"},{value:3,label:"3 Star"},{value:4,label:"4 Star"},{value:5,label:"5 Star"}],placeholder:"Star...",onChange:function(e){r({type:"FILTER_BY_RATING",payload:e.value})}})})]}),Object(j.jsx)("span",{children:Object(j.jsxs)("div",{className:"search__cart",onMouseEnter:function(e){e.currentTarget.children[0].classList.add("search__hover")},onMouseLeave:function(e){0===document.querySelector(".search__cart input").value.length&&e.currentTarget.children[0].classList.remove("search__hover")},children:[Object(j.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){r({type:"FILTER_BY_SEARCH",payload:e.target.value})}}),Object(j.jsx)(J.a,{color:"#fff",size:"22px"})]})})]})})};var G=function(){var e=H(),t=e.state.products,c=e.productState,r=c.sort,n=c.byStock,s=c.byFastDelivery,i=c.byRating,o=c.searchQuery,l=function(){var e=t;return r&&(e=e.sort((function(e,t){return"lowToHigh"===r?e.price-t.price:t.price-e.price}))),n&&(e=e.filter((function(e){return e.isStock}))),s&&(e=e.filter((function(e){return e.fastDelivery}))),i&&(e=e.filter((function(e){return e.ratings>=i}))),o&&(e=e.filter((function(e){return e.name.toLowerCase().trim().includes(o.toLowerCase().trim())}))),e},u=Object(a.useState)(!1),h=Object(d.a)(u,2),b=h[0],m=h[1];return Object(a.useEffect)((function(){m(!0),setTimeout((function(){m(!1)}),700)}),[]),Object(j.jsxs)("div",{className:"products__home",children:[Object(j.jsx)(Q,{}),Object(j.jsx)("div",{className:"products__container",children:b?Object(j.jsx)("div",{className:"loading",children:"Loading..."}):Object(j.jsx)(j.Fragment,{children:l().length>0?l().map((function(e){return Object(j.jsx)(P,{product:e},e.id)})):Object(j.jsx)("div",{className:"notbefound",children:"Product could not be found..."})})})]})};Y.a.configure();var K=function(){var e=H(),t=e.state.cart,c=e.dispatch,r=Object(a.useState)(),n=Object(d.a)(r,2),s=n[0],i=n[1];Object(a.useEffect)((function(){i(t.reduce((function(e,t){return e+Number(t.price)*t.qty}),0))}),[t]);return Object(j.jsxs)("div",{className:"home__mycart",children:[Object(j.jsx)("div",{className:"productContainer",children:t.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.image,alt:e.name,width:"130px",height:"130px"}),Object(j.jsx)("span",{className:"nameProduct",children:e.name}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{disabled:1===e.qty,onClick:function(){c({type:"CHANGE_CART_QTY",payload:{id:e.id,qty:--e.qty}})},children:"Minus"}),Object(j.jsx)("span",{children:e.qty}),Object(j.jsx)("button",{onClick:function(){c({type:"CHANGE_CART_QTY",payload:{id:e.id,qty:++e.qty}})},children:"Plus"})]}),Object(j.jsxs)("span",{className:"priceProduct",children:["$",e.price.split(".")[0]]}),Object(j.jsx)("div",{className:"cart__delete",onClick:function(){var t;c({type:"REMOVE_FROM_CART",payload:e}),t=e,Y.a.error("Delete ".concat(t.name))},children:Object(j.jsx)(w.a,{size:"30px"})})]},e.id)}))}),t.length>0?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"filters__cart",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"title",children:["Subtotal (",t.length,") items"]}),Object(j.jsxs)("span",{className:"price",children:["Total: $",s]})]}),Object(j.jsx)("button",{type:"button",disabled:0===t.length,onClick:function(){Y.a.warning("Unavailable")},children:"Proceed to Checkout"})]})}):Object(j.jsx)("div",{className:"empty",children:"Cart is Empty!"})]})};var $=function(){var e=Object(m.f)(),t=e.path,c=e.url,a=H(),r=a.state.cart,n=a.dispatch,s=H().productDispatch;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header__cart",children:[Object(j.jsx)("div",{className:"home__cart",children:Object(j.jsx)(i.d,{exact:!0,to:"".concat(c),activeClassName:"active__cart",onClick:function(){s({type:"CLEAR_FILTERS"})},children:"Shopping Cart"})}),Object(j.jsx)("div",{className:"items__cart",children:Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{onMouseEnter:function(e){e.currentTarget.children[1].classList.add("cart__hover")},onMouseLeave:function(e){e.currentTarget.children[1].classList.remove("cart__hover")},children:[Object(j.jsxs)(i.d,{to:"".concat(c,"/my-cart"),activeClassName:"active__cart",className:"item-header",children:[r.length,Object(j.jsx)(T.b,{color:"#fff",size:"25px"})]}),Object(j.jsx)("div",{className:"hide",children:r.length>0?Object(j.jsx)(j.Fragment,{children:r.map((function(e){return Object(j.jsxs)("div",{className:"cart__hover--item",children:[Object(j.jsx)("img",{src:e.image,alt:e.name,width:"75px",height:"75px"}),Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("div",{className:"cart__delete",onClick:function(){n({type:"REMOVE_FROM_CART",payload:e})},children:Object(j.jsx)(w.a,{size:"30px"})})]},e.id)}))}):Object(j.jsx)("span",{style:{padding:10,textAlign:"center"},children:"Cart is Empty!"})})]})})})]}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:t,children:Object(j.jsx)(G,{})}),Object(j.jsx)(m.a,{path:"".concat(t,"/:myCartId"),children:Object(j.jsx)(K,{})})]})]})};var W=function(){var e=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("list-user"))||[{id:1,name:"L\xea H\u1eefu L\u1ed9c",date:27,month:11,year:1999,image:"https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"},{id:2,name:"Th\u1ea3o Duy\xean",date:5,month:1,year:2004,image:"https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-girl-deo-kinh-thoi-trang-tri-thuc-dep-nhat.jpg"},{id:3,name:"Hinata",date:1,month:11,year:1999,image:"https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg"},{id:4,name:"Naruto",date:27,month:11,year:1999,image:"https://topshare.vn/wp-content/uploads/2021/05/hinh-anh-anime-nam-ngau-12.jpg"}]})),t=Object(d.a)(e,2),c=t[0],r=t[1];return Object(j.jsxs)(i.a,{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"container-project",children:Object(j.jsxs)(m.c,{children:[Object(j.jsxs)(m.a,{exact:!0,path:"/",children:[Object(j.jsx)("div",{className:"container__info",children:Object(j.jsx)(v,{})}),Object(j.jsx)("div",{className:"container__clock",children:Object(j.jsx)(O,{})})]}),Object(j.jsx)(m.a,{path:"/user",children:Object(j.jsx)(R,{onAddUser:function(e){var t=Object(l.a)({id:Math.trunc(1e4*Math.random())},e),a=Object(o.a)(c);a.push(t),r(a),localStorage.setItem("list-user",JSON.stringify(a))},listUser:c,onDeleteUser:function(e){var t=c.findIndex((function(t){return t.id===e.id}));if(!(t<0)){var a=Object(o.a)(c);a.splice(t,1),r(a),localStorage.setItem("list-user",JSON.stringify(a))}},onUpdateUser:function(e){var t=c.findIndex((function(t){return t.id===e.id}));if(!(t<0)){var a=Object(o.a)(c);a[t]=e,r(a),localStorage.setItem("list-user",JSON.stringify(a))}}})}),Object(j.jsx)(m.a,{path:"/birthdays",children:Object(j.jsx)(E,{listUser:c})}),Object(j.jsx)(m.a,{path:"/cart",children:Object(j.jsx)("div",{className:"cart__header",children:Object(j.jsx)($,{})})}),Object(j.jsx)(m.a,{component:y})]})})}),Object(j.jsx)(u,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.b,{children:Object(j.jsx)(M,{children:Object(j.jsx)(W,{})})})}),document.getElementById("root"))},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){}},[[1575,1,2]]]);
//# sourceMappingURL=main.15f56347.chunk.js.map