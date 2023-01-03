import{u as l,c as a,w as i,_ as r,o as c,a as e,d as o}from"./app.eba6dd3d.js";const p=e("div",{class:"prose m-auto"},[e("p",null,[e("div",{class:"table-of-contents"},[e("ul",null,[e("li",null,[e("ul",null,[e("li",null,[e("a",{href:"#tl-dr"},"TL;DR ")])])]),e("li",null,[e("a",{href:"#journey-with-icons"},"Journey with Icons "),e("ul",null,[e("li",null,[e("a",{href:"#purgeicons"},"PurgeIcons ")])])]),e("li",null,[e("a",{href:"#icon-searching"},"Icon Searching "),e("ul",null,[e("li",null,[e("a",{href:"#icones"},"Ic\xF4nes ")])])]),e("li",null,[e("a",{href:"#editor-support"},"Editor Support "),e("ul",null,[e("li",null,[e("a",{href:"#iconify-intellisense-for-vs-code"},"Iconify IntelliSense for VS Code ")]),e("li",null,[e("a",{href:"#journey-is-not-ended"},"Journey is not ended ")]),e("li",null,[e("a",{href:"#continues"},"Continues ")])])])])])]),e("blockquote",null,[e("p",null,[o("Update Sep. 2021: "),e("a",{href:"/posts/journey-with-icons-continues"},"Journey with Icons Continues")])]),e("h3",{id:"tl-dr",tabindex:"-1"},[o("TL;DR "),e("a",{class:"header-anchor",href:"#tl-dr","aria-hidden":"true"},"#")]),e("p",null,"To solve the pain I faced in using icons for the web, I built the following tools to make the DX better."),e("h4",{id:"apps",tabindex:"-1"},[o("Apps "),e("a",{class:"header-anchor",href:"#apps","aria-hidden":"true"},"#")]),e("ul",null,[e("li",null,[e("a",{href:"https://github.com/antfu/icones",target:"_blank",rel:"noopener"},"Ic\xF4nes"),o(" - Icon Explorer with Instant Fuzzy searching")]),e("li",null,[e("a",{href:"https://github.com/antfu/vscode-iconify",target:"_blank",rel:"noopener"},"Iconify IntelliSense"),o(" - VS Code Extension for inline icon previewing")]),e("li",null,[e("a",{href:"https://github.com/antfu/vitesse",target:"_blank",rel:"noopener"},"Vitesse"),o(" - An Opinionated Vite Starter Template")])]),e("h4",{id:"tools",tabindex:"-1"},[o("Tools "),e("a",{class:"header-anchor",href:"#tools","aria-hidden":"true"},"#")]),e("ul",null,[e("li",null,[e("a",{href:"https://github.com/antfu/purge-icons",target:"_blank",rel:"noopener"},"PurgeIcons"),o(" - Bundles icons on demand")]),e("li",null,[e("a",{href:"https://github.com/antfu/svg-packer",target:"_blank",rel:"noopener"},"SVG Packer"),o(" - Pack SVGs to Icon Fonts - In Browser")])]),e("p",null,"Would be nice if you are willing to give them a try. As there are still a lot of works to be done, contributions are greatly welcome :)"),e("h2",{id:"journey-with-icons",tabindex:"-1"},[o("Journey with Icons "),e("a",{class:"header-anchor",href:"#journey-with-icons","aria-hidden":"true"},"#")]),e("p",null,[o("I make websites and small web-based utilities from time to time. Every time I build them, I take care of the design by myself. Amount of the different aspects, icons always play a big role to me. "),e("a",{href:"https://materialdesignicons.com/",target:"_blank",rel:"noopener"},"Material Design Icons"),o(" is the icon set I used most overtime, it has an excellent design foundation from Google and a wide range of icons maintained by the community. And the most important fact is that it has a complete tooling ecosystem - svgs with js, web fonts or even being built-in supported by Vuetify. I could just plugin it in most any kind of apps with very low effort.")]),e("p",null,"However, if you want to try some other icon sets for different looks & feels, you may not be that lucky. Many awesome icon-sets only offer SVGs for download and need to be manually imported to your projects. This could be a laborious and time-consuming work, even just preview them on your apps."),e("p",null,[o("Fortunately, I found "),e("a",{href:"https://iconify.design/",target:"_blank",rel:"noopener"},"Iconify"),o(" - a unified icons framework that offers over 6,000 icons from 80+ popular icon sets with a single CDN entry and on demand loading. The usage would be something like this:")]),e("pre",null,[e("code",{class:"language-html"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!--Import Framework-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://code.iconify.design/1/1.0.7/iconify.min.js"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),o(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!--Import Framework-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://code.iconify.design/1/1.0.7/iconify.min.js"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),e("span",{class:"line"})])])])])]),e("pre",null,[e("code",{class:"language-html"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!--Use an icon from Font Awesome-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"iconify"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"data-icon"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"fa:home"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#858585"}},">")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!--Use another icon from Material Design Icons-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"class"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"iconify"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"data-icon"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"mdi:flask"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"span"),e("span",{style:{color:"#858585"}},">")]),o(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!--Use an icon from Font Awesome-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"iconify"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"data-icon"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"fa:home"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!--Use another icon from Material Design Icons-->")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"class"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"iconify"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"data-icon"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"mdi:flask"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"span"),e("span",{style:{color:"#8E8F8B"}},">")]),o(`
`),e("span",{class:"line"})])])])])]),e("p",null,"It\u2019s done. You get access to all the 6,000 icons with in an unfied syntax. As it\u2019s on-demand, you can switch your icon systems whenever you want without worrying about the setup or the bundle size. It\u2019s also framework independent, which means you can use it in Vue, React, Svelte, plain html or whatever you want."),e("p",null,"This looks so good and the story should end here, however, it does have some limitations. As it\u2019s loaded on demand via web queries with its icon services, there will be a visible delay for icons to be loaded on the first page, especially when users have unstable connections to the Iconify servers. Also, you might have some logic to change icons with user interactions, Iconify will only start to request the icon when you actually rendered the id into the DOM. This causes some flickers on the icon switching which you possibly want to avoid."),e("p",null,"The solution for this is quite straightforward, preloading the icons and the icon rendering could become synchronized. However, loading the entire icon set will impact your bundle size while manually picking what you used could be laborious and make it less flexible."),e("h3",{id:"purgeicons",tabindex:"-1"},[e("a",{href:"https://github.com/antfu/purge-icons",target:"_blank",rel:"noopener"},"PurgeIcons"),o(),e("a",{class:"header-anchor",href:"#purgeicons","aria-hidden":"true"},"#")]),e("p",null,[o("Inspired by "),e("a",{href:"https://purgecss.com/",target:"_blank",rel:"noopener"},"PurgeCSS"),o(", I made the tool called "),e("a",{href:"https://github.com/antfu/purge-icons",target:"_blank",rel:"noopener"},"PurgeIcons"),o(". It statical analyzes your code and generates the "),e("a",{href:"https://docs.iconify.design/sources/bundles/",target:"_blank",rel:"noopener"},"icon bundle"),o(" on-demand.")]),e("p",null,[e("img",{src:"https://user-images.githubusercontent.com/11247099/89781398-ce625a80-db45-11ea-86bf-d50471c526b7.gif",alt:""})]),e("p",null,[o("Along with "),e("a",{href:"https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons/README.md",target:"_blank",rel:"noopener"},"the Vite plugin"),o(", you can simplify import this inline in your app\u2019s entry, and the icons you use will be bundled into your code and load them synchronously.")]),e("pre",null,[e("code",{class:"language-ts"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"createApp"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'vue'")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"App"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'./App.vue'")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@purge-icons/generated'"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// <-- This")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"createApp"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"App"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},"mount"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'#app'"),e("span",{style:{color:"#858585"}},")")]),o(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"createApp"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'vue'")]),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"App"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'./App.vue'")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@purge-icons/generated'"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// <-- This")]),o(`
`),e("span",{class:"line"}),o(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"createApp"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"App"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#6C7834"}},"mount"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'#app'"),e("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),e("span",{class:"line"})])])])])]),e("p",null,[o("It also provides a CLI tool and plugins for "),e("a",{href:"https://github.com/antfu/purge-icons/tree/main/packages/purge-icons-webpack-plugin",target:"_blank",rel:"noopener"},"Webpack"),o(" and "),e("a",{href:"https://github.com/antfu/purge-icons/tree/main/packages/rollup-plugin-purge-icons",target:"_blank",rel:"noopener"},"Rollup"),o(". More frameworks support like Vue CLI, Nuxt, Gridsome or even plain html are coming soon.")]),e("p",null,[o("With it, the tooling is kinda perfect to me now - I can use any icons without any compromise in the runtime. If you want to give it a try, I also made a pre-configured start template "),e("a",{href:"https://github.com/antfu/vitesse",target:"_blank",rel:"noopener"},"\u{1F3D5} Vitesse"),o(" with PurgeIcons built-in.")]),e("h2",{id:"icon-searching",tabindex:"-1"},[o("Icon Searching "),e("a",{class:"header-anchor",href:"#icon-searching","aria-hidden":"true"},"#")]),e("p",null,"The tooling gets solved, here comes to my another pain for a long time - searching for icons."),e("p",null,[o("I live in China, my network conditions are usually quite unstable for oversee connections. It often took me around 30 seconds to get the searching in "),e("a",{href:"https://materialdesignicons.com/",target:"_blank",rel:"noopener"},"Material Design Icons"),o(" or "),e("a",{href:"https://iconify.design/",target:"_blank",rel:"noopener"},"Iconify"),o(". And for most of the time, you won\u2019t get the perfect icons on your first try. Repeating searching for multiple times with a huge delay is just killing me.")]),e("p",null,"And so, I finally get some time and motivation to work on making one my own recently. Also considering this being a chance for me to try Vue 3 + Vite and to learn Tailwind CSS."),e("h3",{id:"icones",tabindex:"-1"},[o("Ic\xF4nes "),e("a",{class:"header-anchor",href:"#icones","aria-hidden":"true"},"#")]),e("p",null,"By the power of Iconify, I can only ship with the icon IDs and leave the icon loading task to Iconify. In this way, searching could be done locally - instantly."),e("p",null,[e("img",{src:"https://github.com/antfu/icones/raw/main/screenshots/1.png",alt:""})]),e("p",null,[e("img",{src:"https://github.com/antfu/icones/raw/main/screenshots/2.png",alt:""})]),e("p",null,"With Iconify\u2019s data collection, it can get access to all the 80+ icon sets within a single place."),e("p",null,[o("I also made a small utility called "),e("a",{href:"https://github.com/antfu/svg-packer",target:"_blank",rel:"noopener"},"SVG Packer"),o(" for Ic\xF4nes. With it, you can select the icons you want and pack them into ready to used icon fonts.")]),e("p",null,[e("img",{src:"https://github.com/antfu/icones/raw/main/screenshots/5.png",alt:""})]),e("p",null,[e("img",{src:"https://github.com/antfu/icones/raw/main/screenshots/3.png",alt:""})]),e("blockquote",null,[e("p",null,"Tips: You can also copy the icons as Vue or React components")]),e("p",null,"Try it out if you haven\u2019t. A fully-offline electron version is also coming soon."),e("h2",{id:"editor-support",tabindex:"-1"},[o("Editor Support "),e("a",{class:"header-anchor",href:"#editor-support","aria-hidden":"true"},"#")]),e("p",null,"Browsing and searching for icons are good to me now. Now comes to the editor integration. It\u2019s actually kinda hard to know what the icons look like from their IDs. Auto-completion for IDs is also a good feature I would love to have."),e("h3",{id:"iconify-intellisense-for-vs-code",tabindex:"-1"},[e("a",{href:"https://github.com/antfu/vscode-iconify",target:"_blank",rel:"noopener"},"Iconify IntelliSense"),o(" for VS Code "),e("a",{class:"header-anchor",href:"#iconify-intellisense-for-vs-code","aria-hidden":"true"},"#")]),e("p",null,[o("With a lot of inspirations from the "),e("a",{href:"https://github.com/lukas-tr/vscode-materialdesignicons-intellisense",target:"_blank",rel:"noopener"},"VS Code extension for MDI"),o(", Iconify IntelliSense was born.")]),e("p",null,[e("img",{src:"https://github.com/antfu/vscode-iconify/raw/main/screenshots/preview-1.png",alt:""})]),e("p",null,[o("Loading icon data and cache them on demand, it encoded svgs into data urls to be displayed as images in VS Code. With the "),e("a",{href:"https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions",target:"_blank",rel:"noopener"},"TextEditorDecoration"),o(" API, I achieve the feature to replace the icon IDs with the icon image itself in place. The icons will become visible and editable when you move the cursor around them.")]),e("p",null,[o("Auto-completion with icon preview is also available. By typing the icon set id and the following delimiter colon "),e("code",null,":"),o(", a list of icons in the set will popup and you may continue type to do a simple search.")]),e("h3",{id:"journey-is-not-ended",tabindex:"-1"},[o("Journey is not ended "),e("a",{class:"header-anchor",href:"#journey-is-not-ended","aria-hidden":"true"},"#")]),e("p",null,"These apps and tools solved my long pain with icons. I can focus on bringing ideas to life much more efficiently. I will call it a page for no. Howeverr, the journey is not yet ended. I am still passionate about exploring how the tooling for icons could go. And also, keep polishing these tools to make them easier to use and integrate. I wish they could benefit more developers and designers and make site building more simple and pleasant."),e("p",null,"Glad if you found them useful to you as well. And thanks for reading XD."),e("h3",{id:"continues",tabindex:"-1"},[o("Continues "),e("a",{class:"header-anchor",href:"#continues","aria-hidden":"true"},"#")]),e("p",null,"Enjoy the journey and the tools? Here is how it continues in Sep. 2021:"),e("p",null,[e("a",{href:"/posts/journey-with-icons-continues"},"Journey with Icons Continues")])],-1),g="Journey with Icons",m="To solve the pain I faced in using icons for the web, I built several tools to make the DX better.",b="2020-08-16T16:00:00.000Z",w="en",k="7min",I=[{property:"og:title",content:"Journey with Icons"},{property:"og:description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."},{name:"description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."}],A={__name:"journey-with-icons",setup(h,{expose:s}){const n={title:"Journey with Icons",description:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better.",date:"2020-08-16T16:00:00.000Z",lang:"en",duration:"7min",meta:[{property:"og:title",content:"Journey with Icons"},{property:"og:description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."},{name:"description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."}]};return s({frontmatter:n}),l({title:"Journey with Icons",meta:[{property:"og:title",content:"Journey with Icons"},{property:"og:description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."},{name:"description",content:"To solve the pain I faced in using icons for the web, I built several tools to make the DX better."}]}),(d,y)=>{const t=r;return c(),a(t,{frontmatter:n},{default:i(()=>[p]),_:1})}}};export{b as date,A as default,m as description,k as duration,w as lang,I as meta,g as title};
