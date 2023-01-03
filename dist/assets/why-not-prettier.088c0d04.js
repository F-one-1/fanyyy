import{u as c,c as h,w as o,_ as d,o as p,a as e,b as n,d as t}from"./app.eba6dd3d.js";import{_ as u}from"./GitHubLink.vue_vue_type_script_setup_true_lang.96e25142.js";import{_ as f}from"./Tweet.vue_vue_type_script_setup_true_lang.7902e099.js";import{_ as m}from"./prettier-print-width.134143f6.js";import"./logo-github.2bb278df.js";const g={class:"prose m-auto"},y=e("p",null,[e("div",{class:"table-of-contents"},[e("ul",null,[e("li",null,[e("a",{href:"#i-love-prettier"},"I Love Prettier ")]),e("li",null,[e("a",{href:"#but-why-not"},"But, Why Not? "),e("ul",null,[e("li",null,[e("a",{href:"#it\u2019s-opinionated"},"It\u2019s Opinionated ")]),e("li",null,[e("a",{href:"#the-line-wrapping-noise"},"The Line Wrapping Noise ")]),e("li",null,[e("a",{href:"#mess-with-eslint"},"Mess with ESLint ")])])]),e("li",null,[e("a",{href:"#alternatives"},"Alternatives ")]),e("li",null,[e("a",{href:"#wrapping-up"},"Wrapping Up ")])])])],-1),_=e("blockquote",null,[e("p",null,[e("a",{href:"/posts/why-not-prettier-zh"},"\u4E2D\u6587 Chinese Version")])],-1),w=e("p",null,"I have started writing this post multiple times but never ended up posting it. I wasn\u2019t able to figure out a proper way to express my position about Prettier. But this time, I think I should try harder to explain that for future reference.",-1),b=e("p",null,[t("First of all, I am not against Prettier. Actually, "),e("strong",null,"I love it"),t(".")],-1),k=e("h2",{id:"i-love-prettier",tabindex:"-1"},[t("I Love Prettier "),e("a",{class:"header-anchor",href:"#i-love-prettier","aria-hidden":"true"},"#")],-1),A=e("p",null,[e("a",{href:"https://prettier.io/",target:"_blank",rel:"noopener"},"Prettier"),t(" is a great tool, and it saved me a lot of time. I appreciated the efforts of the maintainers and contributors to make it possible and formed a great foundation of how the clean code would look for the community. I have to confess that the title is a bit clickbait. I use Prettier a lot for interactive documentation and playgrounds, like "),e("a",{href:"https://github.com/vueuse/vueuse/blob/c7dd1a48471d0a8b4f2b5a567baa12c24504eaee/scripts/utils.ts#L36-L46",target:"_blank",rel:"noopener"},"VueUse"),t(" and "),e("a",{href:"https://github.com/unocss/unocss/blob/7c332f235aff2045addb60c2668331a3ccfd1359/packages/inspector/client/composables/usePrettify.ts",target:"_blank",rel:"noopener"},"UnoCSS"),t(". I love it for the out-of-box support of a lot of languages. I could make the generated code pretty with less than 5 mins of integrating Prettier.")],-1),v=e("h2",{id:"but-why-not",tabindex:"-1"},[t("But, Why Not? "),e("a",{class:"header-anchor",href:"#but-why-not","aria-hidden":"true"},"#")],-1),I=e("p",null,"If you have ever come across my open source projects, you might find that I rarely use Prettier to format the source code. In this post, I would try to explain the reason why I made this decision:",-1),P=e("h3",{id:"it\u2019s-opinionated",tabindex:"-1"},[t("It\u2019s Opinionated "),e("a",{class:"header-anchor",href:"#it\u2019s-opinionated","aria-hidden":"true"},"#")],-1),x=e("p",null,[t("Prettier describes itself to be "),e("a",{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener"},'"an opinionated code formatter"'),t(".")],-1),B=e("p",null,[e("strong",null,"Opinionated"),t(" essentially means it\u2019s not for everyone. Prettier makes a lot of hard-coded decisions to provide a minimal configuration interface. That makes it very easy to use (it\u2019s excellent!) and the code consistent across projects. However, on the other hand, it also means you are losing the ability to have fine-grained tweaks to how your code should look like.")],-1),E=e("p",null,"While I love most of Prettier\u2019s decisions, it sometimes makes you upset when you find something you don\u2019t want and don\u2019t have a workaround.",-1),T=e("h3",{id:"the-line-wrapping-noise",tabindex:"-1"},[t("The Line Wrapping Noise "),e("a",{class:"header-anchor",href:"#the-line-wrapping-noise","aria-hidden":"true"},"#")],-1),D=e("p",null,[t("The main thing that itches me a lot is the auto wrapping / unwrapping based on the length of the code. Prettier has the concept of "),e("a",{href:"https://prettier.io/docs/en/options.html#print-width",target:"_blank",rel:"noopener"},[e("code",null,"printWidth")]),t(", which constrains each line to fit with a certain width (by default, it\u2019s 80 characters). It\u2019s generally great to have the code fitting in one screen and avoid horizontal scrolls.")],-1),L=e("p",null,"However, I often found it hurting the readability and git diffing.",-1),C=e("p",null,[e("a",{href:"https://twitter.com/patak_dev",target:"_blank",rel:"noopener"},"@patak_dev"),t(" recently brought up an example of that in PR reviewing:")],-1),W=e("p",{lang:"en",dir:"ltr"},[t("Formatters are awesome, especially when doing PR reviews. They also introduce issues though, for example when an addition triggers a line break. The diff isn't showing what changed here. It would be great if diff viewers would be Prettier-aware, counting line breaks as spacing. "),e("a",{href:"https://t.co/ZuApmctllU"},"pic.twitter.com/ZuApmctllU")],-1),S=e("a",{href:"https://twitter.com/patak_dev/status/1575784199767859200?ref_src=twsrc%5Etfw"},"September 30, 2022",-1),N=e("p",null,[t("Sometimes when you modify a string literal in JavaScript that may make the line a bit longer than the value of "),e("code",null,"printwidth"),t(", Prettier will force wrapping the line. It breaks the inline diffing and make the changes hard to review. Imagine in another pull request, we might reduce the string a bit shorter, Prettier will then unwrap the lines back to one line. Back and forth, it creates a lot of unnecessary noises.")],-1),j=e("p",null,"The following image shows another example:",-1),F=e("a",{href:"https://prettier.io/playground/#N4Igxg9gdgLgprEAuc0DOMAEBXNcBOamAvJgNoA6UmmwOe+AkgCZKYCMANPQVAIYBbOGwogAggBsAZgEs4mAMJ98QiTJh9RmAL6cqNOrgIs2AJm5H8-ISJABxGf0wAlCGgAWfKFt37aPJlZMAGYLBmthTFEAZXdsAHNMADk+ACNsHz1qf0sTTAAWMN5BSNFnPncBL0wAMXw+Bky-QwY8gFYiqxLbABU3d3kAGQBPbFSEJuyW4yCANk6I22iCeJkIZJkJCCllSYBdAG4qEE4QCAAHGDWoNGRQZXwIAHcABWUEW5Q+CSe+YdvTql6mAANZwGDREqDRxwZA7CR4QHAsEQ858MCOeLIGD4bBwU5wATjZjMODMQZeeLYPjxOA1CAqPgwK5QLFfbAwCAnEDuGACCQAdXc6jgaDRYDgyxu6hkADd1MNkOA0ACQI4GDAXvV4lU4d9ESAAFZoAAe0UxEjgAEVsBB4HqEfiQGjCAQlak0nAJNzzvhHDABTJmDB3Mh8uZnY88AL6uclb7RQRZbDTgBHW3wLUXT4gBoAWigcDJZO5+Dg6ZkZa1NN1SHhBrwAhk2NxTrQFutGdhdf1To0qUDwdDSAjOL4m0xCggAlrIFFbW5Rh6aU+9adsrxjCgpNg0TAfsuYm30Rgw0tDrw2m0QA",target:"_blank"},[e("img",{src:m,"scale-110":"",block:"",m:"b--5!"})],-1),Z=e("p",null,[e("sup",null,[e("em",null,[t("The 42 of "),e("code",null,"printWidth"),t(" is made up for demonstration, but it happens in any "),e("code",null,"printWidth")])])],-1),O=e("p",null,'On the left is the input code and on the right is the output of Prettier. I don\u2019t need to point out but you probably already have the answer of which one is "more pretty". From my point of view, Prettier follows the rule too strict. And in fact it makes the code much harder to read and modify, violating the initial goal of formating - to make the code more readable.',-1),Q=e("p",null,[t("The real pain point is that this behavior is not optional. "),e("strong",null,"You can\u2019t disable it completely"),t("("),e("a",{href:"https://github.com/prettier/prettier/issues/3468",target:"_blank",rel:"noopener"},"#3468"),t("). Increasing the "),e("code",null,"printWidth"),t(" only delays the circumstance and will affect other files that you didn\u2019t touch. The only workaround you can do is to use "),e("code",null,"// prettier-ignore"),t(', which to me, the "all or nothing" choice loses the point of using Prettier in the first place.')],-1),H=e("h3",{id:"mess-with-eslint",tabindex:"-1"},[t("Mess with ESLint "),e("a",{class:"header-anchor",href:"#mess-with-eslint","aria-hidden":"true"},"#")],-1),J=e("p",null,[t("Prettier as a code formatter, only cares about code styles but not the logic. Thus we see it\u2019s quite common for projects to use ESLint along with Prettier to also check the logic. If you have ever configured that yourself, you might notice there are some functionality overlaps between them - ESLint can also lint for code styles. The common practice is to use "),e("a",{href:"https://github.com/prettier/eslint-config-prettier",target:"_blank",rel:"noopener"},[e("code",null,"eslint-config-prettier")]),t(" to disable those overlaps rules in ESLint (there are also "),e("a",{href:"https://prettier.io/docs/en/integrating-with-linters.html",target:"_blank",rel:"noopener"},"a few other solutions"),t(").")],-1),G=e("p",null,"However, the approach creates quite a lot of mess to me:",-1),M=e("p",{lang:"en",dir:"ltr"},[t("My points here:"),e("br"),e("br"),t("1. Prettier Only is cool - It's out-of-box."),e("br"),t("2. If you need to use ESLint, it can do the formatting as good as Prettier - and more configurable")],-1),U=e("a",{href:"https://twitter.com/antfu7/status/1279149211523538944?ref_src=twsrc%5Etfw"},"July 3, 2020",-1),q=e("p",{lang:"en",dir:"ltr"},[t("3. Prettier + ESLint still needs a lot of configs - It doesn't make your life easier."),e("br"),t("4. You can have full control in ESLint but not in Prettier, mixing them together feels weird."),e("br"),t("5. I don't think parsing two times can be faster (maybe I am wrong)")],-1),Y=e("a",{href:"https://twitter.com/antfu7/status/1279149212974776320?ref_src=twsrc%5Etfw"},"July 3, 2020",-1),R=e("p",null,[e("a",{href:"https://developer.ibm.com/articles/auto-fix-and-format-your-javascript-with-eslint/",target:"_blank",rel:"noopener"},"ESLint\u2019s auto fix"),t(" could also do the formatting just as well as Prettier - with much more freedom of choices.")],-1),V=e("h2",{id:"alternatives",tabindex:"-1"},[t("Alternatives "),e("a",{class:"header-anchor",href:"#alternatives","aria-hidden":"true"},"#")],-1),X=e("p",null,"ESLint is essential to my workflow to ensure the code quality. If ESLint is already capable of doing formatting, the best solution for me is to use it in one go.",-1),z=e("p",null,"I spent some time configuring my ESLint and made it a config preset:",-1),K=e("p",null,"It turns out, the setup configuration can also be very minimal:",-1),$=e("pre",null,[e("code",{class:"language-bash"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"npm i -D @antfu/eslint-config")]),t(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"npm i -D @antfu/eslint-config")]),t(`
`),e("span",{class:"line"})])])])])],-1),ee=e("pre",null,[e("code",{class:"language-json"},[e("div",{class:"shiki-container"},[e("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// .eslintrc")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},'"'),e("span",{style:{color:"#E0A569"}},"extends"),e("span",{style:{color:"#858585"}},'"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@antfu"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),t(`
`),e("span",{class:"line"})])]),e("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",{"v-pre":""},[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// .eslintrc")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},'"'),e("span",{style:{color:"#B58451"}},"extends"),e("span",{style:{color:"#8E8F8B"}},'"'),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"@antfu"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),t(`
`),e("span",{class:"line"})])])])])],-1),te=e("p",null,"That\u2019s all you need. With the IDE extensions, it\u2019s also possible to trigger auto fixing on save. It works similarly to Prettier but respects your choices when to break the lines, with many best practices of linting. Oh, of course, it\u2019s also very opinionated towards my needs. But maybe, it could be a good reference for you to create your own version.",-1),oe=e("h2",{id:"wrapping-up",tabindex:"-1"},[t("Wrapping Up "),e("a",{class:"header-anchor",href:"#wrapping-up","aria-hidden":"true"},"#")],-1),ne=e("p",null,"This post is only trying to explain my personal experience and opinions. Of course, you can have different views and don\u2019t need to agree with me at all. I am not blaming Prettier for this. Different tools have different purposes and focuses, and there is no better or worse. It\u2019s just about using the right tools for the right circumstances. I will still be a happy user of Prettier in usages that I don\u2019t need the maximum customizability, and using ESLint exclusively for my projects\u2019 source code.",-1),ie=e("p",null,"Hope this could make myself clear and maybe give you some insights. Cheers!",-1),fe="Why I don't use Prettier",me="2022-10-01T00:00:00.000Z",ge="en",ye="12min",_e="The reason why I don't use Prettier in my projects.",we=[{property:"og:title",content:"Why I don't use Prettier"},{property:"og:description",content:"The reason why I don't use Prettier in my projects."},{name:"description",content:"The reason why I don't use Prettier in my projects."}],be={__name:"why-not-prettier",setup(se,{expose:r}){const s={title:"Why I don't use Prettier",date:"2022-10-01T00:00:00.000Z",lang:"en",duration:"12min",description:"The reason why I don't use Prettier in my projects.",meta:[{property:"og:title",content:"Why I don't use Prettier"},{property:"og:description",content:"The reason why I don't use Prettier in my projects."},{name:"description",content:"The reason why I don't use Prettier in my projects."}]};return r({frontmatter:s}),c({title:"Why I don't use Prettier",meta:[{property:"og:title",content:"Why I don't use Prettier"},{property:"og:description",content:"The reason why I don't use Prettier in my projects."},{name:"description",content:"The reason why I don't use Prettier in my projects."}]}),(ae,le)=>{const i=f,a=u,l=d;return p(),h(l,{frontmatter:s},{default:o(()=>[e("div",g,[y,_,w,b,k,A,v,I,P,x,B,E,T,D,L,C,n(i,null,{default:o(()=>[W,t("\u2014 patak (@patak_dev) "),S]),_:1}),N,j,F,Z,O,Q,H,J,G,n(i,{conversation:"none"},{default:o(()=>[M,t("\u2014 Anthony Fu (@antfu7) "),U]),_:1}),n(i,{conversation:"none"},{default:o(()=>[q,t("\u2014 Anthony Fu (@antfu7) "),Y]),_:1}),R,V,X,z,n(a,{repo:"antfu/eslint-config",name:"@antfu/eslint-config"}),K,$,ee,te,oe,ne,ie])]),_:1})}}};export{me as date,be as default,_e as description,ye as duration,ge as lang,we as meta,fe as title};
