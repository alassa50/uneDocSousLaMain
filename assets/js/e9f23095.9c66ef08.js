"use strict";(self.webpackChunkune_doc_sous_la_main=self.webpackChunkune_doc_sous_la_main||[]).push([[8101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(3117),o=(t(7294),t(3905));const l={sidebar_position:1},a="Windows terminal",s={unversionedId:"windows-terminal/windows-terminal",id:"windows-terminal/windows-terminal",title:"Windows terminal",description:"1 - installation de windows terminal",source:"@site/docs/windows-terminal/windows-terminal.md",sourceDirName:"windows-terminal",slug:"/windows-terminal/",permalink:"/uneDocSousLaMain/docs/windows-terminal/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docs & Projets",permalink:"/uneDocSousLaMain/docs/"},next:{title:"Docker",permalink:"/uneDocSousLaMain/docs/windows-terminal/docker"}},i={},u=[],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-terminal"},"Windows terminal"),(0,o.kt)("p",null,"1 - installation de windows terminal"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=fr-fr&gl=FR"},"https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=fr-fr&gl=FR")),(0,o.kt)("p",null,"2 - installation de WSL"),(0,o.kt)("p",null,"3 - Configuration de WSL"),(0,o.kt)("p",null,"WSL est en version 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wsl --set-default-version 2\n")),(0,o.kt)("p",null,"O\xf9 sont les images ?  => %LOCALAPPDATA%"),(0,o.kt)("p",null,"D\xe9placement du C: vers E:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wsl --export Ubuntu E:\\WSL\\backup\\ubuntu.tar\nwsl --unregister Ubuntu\nwsl --list\nwsl --import Ubuntu E:\\WSL E:\\WSL\\backup\\ubuntu.tar\nwsl --list\n\nwsl -d ubuntu\nwsl --shutdown ubuntu\n")),(0,o.kt)("p",null,"ubuntu config --default-user"),(0,o.kt)("p",null,"%USERPROFILE%"),(0,o.kt)("p",null,"Installation de Nerd Fonts :\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nerdfonts.com/font-downloads"},"https://www.nerdfonts.com/font-downloads"),"\nUnzip 3270 Nerd Font\nClic droit installer les fonts"),(0,o.kt)("p",null,"Version powershell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$PsVersionTable\n")),(0,o.kt)("p",null,"powershell o\xf9 est mon profil ?\non lance powershell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$PROFILE\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\Users\\Alexandre.FRL-PF1281DB\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "Your Name"\n\ngit config --global user.email "yourname@email.com"\n\ngit config --global alias.hist "log --pretty=format:\'%h %ad | %s%d [%an]\' --graph --date=short"\n\ngit config credential.helper store\n\nsudo chmod 600 /root/.ssh/github\nsudo chmod 755 ~/.ssh\n')))}c.isMDXComponent=!0}}]);