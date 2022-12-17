"use strict";(self.webpackChunkune_doc_sous_la_main=self.webpackChunkune_doc_sous_la_main||[]).push([[7775],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(f,l(l({ref:n},d),{},{components:r})):t.createElement(f,l({ref:n},d))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2801:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(3117),o=(r(7294),r(3905));const a={sidebar_position:1},l="Markdown",i={unversionedId:"nodejs/markdown",id:"nodejs/markdown",title:"Markdown",description:"Bloc de code en ligne Markdown",source:"@site/docs/nodejs/markdown.md",sourceDirName:"nodejs",slug:"/nodejs/markdown",permalink:"/uneDocSousLaMain/docs/nodejs/markdown",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NodeJs",permalink:"/uneDocSousLaMain/docs/category/nodejs"},next:{title:"Yarn",permalink:"/uneDocSousLaMain/docs/nodejs/yarn"}},c={},s=[{value:"Bloc de code en ligne Markdown",id:"bloc-de-code-en-ligne-markdown",level:2},{value:"Blocs de code cl\xf4tur\xe9s",id:"blocs-de-code-cl\xf4tur\xe9s",level:2},{value:"Activer la coloration syntaxique",id:"activer-la-coloration-syntaxique",level:2},{value:"Liste des langages de bloc de code Markdown",id:"liste-des-langages-de-bloc-de-code-markdown",level:2}],d={toc:s};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown"},"Markdown"),(0,o.kt)("h2",{id:"bloc-de-code-en-ligne-markdown"},"Bloc de code en ligne Markdown"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'print("Hello, world!")')),(0,o.kt)("h2",{id:"blocs-de-code-cl\xf4tur\xe9s"},"Blocs de code cl\xf4tur\xe9s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'print("Hello, world!")\nfor i in range(10):\n    print(i)\n')),(0,o.kt)("h2",{id:"activer-la-coloration-syntaxique"},"Activer la coloration syntaxique"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print("Hello, world!")\nfor i in range(10):\n    print(i)\n')),(0,o.kt)("h2",{id:"liste-des-langages-de-bloc-de-code-markdown"},"Liste des langages de bloc de code Markdown"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"actionscript3"),(0,o.kt)("li",{parentName:"ul"},"apache"),(0,o.kt)("li",{parentName:"ul"},"applescript\nasp\nbrainfuck\nc\ncfm\nclojure\ncmake\ncoffee-script, coffeescript, coffee\ncpp \u2013 C++\ncs\ncsharp\ncss\ncsv\nbash\ndiff\nelixir\nerb \u2013 HTML + Embedded Ruby\ngo\nhaml\nhttp\njava\njavascript\njson\njsx\nless\nlolcode\nmake \u2013 Makefile\nmarkdown\nmatlab\nnginx\nobjectivec\npascal\nPHP\nPerl\npython\nprofile \u2013 python profiler output\nrust\nsalt, saltstate \u2013 Salt\nshell, sh, zsh, bash \u2013 Shell scripting\nscss\nsql\nsvg\nswift\nrb, jruby, ruby \u2013 Ruby\nsmalltalk\nvim, viml \u2013 Vim Script\nvolt\nvhdl\nvue\nxml \u2013 XML and also used for HTML with inline CSS and Javascript\nyaml")))}p.isMDXComponent=!0}}]);