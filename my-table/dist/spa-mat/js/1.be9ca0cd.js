(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"5KbQ":function(e,r,t){"use strict";var i=t("e6BW"),s=t.n(i);s.a},e6BW:function(e,r,t){},"kmF/":function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("q-page",{staticClass:"flex flex-center"},[t("myTable")],1)},s=[];i._withStripped=!0;var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{width:"100%"}},[t("q-table",{ref:"table",attrs:{data:e.serverData,columns:e.columns,"row-key":"id",pagination:e.serverPagination,loading:e.loading},on:{"update:pagination":function(r){e.serverPagination=r}}}),t("q-scroll-area",{ref:"scrollArea",style:"width: 100%; height: "+e.rowHeight*e.serverPagination.rowsPerPage+"px;"},[e._l(e.freezeRows,function(r,i){return t("div",{key:i+"-freezeCell",staticClass:"q-row",style:"height:"+e.rowHeight+"px; display: flex; position: fixed; width: 100%; margin-top: "+i*e.rowHeight+"px; background-color: #e6e6e6;"},e._l(e.columns,function(r){return t("div",{key:r.name+i,staticClass:"q-cell",style:"width:"+r.width+"; background-color: #e6e6e6;"},[e._v("\n        "+e._s(e.collectedData[i][r.name])+"\n      ")])}))}),t("div",{ref:"virtualTop",style:"height:"+e.getSpaceTop()+"px;"}),e._l(e.serverData,function(r,i){return t("div",{key:i,staticClass:"q-row",style:"height:"+e.rowHeight+"px; display: flex;"},e._l(e.columns,function(s){return t("div",{key:s.name+i,staticClass:"q-cell",style:"width:"+s.width+"; background-color: #ffffff;"},[e._v("\n        "+e._s(r[s.name])+"\n      ")])}))}),t("div",{ref:"virtualBottom",style:"height:"+e.getSpaceBottom()+"px;"}),t("q-scroll-observable",{on:{scroll:e.scrolling}})],2)],1)},o=[];a._withStripped=!0;var n=t("vDqi"),l=t.n(n),c={data:function(){return{loading:!1,requestSource:null,serverPagination:{page:1,rowsPerPage:10,rowsNumber:1e3,rows:20},rowHeight:40,serverData:[],collectedData:[],currentPage:0,scrollOffset:0,scrollUnit:1,scrollUnitOffset:0,freezeRows:2,requestAPI:null,columns:[{name:"id",required:!0,label:"Id",align:"left",field:"email",sortable:!1,width:"15%"},{name:"email",label:"E-Mail",field:"email",sortable:!1,width:"35%",align:"left"},{name:"name",label:"Name",field:"name",sortable:!1,align:"left",width:"25%"},{name:"phone",label:"Phone",field:"phone",sortable:!1,align:"left",width:"25%"}]}},methods:{request:function(e){var r=this,t=e.pagination;this.loading=!0;var i=l.a.CancelToken,s=i.source();console.log("request");var a=l.a.get("/api/?row_per_page=".concat(t.rowsPerPage,"&page=").concat(t.page,"&rows=").concat(t.rows),{cancelToken:s.token}).then(function(e){for(var i=e.data,s=0;s<i.length;s++){var a=t.rowsPerPage*(t.page-1)+s;r.collectedData[a]["id"]||(r.collectedData[a]=i[s])}r.renderData(),r.loading=!1}).catch(function(e){console.log("error",e),r.loading=!1,r.renderData()});return{promise:a,source:s}},getSpaceTop:function(){return this.currentPage*this.rowHeight*this.serverPagination.rowsPerPage},getSpaceBottom:function(){return(this.serverPagination.rowsNumber-2*this.serverPagination.rowsPerPage)*this.rowHeight-this.currentPage*this.rowHeight*this.serverPagination.rowsPerPage},renderData:function(){for(var e=this.currentPage*this.serverPagination.rowsPerPage,r=0;r<2*this.serverPagination.rowsPerPage;r++)this.serverData.length<2*this.serverPagination.rowsPerPage?this.serverData.push(JSON.parse(JSON.stringify(this.collectedData[e+r]))):this.serverData[r]=JSON.parse(JSON.stringify(this.collectedData[e+r]));for(var t=this.$refs.table.$el.querySelectorAll("th"),i=0;i<this.columns.length;i++)t[i].style.width=this.columns[i].width},scrolling:function(e){var r=this.rowHeight*this.serverPagination.rowsNumber;if(e.position&&!(e.position>=r)){this.scrollUnit=1*r/this.serverPagination.rowsNumber,this.scrollUnitOffset=1e3*e.position%(1e3*this.scrollUnit)/1e3;var t=e.position%(this.scrollUnit*this.serverPagination.rowsPerPage),i=parseInt(e.position/r*(1*this.serverPagination.rowsNumber/this.serverPagination.rowsPerPage));this.scrollOffset==t&&i-this.currentPage==1?(this.currentPage=i-1,this.$refs.scrollArea.setScrollPosition(t+this.currentPage*this.scrollUnit*this.serverPagination.rowsPerPage)):this.currentPage=i,this.scrollOffset=t,console.log(" curront page ",this.currentPage),this.isEnableScroll=!1;var s=this.currentPage*this.serverPagination.rowsPerPage,a=!1;s<this.serverPagination.rowsNumber&&!this.collectedData[s]["id"]&&(a=!0,this.requestSource&&this.requestSource.cancel(),this.requestAPI=this.request({pagination:{page:this.currentPage+1,rowsPerPage:this.serverPagination.rowsPerPage,rowsNumber:this.serverPagination.rowsNumber,rows:2*this.serverPagination.rowsPerPage}}),this.requestSource=this.requestAPI.source),!a&&s+this.serverPagination.rowsPerPage<this.serverPagination.rowsNumber&&!this.collectedData[s+this.serverPagination.rowsPerPage]["id"]&&(console.log(s+this.serverPagination.rowsPerPage,"------"),a=!0,this.requestSource&&this.requestSource.cancel(),this.requestAPI=this.request({pagination:{page:this.currentPage+2,rowsPerPage:this.serverPagination.rowsPerPage,rowsNumber:this.serverPagination.rowsNumber,rows:2*this.serverPagination.rowsPerPage}}),this.requestSource=this.requestAPI.source),a||this.renderData()}}},mounted:function(){this.collectedData=[];for(var e=0;e<this.serverPagination.rowsNumber+2*this.serverPagination.rowsPerPage;e++)this.collectedData.push({id:null,email:"",name:"",phone:""});var r=this.request({pagination:this.serverPagination});this.requestSource=r.source}},h=c,g=(t("roHL"),t("KHd+")),u=Object(g["a"])(h,a,o,!1,null,null,null),P=u.exports,w={name:"PageIndex",components:{myTable:P}},d=w,v=(t("5KbQ"),Object(g["a"])(d,i,s,!1,null,null,null));r["default"]=v.exports},rSw5:function(e,r,t){},roHL:function(e,r,t){"use strict";var i=t("rSw5"),s=t.n(i);s.a}}]);