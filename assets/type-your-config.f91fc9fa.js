import{u as a,c as t,w as c,_ as p,o as r,a as s,d as l}from"./app.a35a1e04.js";const i=s("div",{class:"prose m-auto"},[s("p",null,[l("Configurations can be quite complex, and sometimes you may want to utilize the great type checking that TypeScript provided. Change your "),s("code",null,"xxx.config.js"),l(" to "),s("code",null,"xxx.config.ts"),l(" is not an ideal solutions as you will need to have a Node.js register involved to transpile it into JavaScript and some tools might not support doing that way. Fortunately, TypeScript also support type check in plain JavaScript file with JSDoc. Here is an example of Webpack config with type checks:")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// webpack.config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// @ts-check")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"import('webpack').Configuration"),s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"config"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/* ... */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E0A569"}},"module"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#E0A569"}},"exports"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"config")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// webpack.config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// @ts-check")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"import('webpack').Configuration"),s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"config"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/* ... */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B58451"}},"module"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B58451"}},"exports"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"config")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,"Prefect. Everything should work and you can already call it a day."),s("p",null,[l("I have never thought about we can do better, until I saw "),s("a",{href:"https://vitejs.dev/config/#config-intellisense",target:"_blank",rel:"noopener"},"Vite\u2019s approach"),l(". In Vite, you can simply have:")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// vite.config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"defineConfig"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'vite'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineConfig"),s("span",{style:{color:"#858585"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"/* ... */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"})")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// vite.config.js")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"defineConfig"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'vite'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineConfig"),s("span",{style:{color:"#8E8F8B"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"/* ... */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"})")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,"No JSDocs, no need to declare a variable first then export it. And since TypeScript will infer the types even you are using plain JavaScript, it works great with both."),s("p",null,[l("How? The "),s("code",null,"defineConfig"),l(" is literally a pass-through, but brings with types:")]),s("pre",null,[s("code",{class:"language-ts"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"UserConfig"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'vite'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"export"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"defineConfig"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"options"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"UserConfig"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"UserConfig"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'vite'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"export"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"defineConfig"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"options"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"UserConfig"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"options")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,[s("code",null,"defineConfig"),l(" exists in the runtime, so it works for JavaScript even if the types get truncated. This is really just some small details of DX, but I would wish more tools could adapt this approach and make the type checking more approachable and simpler.")])],-1),D="Type your config",u="2021-03-24T16:00:00.000Z",g="en",C="5min",h=[{property:"og:title",content:"Type your config"}],k={__name:"type-your-config",setup(y,{expose:n}){const o={title:"Type your config",date:"2021-03-24T16:00:00.000Z",lang:"en",duration:"5min",meta:[{property:"og:title",content:"Type your config"}]};return n({frontmatter:o}),a({title:"Type your config",meta:[{property:"og:title",content:"Type your config"}]}),(f,B)=>{const e=p;return r(),t(e,{frontmatter:o},{default:c(()=>[i]),_:1})}}};export{u as date,k as default,C as duration,g as lang,h as meta,D as title};
