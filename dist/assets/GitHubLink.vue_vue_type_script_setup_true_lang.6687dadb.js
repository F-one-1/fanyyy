import{_ as n}from"./logo-github.02ed4f9e.js";import{e as o,o as a,g as s,b as c,a as i,t as r}from"./app.07d57fa0.js";const l={class:"flex-inline items-center"},m=["href"],f=o({__name:"GitHubLink",props:{repo:null,name:null},setup(e){return(p,_)=>{const t=n;return a(),s("span",l,[c(t,{class:"inline-block opacity-70"}),i("a",{class:"opacity-50 ml-1",href:`https://github.com/${e.repo}`,target:"_blank"},r(e.name||(e.repo.startsWith("antfu/")?e.repo.slice(6):e.repo)),9,m)])}}});export{f as _};