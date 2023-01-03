import{u as i,c as a,w as s,_ as l,o as u,a as e,d as t}from"./app.eba6dd3d.js";import{_ as h,a as d,b as c,c as p}from"./github-inbox-dark.54b5efd8.js";const m=e("div",{class:"prose m-auto"},[e("p",null,[e("div",{class:"table-of-contents"},[e("ul",null,[e("li",null,[e("a",{href:"#open-source-software-is-served-as-is"},'Open Source Software is served "as-is" ')]),e("li",null,[e("a",{href:"#maintainance-takes-effort-a-lot"},"Maintainance takes effort, a lot ")]),e("li",null,[e("a",{href:"#why-reproduction"},"Why Reproduction ")]),e("li",null,[e("a",{href:"#how-to-create-a-minimal-reproduction"},"How to Create a Minimal Reproduction ")]),e("li",null,[e("a",{href:"#wrapping-up"},"Wrapping Up ")])])])]),e("blockquote",null,[e("p",null,[e("a",{href:"/posts/why-reproductions-are-required-zh"},"\u4E2D\u6587 Chinese Version")])]),e("p",null,"If you have ever browsed the issue lists in my repos or created one, you might sometimes see I reply with the following comment and then close the issue:"),e("figure",null,[e("img",{src:h,"img-light":"","rounded-lg":""}),e("img",{src:d,"img-dark":"","rounded-lg":""}),e("figcaption",null,[t("We temporarily close this due to the lack of enough information. Please provide a "),e("a",{href:"https://stackoverflow.com/help/minimal-reproducible-example",target:"_blank"},"minimal reproduction"),t(" to reopen the issue. Thanks.")])]),e("p",null,"I\u2019d first say sorry if it ever makes you feel unpleasant. In this post, let me try to explain the reason behind it."),e("h2",{id:"open-source-software-is-served-as-is",tabindex:"-1"},[t('Open Source Software is served "as-is" '),e("a",{class:"header-anchor",href:"#open-source-software-is-served-as-is","aria-hidden":"true"},"#")]),e("p",null,"First of all, let\u2019s reach a consensus about Open Source Software(OSS). If you look into the MIT License, one of the most popular licenses, you will see it contains the following statement:"),e("blockquote",null,[e("p",null,'The software is provided "AS IS", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.')]),e("p",null,[t('"As is" stands that you are free to use the code, fork it, or modify it as you want with the '),e("strong",null,"current state"),t(". Meaning the authors are not responsible to fix or improve anything you might have now or in the future. Since it\u2019s free and open source, the authors or maintainers gain nothing regardless if you use it or not. There is no such thing as 24-7 customer service. Theoretically, you as a user of open source code, should be responsible to the code you use.")]),e("p",null,[t("Yeah, that sounds scary. But luckily, things are not that bad in real practice. In many open source projects, we build trust between users and maintainers. Users contribute to projects by reporting issues they faced, or sharing solutions via discussions and pull requests. Maintainers spend their time reviewing, making decisions, managing releases, and doing distributions. Both users and maintainers work "),e("strong",null,"voluntarily"),t(" toward the same wish - to make the software better, for everyone.")]),e("h2",{id:"maintainance-takes-effort-a-lot",tabindex:"-1"},[t("Maintainance takes effort, a lot "),e("a",{class:"header-anchor",href:"#maintainance-takes-effort-a-lot","aria-hidden":"true"},"#")]),e("p",null,'Software once written, is never finished. Maintainance plays a crucial role to keep a project "alive", getting bug or security fixes on time, and being sustainable in the long run. Things like triaging issues, reviewing PRs, and discussions could take a lot of effort from maintainers. While in open source projects, the ratios of user-to-maintainer are commonly unbalanced. Many popular projects might only have one or two maintainers behind the scene. As a project grows and gains more users, the number of tasks required to maintain the project may easily go beyond one\u2019s capacity.'),e("figure",null,[e("img",{src:c,"img-light":"","rounded-lg":""}),e("img",{src:p,"img-dark":"","rounded-lg":""}),e("figcaption",null,"My inbox of GitHub notifications")]),e("h2",{id:"why-reproduction",tabindex:"-1"},[t("Why Reproduction "),e("a",{class:"header-anchor",href:"#why-reproduction","aria-hidden":"true"},"#")]),e("p",null,[t("A good "),e("a",{href:"https://stackoverflow.com/help/minimal-reproducible-example",target:"_blank",rel:"noopener"},"minimal reproduction"),t(' of a potential issue could greatly help maintainers to identify the root cause and land the fix quickly. Without a minimal reproduction, merely from the issue description or a screenshot, maintainers won\u2019t even know whether it\u2019s a real issue of the project or it\u2019s caused by some other factors. To identify that, maintainers might need to spend extra time to find a reproduction themselves, or dive into the giant project people shared as a "non-minimal reproduction". Hours might be spent, but what if it turns out a non-issue or unreproducible? What if there are hundreds of such issues you need to deal with?')]),e("p",null,[t("In my opinion, "),e("strong",null,"asking for minimal reproduction is asking for equity of the effort spent"),t(". If everyone could take some time to create a minimal reproduction before opening issues, it would save maintainers hundreds of hours (or even help themselves to find user-land solutions/mistakes, then they don\u2019t even need to create the issue). A well-investigated and well-explained issue would also make maintainers more willing to spend their time and effort in return.")]),e("h2",{id:"how-to-create-a-minimal-reproduction",tabindex:"-1"},[t("How to Create a Minimal Reproduction "),e("a",{class:"header-anchor",href:"#how-to-create-a-minimal-reproduction","aria-hidden":"true"},"#")]),e("blockquote",null,[e("p",null,[t("This section is ported from "),e("a",{href:"https://gist.github.com/Rich-Harris/88c5fc2ac6dc941b22e7996af05d70ff",target:"_blank",rel:"noopener"},[e("em",null,"Please include a repro")]),t(" by "),e("a",{href:"https://github.com/Rich-Harris",target:"_blank",rel:"noopener"},"Rich Harris"),t(". Also recommand watching "),e("a",{href:"https://youtu.be/dB_YjuAMH3o?t=1376",target:"_blank",rel:"noopener"},"a more detailed explanation by Rich Harris"),t(".")])]),e("p",null,[t("In some cases, there will be a project-specific way to demonstrate problems \u2013 for example, "),e("a",{href:"http://rollupjs.org",target:"_blank",rel:"noopener"},"Rollup"),t(", "),e("a",{href:"https://svelte.technology/repl",target:"_blank",rel:"noopener"},"Svelte"),t(" and "),e("a",{href:"https://sfc.vuejs.org/",target:"_blank",rel:"noopener"},"Vue"),t(" all have dedicated REPLs. Use them!")]),e("p",null,"Often, it\u2019s not possible to illustrate the problem with a REPL. Here\u2019s what you do:"),e("ol",null,[e("li",null,"Create a sample repo on GitHub or Stackblitz (or wherever)"),e("li",null,[t("Demonstrate the problem, and nothing but the problem. Whittle it down to the "),e("em",null,"bare minimum"),t(" of code that reliably demonstrates the issue. Get rid of any dependencies that aren\u2019t "),e("em",null,"directly"),t(" related to the problem.")]),e("li",null,[t("Install all your dependencies to "),e("code",null,"package.json"),t(". If the maintainer can\u2019t clone the repo and do "),e("code",null,"npm install && npm run build"),t(" (or similar \u2013 see point 4) to see the problem, because the maintainer needs some globally installed CLI tool or whatever, that would make it harder to get to the bottom of the issue.")]),e("li",null,[t("Include instructions in the repo, along with a description of the expected and actual behaviour. Obviously the issue should include information about the bug as well, but it\u2019s really helpful if "),e("code",null,"README.md"),t(" includes that information, plus a link back to the issue. If there are any instructions beyond "),e("code",null,"npm install && npm run build"),t(", they should go here.")])]),e("h2",{id:"wrapping-up",tabindex:"-1"},[t("Wrapping Up "),e("a",{class:"header-anchor",href:"#wrapping-up","aria-hidden":"true"},"#")]),e("p",null,"As a maintainer, I appreciate all the issues and pull requests opened. And I believe it\u2019s true that some of the issues we closed without reproduction might still have real bugs that need to be fixed. But to not be overwhelmed by the notifications, maintainers need to set the priorities for handling the tasks. Keeping the number of issues in a manageable manner is one of the ways to keep the project healthy in the long run."),e("p",null,"I believe open source is about building great stuff together, not solely on maintainers\u2019 shoulders. Wish we could make a better and healthier community together. Thanks for reading :)")],-1),v="Why Reproductions are Required",_="2022-05-30T16:00:00.000Z",R="en",x="9min",M="My thoughts on why reproductions are important in open source.",I=[{property:"og:title",content:"Why Reproductions are Required"},{property:"og:description",content:"My thoughts on why reproductions are important in open source."},{name:"description",content:"My thoughts on why reproductions are important in open source."}],q={__name:"why-reproductions-are-required",setup(f,{expose:n}){const o={title:"Why Reproductions are Required",date:"2022-05-30T16:00:00.000Z",lang:"en",duration:"9min",description:"My thoughts on why reproductions are important in open source.",meta:[{property:"og:title",content:"Why Reproductions are Required"},{property:"og:description",content:"My thoughts on why reproductions are important in open source."},{name:"description",content:"My thoughts on why reproductions are important in open source."}]};return n({frontmatter:o}),i({title:"Why Reproductions are Required",meta:[{property:"og:title",content:"Why Reproductions are Required"},{property:"og:description",content:"My thoughts on why reproductions are important in open source."},{name:"description",content:"My thoughts on why reproductions are important in open source."}]}),(y,b)=>{const r=l;return u(),a(r,{frontmatter:o},{default:s(()=>[m]),_:1})}}};export{_ as date,q as default,M as description,x as duration,R as lang,I as meta,v as title};
