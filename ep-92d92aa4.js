import{j as e,c,m as x,R as u,r as F}from"./ep-d5f8b262.js";import{n as y,k as b,i as q,p as M,q as B,o as D,v as H}from"./ep-42da37c6.js";function T(t){const n=Object.assign({},t);for(let a in n)n[a]===void 0&&delete n[a];return n}var N=y(function(n,a){const{templateAreas:i,gap:s,rowGap:l,columnGap:d,column:p,row:o,autoFlow:g,autoRows:j,templateRows:w,autoColumns:A,templateColumns:R,...O}=n,E={display:"grid",gridTemplateAreas:i,gridGap:s,gridRowGap:l,gridColumnGap:d,gridAutoColumns:A,gridColumn:p,gridRow:o,gridAutoFlow:g,gridAutoRows:j,gridTemplateRows:w,gridTemplateColumns:R};return e.jsx(b.div,{ref:a,__css:E,...O})});N.displayName="Grid";function L(t,n){return Array.isArray(t)?t.map(a=>a===null?null:n(a)):q(t)?Object.keys(t).reduce((a,i)=>(a[i]=n(t[i]),a),{}):t!=null?n(t):null}var r=y(function(n,a){const i=M("Text",n),{className:s,align:l,decoration:d,casing:p,...o}=B(n),g=T({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return e.jsx(b.p,{ref:a,className:D("chakra-text",n.className),...g,...o,__css:i})});r.displayName="Text";function S(t){return L(t,n=>n==="auto"?"auto":`span ${n}/span ${n}`)}var z=y(function(n,a){const{area:i,colSpan:s,colStart:l,colEnd:d,rowEnd:p,rowSpan:o,rowStart:g,...j}=n,w=T({gridArea:i,gridColumn:S(s),gridRow:S(o),gridColumnStart:l,gridColumnEnd:d,gridRowStart:g,gridRowEnd:p});return e.jsx(b.div,{ref:a,__css:w,...j})});z.displayName="GridItem";var h=b("div");h.displayName="Box";var _=y(function(n,a){const{size:i,centerContent:s=!0,...l}=n,d=s?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return e.jsx(h,{ref:a,boxSize:i,__css:{...d,flexShrink:0,flexGrow:0},...l})});_.displayName="Square";var V=y(function(n,a){const{size:i,...s}=n;return e.jsx(_,{size:i,ref:a,borderRadius:"9999px",...s})});V.displayName="Circle";const $=c`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`,W=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{className:$,sequence:["Welcome."],wrapper:"span",cursor:!1,repeat:1,speed:250}),e.jsx(r,{py:"2",children:"My name is Chauhan Harsh, I'm a full-stack developer living in Vadodara, Gujrat, India."}),e.jsx(r,{py:"2",children:"I'm passionate about cutting-edge technology implementation and creating the most challenging and difficult stuff. Programming is a hobby for me, so I'm always up for new challenges."})]}),U=c`
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  & {
    position: relative;
    z-index: 0;
    width: 29%;
    height: 29vh;
    border-radius: 0px;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #00a4c1;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#7a51ac, #7a51ac),
      linear-gradient(#5fff7b, #5fff7b);
    -webkit-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 1rem;
    top: 1rem;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #1a202c;
    border-radius: 5px;
  }
`,K=c`
  @-webkit-keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  & {
    position: relative;
    z-index: 0;
    width: 29%;
    height: 29vh;
    border-radius: 0px;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
    margin-left: auto;
    margin-top: calc(40vh - 2rem);
    display: none;
  }

  @media (min-width: 992px) {
    & {
      display: block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #00a4c1;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#7a51ac, #7a51ac),
      linear-gradient(#5fff7b, #5fff7b);
    -webkit-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: #1a202c;
    border-radius: 5px;
  }
`,Q=c`
  position: absolute;
  top: 0;
  padding: 2rem 2rem 0 2rem;
`,J=({children:t,className:n})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:U}),e.jsx("div",{className:K}),e.jsx("div",{className:Q+" "+n,children:e.jsx(H,{maxW:"container.lg",children:t})})]});var G={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=u.createContext&&u.createContext(G),m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(t){for(var n,a=1,i=arguments.length;a<i;a++){n=arguments[a];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},m.apply(this,arguments)},X=globalThis&&globalThis.__rest||function(t,n){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)n.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(a[i[s]]=t[i[s]]);return a};function P(t){return t&&t.map(function(n,a){return u.createElement(n.tag,m({key:a},n.attr),P(n.child))})}function k(t){return function(n){return u.createElement(Y,m({attr:m({},t.attr)},n),P(t.child))}}function Y(t){var n=function(a){var i=t.attr,s=t.size,l=t.title,d=X(t,["attr","size","title"]),p=s||a.size||"1em",o;return a.className&&(o=a.className),t.className&&(o=(o?o+" ":"")+t.className),u.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,d,{className:o,style:m(m({color:t.color||a.color},a.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&u.createElement("title",null,l),t.children)};return I!==void 0?u.createElement(I.Consumer,null,function(a){return n(a)}):n(G)}function f(t){return k({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)}function C(t){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"}}]})(t)}function Z(t){return k({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"}}]})(t)}const ee=c`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`,te=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{className:ee,sequence:["Gallary App."],wrapper:"span",cursor:!1,repeat:1,speed:250}),e.jsx(r,{py:"2",children:"A simple gallery app built using Graphql, Nextjs, Typeorm, Postgresql and Imgbb as image hosting providers."}),e.jsx(r,{py:"2",children:"In this app, users can register, browse images with pagination, upload images, and add other people's images to their favorites if they like them."}),e.jsxs(h,{display:"flex",gap:"1rem",children:[e.jsxs(r,{as:"a",href:"https://github.com/TheVegeta/gallary-app-next",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(f,{}),"Github Next.js"]}),e.jsxs(r,{as:"a",href:"https://github.com/TheVegeta/gallary-app-api",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(f,{}),"Github Graphql"]}),e.jsxs(r,{as:"a",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(C,{}),"Demo"]})]})]}),ne=c`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`,ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{className:ne,sequence:["Invoice App."],wrapper:"span",cursor:!1,repeat:1,speed:250}),e.jsx(r,{py:"2",children:"Basically, I built this application to challenge myself on designing lavel."}),e.jsx(r,{py:"2",children:"This challenge is provided by the front-end mentor on their website. I have implemented invoice management with inventory and completed this challenge by using Mantine Ui, Styled Component, Formik,formik and zustand."}),e.jsxs(h,{display:"flex",gap:"1rem",children:[e.jsxs(r,{as:"a",href:"https://github.com/TheVegeta/invoice-app",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(f,{}),"Github"]}),e.jsxs(r,{as:"a",href:"https://thevegeta.github.io/invoice-app/",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(C,{}),"Demo"]}),e.jsxs(r,{as:"a",href:"https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(Z,{}),"frontendmentor.io"]})]})]}),ie=c`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`,re=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{className:ie,sequence:["Pixel Lite."],wrapper:"span",cursor:!1,repeat:1,speed:250}),e.jsx(r,{py:"2",children:"Pixel Lite is a desktop application built for compressing various types of image files to reduce and optimize the image. so the user can use it in multiple places without having to worry about running out of space. Typically, images captured with smartphones take 10mb or more of storage space."}),e.jsx(r,{py:"2",children:"This app is built using electron.js, node.js, chakra UI, and Sharp. By building this application, I have learned about inter-process communication (IPC) and how it works internally in electron.js."}),e.jsx(h,{display:"flex",gap:"1rem",children:e.jsxs(r,{as:"a",href:"https://github.com/TheVegeta/pixellite",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(f,{}),"Github"]})})]}),se=c`
  display: block;
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 992px) {
    font-size: 5rem;
  }
`,oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{className:se,sequence:["Pixel Pace."],wrapper:"span",cursor:!1,repeat:1,speed:250}),e.jsx(r,{py:"2",children:"Pixel Pace is a simple car driving game implemented in three.js, Canon, and React to build a smaller demo game in three.js with a physics engine."}),e.jsx(r,{py:"2",children:"The game also includes features like first- or third-person view, collision detection, and physics simulation."}),e.jsxs(h,{display:"flex",gap:"1rem",children:[e.jsxs(r,{as:"a",href:"https://github.com/TheVegeta/pixel-pace",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(f,{}),"Github"]}),e.jsxs(r,{as:"a",href:"https://thevegeta.github.io/pixel-pace/",target:"_blank",fontSize:"1.3rem",py:"2",display:"flex",alignItems:"center",gap:"0.5rem",children:[e.jsx(C,{}),"Demo"]})]})]}),v=c`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
`,de=()=>{const[t,n]=F.useState(0),a=i=>()=>n(i);return e.jsx(J,{className:v,children:e.jsxs(N,{templateColumns:"repeat(12, 1fr)",children:[e.jsxs(z,{colSpan:8,className:v,children:[t===0&&e.jsx(W,{}),t===1&&e.jsx(te,{}),t===2&&e.jsx(re,{}),t===3&&e.jsx(oe,{}),t===4&&e.jsx(ae,{})]}),e.jsxs(z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},colSpan:4,className:v,children:[e.jsx(r,{fontSize:"3rem",children:"Projects"}),e.jsx(r,{mt:"1",_hover:{cursor:"pointer"},sx:{textDecoration:"underline"},onClick:a(1),children:"Gallary App"}),e.jsx(r,{mt:"1",_hover:{cursor:"pointer"},sx:{textDecoration:"underline"},onClick:a(2),children:"Pixel Lite"}),e.jsx(r,{mt:"1",_hover:{cursor:"pointer"},sx:{textDecoration:"underline"},onClick:a(3),children:"Pixel Pace"}),e.jsx(r,{mt:"1",_hover:{cursor:"pointer"},sx:{textDecoration:"underline"},onClick:a(4),children:"Invoice App"})]})]})})};export{de as default};
