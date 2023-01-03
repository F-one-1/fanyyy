import{u as i,c as r,w as s,_ as l,o as h,a as e,d as o}from"./app.eba6dd3d.js";const u=e("div",{class:"prose m-auto"},[e("p",null,[e("div",{class:"table-of-contents"},[e("ul",null,[e("li",null,[e("a",{href:"#yak-shaving"},"Yak Shaving ")]),e("li",null,[e("a",{href:"#the-story-of-how-i-started-doing-open-source"},"The story of how I started doing open source ")]),e("li",null,[e("a",{href:"#shave-the-good-yak"},"Shave the Good Yak "),e("ul",null,[e("li",null,[e("a",{href:"#identify-problems"},"Identify Problems ")]),e("li",null,[e("a",{href:"#solve-the-problem"},"Solve the Problem ")]),e("li",null,[e("a",{href:"#good-enough"},"Good Enough ")]),e("li",null,[e("a",{href:"#refine-the-project"},"Refine the Project ")]),e("li",null,[e("a",{href:"#identify-more-problems"},"Identify More Problems ")])])]),e("li",null,[e("a",{href:"#wrapping-up"},"Wrapping Up ")])])])]),e("blockquote",null,[e("p",null,[e("a",{href:"/posts/about-yak-shaving-zh"},"\u4E2D\u6587\u539F\u6587 Original in Chinese")])]),e("p",null,"I recently visited Zhihu occasionally and saw many questions about how to start open source, or how to make open source projects successful. I kinda had similar doubts for a long time, so I thought that maybe I could share some of my rough views on this."),e("p",null,[o("If you don\u2019t know me, I am a team member of Vue, Vite, wenyan-lang, WindiCSS, Intlify, and the author of VueUse, Slidev, Type Challenges and i18n Ally. I also have some small open source tools under my personal GitHub account, you can have a look at my "),e("a",{href:"https://antfu.me/projects",target:"_blank",rel:"noopener"},"full project list"),o(". Since I started doing open source in earnest almost two years ago, even though those contributions aren\u2019t that impressive, they still managed to allow me to "),e("a",{href:"https://twitter.com/antfu7/status/1362676666221268995",target:"_blank",rel:"noopener"},"work full-time on open source development and maintenance through sponsorships"),o(".")]),e("p",null,"Many people probably gonna tell you that the success of a project depends on opportunity, marketing, branding, or documentation, ecosystem, technical innovation, code quality, etc. All of these are indeed important, but for me, the most important thing is the motivation to start a project and the drive to do it well. For me, the best way to get the power is via Yak Shaving."),e("h2",{id:"yak-shaving",tabindex:"-1"},[o("Yak Shaving "),e("a",{class:"header-anchor",href:"#yak-shaving","aria-hidden":"true"},"#")]),e("p",null,[e("a",{href:"https://americanexpress.io/yak-shaving",target:"_blank",rel:"noopener"},"Yak Shaving"),o(" refers to a series of actions when you\u2019re working on one task and then you find another task that\u2019s not finished, you tackle that one first, and while you\u2019re working on that one, you find another task to do\u2026 and so forth, so that you stray from the work that should have been done, and end up not getting nothing finished. Here is a real-world example:")]),e("blockquote",null,[e("p",null,[o("You want to bake an apple pie, so you head to the kitchen."),e("br"),o(" In the hallway, you notice some paint chipping on the wall."),e("br"),o(" So you walk to the hardware store for some paint."),e("br"),o(" On the way, you pass a bakery and stop in for a cupcake."),e("br"),o(" While eating the cupcake, you feel a pain in your mouth. It\u2019s that cavity that you\u2019ve been putting off."),e("br"),o(" You pick up your phone to call the dentist to make an appointment, but you see a notification from your friend Cher, who\u2019s having a party."),e("br"),o(" You don\u2019t want to show up empty-handed, so you stop for a bottle of wine\u2026")])]),e("p",null,"An example that more relevant to developers might be: You planned to write a blog today, but you found out none of the existing tools are good enough for you. Then you spend a month writing your own static website generator, but end up with the generator unfinished and forgetting about writing the blog."),e("p",null,"I guess we all had similar experiences more or less. Yak Shaving usually refers to something negative, emphasizing inattentiveness or lack of clarity of purpose. But I kinda think it\u2019s also an important source of motivation for many things. When a person needs a tool, they are most motivated to solve it and make it happen. I, not coincidentally, am an obsessive Yak Shaving fan."),e("p",null,"Maybe I\u2019ll share some of my stories with you to give you a better idea of what I\u2019m trying to express:"),e("h2",{id:"the-story-of-how-i-started-doing-open-source",tabindex:"-1"},[o("The story of how I started doing open source "),e("a",{class:"header-anchor",href:"#the-story-of-how-i-started-doing-open-source","aria-hidden":"true"},"#")]),e("p",null,"In my senior year of college, I went on a graduation trip to the Philippines with a group of college friends. Because of the various problems of exchanging foreign currency, an operation down to Taiwan dollars, US dollars, Philippine pesos and different exchange rates each time, making the record of public accounts and settlement very complicated. After we came back from the trip, we came up with the idea of making an app to solve this problem."),e("p",null,[o("To make the app reach a large enough audience, multilingual internationalization is something we have to consider. As there are many foreign language departments in our college, we thought we could use our resources to get our friends to help on translating the App into multiple languages. However, it is obviously unrealistic to have foreign language students write JSON with bare hands, so we had to find something a little easier. Luckily, I found "),e("a",{href:"https://github.com/think2011/vscode-vue-i18n",target:"_blank",rel:"noopener"},[e("code",null,"think2011/vscode-vue-i18n")]),o(", which looks great, but lacks some features we needed. So I contacted the author and got fork permission, and then, here comes the "),e("a",{href:"https://github.com/lokalise/i18n-ally",target:"_blank",rel:"noopener"},"i18n Ally"),o(" project.")]),e("p",null,[o("The later stage of App development coincided with the Composition API RFC of Vue 3. The new API seemed to solve many of the pain points in our development. In the spirit of experimentation, we installed the Vue 2 plugin and started to try it out. In the process of using it, we found out there are quite some functions we are commonly used, and also inspired by "),e("a",{href:"https://github.com/streamich/react-use",target:"_blank",rel:"noopener"},[e("code",null,"react-use")]),o(", I extracted them out and made "),e("a",{href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener"},"VueUse"),o(".")]),e("p",null,[o("Given that Vue 3 was still in Alpha at the time, and the community needs to gradually migrate from Vue 2 to Vue 3 for a long time in the future. I made VueUse intentionally as a universal library for Vue 2 and Vue 3 so that people could migrate seamlessly. The initial solution was to publish two packages for Vue 2 and 3 under different npm tags. As Vue 3 matured, more and more libraries wanted to go the same way to reduce the cost of maintaining two codebases at the same time. Then I thought, maybe I can find a general solution from VueUse, so that everyone could get benefit from it. And then, "),e("a",{href:"https://github.com/vueuse/vue-demi",target:"_blank",rel:"noopener"},[e("code",null,"vue-demi")]),o(" comes out. As a result, it also allows VueUse to publish one version that supports both Vue 2 and 3 at the same time.")]),e("p",null,[o("VueUse\u2019s support for Vue 2 relies on the "),e("a",{href:"https://github.com/vuejs/composition-api",target:"_blank",rel:"noopener"},[e("code",null,"@vue/composition-api")]),o(" library, at some point, there are some inconsistencies in the plugin with the latest Vue 3 changes. Which results in VueUse\u2019s development being hampered. After a quite long time of no response to the PR from the repository, I thought I might be able to help out a bit, so I posted "),e("a",{href:"https://github.com/vuejs/composition-api/issues/343",target:"_blank",rel:"noopener"},"an issue"),o(" in the repository saying I would like to volunteer myself maintaining the project. And that\u2019s also the opportunity for me to join the Vue team.")]),e("p",null,"In the end, our App didn\u2019t work out, but I gained a lot of valuable experience solving problems and working on open source projects along the way. i18n Ally started out as a vue-i18n specific extension and now supports over 20 major frameworks, with over 60,000 downloads of VS Code. VueUse started as a simple toolset and now it becomes a GitHub Organization with 10 members and 8 ecosystem packages."),e("p",null,"I could probably tell stories like these for a whole day, and behind almost every project there is such a motivation to try to solve a certain problem. After all of this harangue, the point I\u2019m trying to make is that Yak Shaving can be a great engine for progressing when used properly."),e("p",null,"And here are my methods of how to make Yak Shaving a good thing:"),e("h2",{id:"shave-the-good-yak",tabindex:"-1"},[o("Shave the Good Yak "),e("a",{class:"header-anchor",href:"#shave-the-good-yak","aria-hidden":"true"},"#")]),e("h3",{id:"identify-problems",tabindex:"-1"},[o("Identify Problems "),e("a",{class:"header-anchor",href:"#identify-problems","aria-hidden":"true"},"#")]),e("p",null,[o("I spent every day of my four years in college thinking if I could make an interesting open source project that everyone needed and live as a full-time open sourceror with freedom. The difference is that the four years I was thinking about how to make something that other people wanted, but later I was solving "),e("strong",null,"the actual problems that I encountered"),o(". As said, when you need a tool, you have the most motivation to make it. And also as a user, you know the best where the pain points and needs are. When you encounter this problem, others might have just encountered a similar one.")]),e("h3",{id:"solve-the-problem",tabindex:"-1"},[o("Solve the Problem "),e("a",{class:"header-anchor",href:"#solve-the-problem","aria-hidden":"true"},"#")]),e("p",null,"The most basic rule to start trying to solve a problem is to look for existing solutions, if the problem has been well solved, which meets your all needs, then just use it. Reinventing wheels might be a good way to learn, but since the wheels are already there, there has to be someone thinking about how to build a car, right?"),e("p",null,"When you find that there is no solution to the problem, or that the existing solutions don\u2019t work for you, while you have a great idea in your mind. Congratulations, you\u2019ve found a great Yak."),e("h3",{id:"good-enough",tabindex:"-1"},[o("Good Enough "),e("a",{class:"header-anchor",href:"#good-enough","aria-hidden":"true"},"#")]),e("p",null,[o("The most important part of making Yak Shaving great is to "),e("strong",null,"just be good enough"),o(" \u2013 do not have too much expectation, if the idea is verified feasible, make it just good enough; if the idea does now work, don\u2019t be discouraged, just throw it away, maybe one day you can pick it back up again with new ideas. It\u2019s not necessary to be perfect at the beginning. You don\u2019t have to draw a grand blueprint or plan, you don\u2019t have to set a huge goal of how many stars or how many users - you are doing it for yourself, and make it just good enough to solve your own problems. The important thing is to not spending too much time on a single idea, and get back to what you should have been doing in time.")]),e("h3",{id:"refine-the-project",tabindex:"-1"},[o("Refine the Project "),e("a",{class:"header-anchor",href:"#refine-the-project","aria-hidden":"true"},"#")]),e("p",null,"As the first user of your own product, you will find a lot of things for improvement in the process of using it, go and modify it from time to time and do some improvements. If you got more time, you can add a README describing the problems you encountered and the motivation for doing the project, which may be helpful to someone who faced similar problems."),e("p",null,"In the end, when using the project makes you feel that it\u2019s a pretty good idea, while you have completed the work that should have been done, you may wish to spend some time writing a document, improve the implementations, and promote a little. It\u2019s best if it has been recognized, but if not, just treat it as an exercise, and at least you\u2019ve your own problems solved. If the responses went well, then someone will start to raise issues and send PRs. Which more enhancements and features coming, you will also gradually find the future direction of the project. Besides that, those changes and enhancements from the community may end up being a better solution to the problems you encountered at the beginning."),e("h3",{id:"identify-more-problems",tabindex:"-1"},[o("Identify More Problems "),e("a",{class:"header-anchor",href:"#identify-more-problems","aria-hidden":"true"},"#")]),e("p",null,"The way to find more problems is simple, learn more and try more. In the process of solving and improving the problem, you will likely find new problems that could potentially be solved. Issues from the community can also help you find more inspiration. Anyway, congratulations on entering the positive cycle!"),e("h2",{id:"wrapping-up",tabindex:"-1"},[o("Wrapping Up "),e("a",{class:"header-anchor",href:"#wrapping-up","aria-hidden":"true"},"#")]),e("p",null,"Hopefully, this insight could give you some inspiration on solving your own problems, or making a good open source product, in one way or another."),e("p",null,"I also recommend some awesome Yak Shaving masters, maybe their projects and experiences can give you some inspiration as well:"),e("ul",null,[e("li",null,[e("a",{href:"https://github.com/sindresorhus",target:"_blank",rel:"noopener"},"Sindre Sorhus"),o(" - actively maintains 1100+ npm packages, Webpack and Babel both rely on 100+ of his packages")]),e("li",null,[e("a",{href:"https://github.com/tj",target:"_blank",rel:"noopener"},"TJ Holowaychuk"),o(" - Author of koa, mocha, express, etc.")]),e("li",null,[e("a",{href:"https://github.com/lukeed",target:"_blank",rel:"noopener"},"Luke Edwards"),o(" - Author of polka, uvu, klona, etc.")]),e("li",null,[e("a",{href:"https://github.com/egoist",target:"_blank",rel:"noopener"},"Egoist"),o(" - Author of poi, cac, saber, etc.")]),e("li",null,[e("a",{href:"https://github.com/privatenumber",target:"_blank",rel:"noopener"},"Hiroki Osame"),o(" - Author of esbuild-loader, vue-2-3, etc.")])]),e("p",null,"Cheers, and happy hacking!")],-1),f="About Yak Shaving",y="2021-05-19T16:00:00.000Z",b="en",w="10min",v=[{property:"og:title",content:"About Yak Shaving"}],k={__name:"about-yak-shaving",setup(d,{expose:n}){const t={title:"About Yak Shaving",date:"2021-05-19T16:00:00.000Z",lang:"en",duration:"10min",meta:[{property:"og:title",content:"About Yak Shaving"}]};return n({frontmatter:t}),i({title:"About Yak Shaving",meta:[{property:"og:title",content:"About Yak Shaving"}]}),(m,c)=>{const a=l;return h(),r(a,{frontmatter:t},{default:s(()=>[u]),_:1})}}};export{y as date,k as default,w as duration,b as lang,v as meta,f as title};
