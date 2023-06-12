"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),y=i,f=l["".concat(c,".").concat(y)]||l[y]||d[y]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={},a="General Concepts",s={unversionedId:"general/concepts",id:"general/concepts",title:"General Concepts",description:"Survey Definition",source:"@site/docs/general/00-concepts.md",sourceDirName:"general",slug:"/general/concepts",permalink:"/survey-handbook/docs/general/concepts",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/general/00-concepts.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Influenzanet Survey System",permalink:"/survey-handbook/docs/intro"},next:{title:"Introduction",permalink:"/survey-handbook/docs/survey-engine/intro"}},c={},p=[{value:"Survey Definition",id:"survey-definition",level:2},{value:"Expression",id:"expression",level:2},{value:"Participant",id:"participant",level:2}],u={toc:p},l="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-concepts"},"General Concepts"),(0,i.kt)("h2",{id:"survey-definition"},"Survey Definition"),(0,i.kt)("p",null,"A Survey Definition is a formal document fully specifiying a survey. The survey definition embeds the survey structure (organization of item and groups), survey components (display or data collection), translations and logic (using Rules Expressions)\nSurvey definition is represented in JSON format"),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("p",null,"An expression is the way survey and study logic are described. An expression can be evaluated to describe a condition (on question, on response data), to trigger operation with side effect (in a survey, for example triggering a question to be shown, or in a study for example to add assign a new survey to be filled to a participant](#participant) or trigger a message sending).\n2 kinds of Expression are used in the system : Survey Expression (evaluated in client side, during the survey running), Study Expression (evaluated in the server side, responding to study event, like submitting a response to a survey by a ",(0,i.kt)("a",{parentName:"p",href:"#participant"},"participant")," )."),(0,i.kt)("h2",{id:"participant"},"Participant"))}d.isMDXComponent=!0}}]);