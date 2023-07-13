"use strict";(self.webpackChunkifn_survey_handbook=self.webpackChunkifn_survey_handbook||[]).push([[536],{7831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>I,default:()=>D,frontMatter:()=>C,metadata:()=>b,toc:()=>S});var o=t(7462),s=t(7294),r=t(3905),i=t(2389),a=t(5409),p=t(4866),l=t(5162),u=t(614);const m=e=>new Map([["en",e]]),c=e=>"function"==typeof e?e():e,d=e=>s.createElement(a.dP,{renderItem:c(e.item),responsePrefill:e.prefill,responseChanged:e=>console.log(e),showInvalid:!1,languageCode:"en",invalidWarning:"Please check your response",showKeys:!1}),y=/.*\/\/\s*--snippet--\s(\s*return\s*)?(.*)\/\/\s*--end--.*/gms,v=e=>{var n=void 0;e.defaultViewer&&(e.defaultViewer.item=n=c(e.defaultViewer.item));const t=e.viewer??s.createElement(d,e.defaultViewer);return n||(n=e.json),s.createElement(p.Z,null,s.createElement(l.Z,{value:"item",label:"Component"},t),s.createElement(l.Z,{value:"code",label:"Code (case-editor-tools)"},s.createElement(u.Z,{language:"jsx"},e.code.replace(y,"$2"))),n?s.createElement(l.Z,{value:"json",label:"JSON"},s.createElement(u.Z,{language:"json"},JSON.stringify(n,void 0,3))):void 0)};var g=t(4453);const f={item:()=>g.Cy.singleChoice({itemKey:"t1",parentKey:"test",questionText:m("Single Choice Example "),responseOptions:[{key:"1",content:m("My Option"),role:"option"}]}),prefills:{key:"rg",items:[{key:"scg",items:[{key:"t1"}]}]}},h={item:()=>g.Cy.dateInput({itemKey:"q1",parentKey:"test",questionText:m("A date question"),dateInputMode:"YMD"})},k=e=>(0,i.Z)()?(t(5577),(e=>{switch(e){case"singleChoice":return s.createElement(v,{defaultViewer:f,code:"import { SurveyItems } from \"case-editor-tools/surveys\";\nimport { _T, DefaultItemViewer } from \"./utils\";\nimport React from \"react\";\n\nexport const SingleChoiceItem = () => {\n  // --snippet--\n  return SurveyItems.singleChoice({\n    itemKey:'t1',\n    parentKey:'test',\n    questionText: _T(\"Single Choice Example \"),\n    responseOptions:[\n        {'key': '1', content: _T(\"My Option\"), role: 'option' },\n    ]\n  });\n  // --end--\n}\n\nexport const SingleChoiceViewer = {\n    item: SingleChoiceItem,\n    prefills:{\n            key: 'rg',\n            items: [\n              { key: 'scg', items: [{ key: 't1' }] }\n            ]\n          }\n}\n \n"});case"dateInput":return s.createElement(v,{defaultViewer:h,code:"import React from \"react\";\n//import { en } from 'date-fns/locale';\nimport { SurveyItems } from \"case-editor-tools/surveys\";\nimport { _T } from \"./utils\";\n\nexport const DateInput = () => {\n  // --snippet--\n  return SurveyItems.dateInput({\n    itemKey: 'q1',\n    parentKey: 'test',\n    questionText:_T(\"A date question\"),\n    dateInputMode: 'YMD',\n  });\n  //--end--\n}\n\nexport const DateInputViewer = {\n  item: DateInput,\n}\n\n\n"});default:return s.createElement("span",null,"Unknown component ",e)}})(e.name)):"Only online",C={sidebar_label:"Response Components"},I="Survey Item Response Components",b={unversionedId:"survey-engine/components/response",id:"survey-engine/components/response",title:"Survey Item Response Components",description:"Date Input",source:"@site/docs/survey-engine/components/03-response.mdx",sourceDirName:"survey-engine/components",slug:"/survey-engine/components/response",permalink:"/survey-handbook/docs/survey-engine/components/response",draft:!1,editUrl:"https://github.com/influenzanet/survey-handbook/docs/survey-engine/components/03-response.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Response Components"},sidebar:"tutorialSidebar",previous:{title:"Display Components",permalink:"/survey-handbook/docs/survey-engine/components/display"},next:{title:"Expressions",permalink:"/survey-handbook/docs/survey-engine/expressions"}},x={},S=[{value:"Date Input",id:"date-input",level:3},{value:"Single Choice Group",id:"single-choice-group",level:3}],w={toc:S},E="wrapper";function D(e){let{components:n,...t}=e;return(0,r.kt)(E,(0,o.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"survey-item-response-components"},"Survey Item Response Components"),(0,r.kt)("h3",{id:"date-input"},"Date Input"),(0,r.kt)(k,{name:"dateInput",mdxType:"SurveyComponent"}),(0,r.kt)("h3",{id:"single-choice-group"},"Single Choice Group"),(0,r.kt)(k,{name:"singleChoice",mdxType:"SurveyComponent"}))}D.isMDXComponent=!0}}]);