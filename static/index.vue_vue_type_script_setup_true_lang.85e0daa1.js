import{a as e,v as a,c as t,o as n,f as l,w as d,e as o,b as s,k as m,u as i,F as r,y as u,Z as c,h as f,t as p}from"./index.b52d9af6.js";const _=[{title:"默认",name:"normal"},{title:"黑暗",name:"dark"}],b=e({__name:"index",setup(e){const b=a(),k=t((()=>b.activeThemeName)),w=e=>{b.setTheme(e)};return(e,a)=>{const t=f("el-icon"),b=f("el-tooltip"),h=f("el-dropdown-item"),v=f("el-dropdown-menu"),x=f("el-dropdown");return n(),l(x,{trigger:"click",onCommand:w},{dropdown:d((()=>[o(v,null,{default:d((()=>[(n(!0),s(r,null,m(i(_),((e,a)=>(n(),l(h,{key:a,disabled:i(k)===e.name,command:e.name},{default:d((()=>[u("span",null,p(e.title),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:d((()=>[u("div",null,[o(b,{effect:"dark",content:"主题模式",placement:"bottom"},{default:d((()=>[o(t,{size:20},{default:d((()=>[o(i(c))])),_:1})])),_:1})])])),_:1})}}});export{b as _};