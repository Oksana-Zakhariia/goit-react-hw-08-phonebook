"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[864],{8864:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});r(2791);var t,o,i,u,a,c,l,s,d=r(5705),m=r(6727),h=r(168),f=r(6444),x=(0,f.ZP)(d.gN)(t||(t=(0,h.Z)(["\n  padding: 10px;\n  box-shadow: ",";\n  border-radius: 10px;\n  border: 2px solid ",";\n  outline: none;\n  margin-left: ",";\n"])),(function(n){return n.theme.shadow}),(function(n){return n.theme.colors.mainBorderColor}),(function(n){return n.theme.spacing.large})),p=f.ZP.label(o||(o=(0,h.Z)(["\n  color: ",";\n  font-size: ",";\n  margin-right: auto;\n  margin-left: auto;\n  margin-right: ",";\n"])),(function(n){return n.theme.colors.greyText}),(function(n){return n.theme.fonts.largeFontSize}),(function(n){return n.theme.spacing.large})),g=f.ZP.button(i||(i=(0,h.Z)(["\n  border: 2px solid ",";\n"])),(function(n){return n.theme.colors.mainBorderColor})),b=r(9434),j=function(n){return n.contacts.items},w=function(n){return n.filter.filter},v=r(3634),Z=r(184),C=m.Ry().shape({name:m.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:m.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),y=function(){var n=(0,b.I0)(),e=(0,b.v9)(j);return(0,Z.jsx)("div",{children:(0,Z.jsx)(d.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(r,t){var o=t.resetForm,i=r.name,u=r.number;console.log(r),e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?alert("contact with name ".concat(i," is already in contacts")):e.find((function(n){return n.number===u}))?alert("contact with number ".concat(u," is already in contacts")):(n((0,v.uK)(r)),o())},children:function(n){var e=n.errors,r=n.touched;return(0,Z.jsxs)(d.l0,{children:[(0,Z.jsxs)(p,{htmlFor:"name",children:["Name",(0,Z.jsx)(x,{name:"name"}),e.name&&r.name?(0,Z.jsx)("div",{children:e.name}):null]}),(0,Z.jsxs)(p,{htmlFor:"number",children:["Number",(0,Z.jsx)(x,{name:"number"}),e.number&&r.number?(0,Z.jsx)("div",{children:e.number}):null]}),(0,Z.jsx)(g,{type:"submit",children:"Submit"})]})}})})},k=f.ZP.div(u||(u=(0,h.Z)(["\n  border-radius: 10px;\n  border: 2px solid ",";\n  color: ",";\n  width: 800px;\n  padding: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.mainBorderColor}),(function(n){return n.theme.colors.greyText}),(function(n){return n.theme.spacing.small}),(function(n){return n.theme.shadow}),(function(n){return n.theme.spacing.small})),P=f.ZP.button(a||(a=(0,h.Z)(["\n  width: 100px;\n  padding: 5px;\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n"])),(function(n){return n.theme.colors.mainBorderColor}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.mainBorderColor})),F=function(n){var e=n.contact,r=(0,b.I0)();return(0,Z.jsxs)(k,{id:e.id,children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("span",{children:[e.name," "]}),(0,Z.jsx)("span",{children:e.number})]}),(0,Z.jsx)(P,{onClick:function(){return r((0,v.GK)(e.id))},children:"Delete"})]})},S=f.ZP.ul(c||(c=(0,h.Z)(["\n  list-style: none;\n  padding: 0px;\n"]))),T=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,b.v9)(j),(0,b.v9)(w));return(0,Z.jsx)(S,{children:n.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(F,{contact:n})},n.id)}))})},B=f.ZP.label(l||(l=(0,h.Z)(["\n  color: ",";\n  font-size: ",";\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  gap: ",";\n  align-items: center;\n"])),(function(n){return n.theme.colors.greyText}),(function(n){return n.theme.fonts.largeFontSize}),(function(n){return n.theme.spacing.small})),L=f.ZP.input(s||(s=(0,h.Z)(["\n  padding: 10px;\n  box-shadow: ",";\n  border-radius: 10px;\n  border: 2px solid ",";\n  outline: none;\n"])),(function(n){return n.theme.shadow}),(function(n){return n.theme.colors.mainBorderColor})),_=r(4808),q=function(){var n=(0,b.I0)(),e=(0,b.v9)(w);console.log(e);return(0,Z.jsxs)(B,{htmlFor:"filter",children:["Find contacts by name",(0,Z.jsx)(L,{name:"filter",type:"text",onChange:function(e){return n((0,_.p)(e.target.value))}})]})};function z(){return(0,Z.jsxs)("div",{children:["Contacts",(0,Z.jsx)(y,{}),(0,Z.jsx)(q,{}),(0,Z.jsx)(T,{})]})}}}]);
//# sourceMappingURL=864.58e5fb40.chunk.js.map