webpackJsonp([8],{121:function(e,t,a){function r(e){a(397)}var o=a(107)(a(366),a(413),r,"data-v-e5b63d10",null);e.exports=o.exports},366:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(34),o=a.n(r),s=a(21);t.default={data:function(){return{gender:[{text:"Male"},{text:"Female"},{text:"Other"}],profession:[{text:"Business"},{text:"Self-employed"},{text:"Service"},{text:"Retired"},{text:"Housewife"},{text:"Student"},{text:"Other"}],menu:!1,modal:!1}},methods:{goToPage2:function(){var e=this,t=this.$store.state.membershipForm.membershipFormData;0!=t.fullName.length&&0!=t.gender.length&&0!=t.orgName.length&&0!=t.profession.length&&0!=t.profileDesc.length&&t.profileDesc.length<500&&0!=t.dob.length&&null!=t.bloodGroup&&this.$store.state.db.db.ref("membershipDetail/"+this.$store.state.auth.user.uid).set(this.$store.state.membershipForm.membershipFormData).then(function(t){e.$router.push("/membershipForm/page2")})}},computed:o()({},a.i(s.a)(["membershipFormData"]))}},383:function(e,t,a){t=e.exports=a(231)(!0),t.push([e.i,".bloodGroupText[data-v-e5b63d10]{color:grey}.bloodReqMsg[data-v-e5b63d10]{margin-top:-20px;font-size:11px;color:grey}.footer[data-v-e5b63d10]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:26px;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}","",{version:3,sources:["/Users/shivamsingh/git2/Umang-Foundation/src/components/membershipForm/page1.vue"],names:[],mappings:"AACA,iCACE,UAAW,CACZ,AACD,8BACE,iBAAkB,AAClB,eAAe,AACf,UAAW,CACZ,AACD,yBACI,yBAA0B,AAC1B,sBAAuB,AACvB,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,YAAa,AACb,iDAAiD,AACjD,wCAA0C,CAC7C",file:"page1.vue",sourcesContent:["\n.bloodGroupText[data-v-e5b63d10]{\n  color:grey;\n}\n.bloodReqMsg[data-v-e5b63d10]{\n  margin-top: -20px;\n  font-size:11px;\n  color:grey;\n}\n.footer[data-v-e5b63d10] {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 26px;\n    -webkit-transition:.3s cubic-bezier(.25,.8,.5,1);\n    transition: .3s cubic-bezier(.25,.8,.5,1);\n}\n"],sourceRoot:""}])},397:function(e,t,a){var r=a(383);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(232)("f699d25e",r,!0)},413:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-form",[a("v-layout",{staticClass:"text-xs-center grey--text",attrs:{row:"",wrap:"","justify-space-around":""}},[e._v("\n      Umang Foundation - Membership Form\n      Thanks for your interest in Umang Foundation!!!\n      To know more about Umang Foundation, please visit www.umangfoundation.org\n\n      Please provide us below details as part of Membership Process :-\n    ")]),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-text-field",{attrs:{label:"Full Name"},model:{value:e.membershipFormData.fullName,callback:function(t){e.membershipFormData.fullName=t},expression:"membershipFormData.fullName"}}),e._v(" "),0==e.membershipFormData.fullName.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not entered your Full Name ! (First Name - Middle Name - Last Name)\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-select",{attrs:{items:e.gender,label:"Gender","single-line":"",bottom:""},model:{value:e.membershipFormData.gender,callback:function(t){e.membershipFormData.gender=t},expression:"membershipFormData.gender"}}),e._v(" "),0==e.membershipFormData.gender.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not selected your gender !\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-text-field",{attrs:{label:"Organisation Name"},model:{value:e.membershipFormData.orgName,callback:function(t){e.membershipFormData.orgName=t},expression:"membershipFormData.orgName"}}),e._v(" "),0==e.membershipFormData.orgName.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not entered your organisation name ! (Where do you work/study)\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-select",{attrs:{items:e.profession,label:"Profession","single-line":"",bottom:""},model:{value:e.membershipFormData.profession,callback:function(t){e.membershipFormData.profession=t},expression:"membershipFormData.profession"}}),e._v(" "),0==e.membershipFormData.profession.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not selected your Profession !\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-text-field",{attrs:{label:"Your Profile",textarea:""},model:{value:e.membershipFormData.profileDesc,callback:function(t){e.membershipFormData.profileDesc=t},expression:"membershipFormData.profileDesc"}}),e._v(" "),0==e.membershipFormData.profileDesc.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            Say something about you ! (Max 500 words)\n          ")]):e.membershipFormData.profileDesc.length>500?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You can't enter More than 500 words !\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("v-dialog",{attrs:{persistent:"",lazy:"","full-width":""},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("v-text-field",{attrs:{label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.membershipFormData.dob,callback:function(t){e.membershipFormData.dob=t},expression:"membershipFormData.dob"}}),e._v(" "),a("v-date-picker",{attrs:{scrollable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.save,o=t.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(e){o()}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(e){r()}}},[e._v("Save")])],1)]}}]),model:{value:e.membershipFormData.dob,callback:function(t){e.membershipFormData.dob=t},expression:"membershipFormData.dob"}})],1),e._v(" "),0==e.membershipFormData.dob.length?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not selected your Date of Birth !\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",md10:"",lg10:""}},[a("br"),e._v(" "),a("h5",{staticClass:"bloodGroupText"},[e._v("Blood Group")]),e._v(" "),a("p",{staticClass:"bloodReqMsg"},[e._v("You will be called in case of blood requirement")]),e._v(" "),a("v-radio-group",{attrs:{column:""},model:{value:e.membershipFormData.bloodGroup,callback:function(t){e.membershipFormData.bloodGroup=t},expression:"membershipFormData.bloodGroup"}},[a("v-radio",{attrs:{label:"A+",value:"A+"}}),e._v(" "),a("v-radio",{attrs:{label:"A-",value:"A-"}}),e._v(" "),a("v-radio",{attrs:{label:"B+",value:"B+"}}),e._v(" "),a("v-radio",{attrs:{label:"B-",value:"B-"}}),e._v(" "),a("v-radio",{attrs:{label:"AB+",value:"AB+"}}),e._v(" "),a("v-radio",{attrs:{label:"AB-",value:"AB-"}}),e._v(" "),a("v-radio",{attrs:{label:"O+",value:"O+"}}),e._v(" "),a("v-radio",{attrs:{label:"O-",value:"O-"}}),e._v(" "),a("v-radio",{attrs:{label:"Bombay Blood Group",value:"Bombay Blood Group"}}),e._v(" "),a("v-radio",{attrs:{label:"Dont Know",value:"Dont Know"}}),e._v(" "),a("v-radio",{attrs:{label:"Not Listed above",value:"Not Listed above"}})],1),e._v(" "),null==e.membershipFormData.bloodGroup?a("span",{staticClass:"text-field-required-warning"},[e._v("\n            You have not selected your blood group !\n          ")]):e._e(),e._v(" "),a("span",{staticClass:"junk"},[e._v("j")])],1)],1),e._v(" "),a("v-footer",{staticClass:"pa-1"},[a("div",{staticClass:"blue white--text text-xs-center",staticStyle:{width:"25%"}},[e._v("1/4")])])],1),e._v(" "),a("v-btn",{staticClass:"create-button",attrs:{small:"",grey:"",dark:"",right:"",bottom:"",fixed:""},on:{click:e.goToPage2},slot:"activator"},[e._v("Next\n     ")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.1c6b529aed6dc60ec667.js.map