import{_ as s,o as i,c as l,a as e,b as t,d as n,r}from"./app.d3d44b5f.js";const a={},h=e("h2",{id:"configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),t(" Configuration files")],-1),c=e("p",null,[t("Nearly everything regarding the configuration of the website itself is controlled via the files found in the "),e("code",null,"/docs/.vuepress"),t(" directory.")],-1),d=e("p",null,"Currently we have three main configuration files.",-1),u=e("h3",{id:"config-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config-js","aria-hidden":"true"},"#"),t(),e("code",null,"config.js")],-1),f=e("p",null,"This is the main configuration file for the website. This controls everything from the available settings, additional VuePress plugins, website description and various other elements to control various settings and plugins.",-1),_={href:"https://v2.vuepress.vuejs.org/reference/config.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://vuepress-theme-hope.github.io/v2/config/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[t("This file is broken down to to keep it tidy, the below files are imported to "),e("code",null,"config.js"),t(" to extend the configuration file without making it unwieldy.")],-1),m=e("h3",{id:"navbar-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar-js","aria-hidden":"true"},"#"),t(),e("code",null,"navbar.js")],-1),g=e("p",null,"This controls the layout for the links in the top middle of the page and is always displayed.",-1),v=e("p",null,"Items that go here are ones that we always want to be shown and should always be available for quick navigation.",-1),w=e("p",null,"Each object can have a number of different values. The main ones we use are:",-1),y=e("li",null,[e("code",null,"text"),t(": This sets the text for the label.")],-1),k=e("code",null,"icon",-1),T={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"fa-",-1),j={href:"https://fontawesome.com/icons/house?s=solid&f=classic",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"solid fa-house",-1),C=e("li",null,[e("code",null,"link"),t(": This controls where the link will actually take you. This can be a relative reference internal to the website or can be a URL to an external site.")],-1),F=e("li",null,[e("code",null,"children"),t(": Allows you to specify an array of child objects which will appear as a dropdown on mouseover. Use of this disables the "),e("code",null,"link"),t(" value. Each child can be defined as a full object as described here or can simply be a relative link from which the text will be set by the YAML title.")],-1),L={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar",target:"_blank",rel:"noopener noreferrer"},A={href:"https://vuepress-theme-hope.github.io/v2/config/theme/layout.html#navbar-config",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"sidebar-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar-js","aria-hidden":"true"},"#"),t(),e("code",null,"sidebar.js")],-1),I=e("p",null,[t("This control what is displayed in the sidebar on the left of the website. It is not displayed globally, only on directories which are set within the sidebar, currently we only have "),e("code",null,"docs"),t(" configured.")],-1),N=e("p",null,[t("Like "),e("code",null,"navbar.js"),t(" each sidebare item is configured as an object with a number of different values.")],-1),H=e("li",null,[e("code",null,"text"),t(": This sets the text for the label.")],-1),P=e("li",null,[e("code",null,"link"),t(": Controls the relative link for navigating the documents within the section")],-1),U=e("code",null,"icon",-1),B={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"fa-",-1),O={href:"https://fontawesome.com/icons/house?s=solid&f=classic",target:"_blank",rel:"noopener noreferrer"},Y=e("code",null,"solid fa-house",-1),q=e("li",null,[e("code",null,"prefix"),t(": This adds a file path prefix to the item so its children do not need to specify the full path.")],-1),D=e("code",null,"collapsable",-1),R=e("em",null,"Note",-1),W=e("code",null,"collapsible",-1),z={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2377",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,[e("code",null,"children"),t(": Takes an array of objects configured as above. Can also be set as a simple relative link in which case the title will be the YAML title of the document it links to.")],-1),J={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar",target:"_blank",rel:"noopener noreferrer"},K={href:"https://vuepress-theme-hope.github.io/v2/config/theme/layout.html#sidebar-config",target:"_blank",rel:"noopener noreferrer"},Q=e("h3",{id:"theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),t(" Theme")],-1),S=e("p",null,[t("Within the "),e("code",null,"styles/"),t(" directory you will find the .scss file for controlling various aspects of the website's theme.")],-1),X=e("p",null,[e("strong",null,[e("em",null,"TODO")]),t(": This will be updated when we actually modify these files extensively.")],-1);function Z($,ee){const o=r("ExternalLinkIcon");return i(),l("div",null,[h,c,d,u,f,e("p",null,[t("For a full reference you can look at the documentation for "),e("a",_,[t("VuePress"),n(o)]),t(" and the "),e("a",p,[t("Hope Theme"),n(o)]),t(".")]),b,m,g,v,w,e("ul",null,[y,e("li",null,[k,t(": Used to prefix an icon to the item. The theme supports the free "),e("a",T,[t("FontAwesome"),n(o)]),t(" font natively. To add an icon you need to specify its name without the first "),x,t(" e.g. "),e("a",j,[t("fa-house"),n(o)]),t(" would be specified as "),V,t(".")]),C,F]),e("p",null,[t("For a full reference you can look at the documentation for "),e("a",L,[t("VuePress"),n(o)]),t(" and the "),e("a",A,[t("Hope Theme"),n(o)]),t(".")]),E,I,N,e("ul",null,[H,P,e("li",null,[U,t(": Used to prefix an icon to the item. The theme supports the free "),e("a",B,[t("FontAwesome"),n(o)]),t(" font natively. To add an icon you need to specify its name without the first "),M,t(" e.g. "),e("a",O,[t("fa-house"),n(o)]),t(" would be specified as "),Y,t(".")]),q,e("li",null,[D,t(": (sic) Controls whether the item can be collapsed. "),R,t(": This a breaking change on a future version of the Hope Theme so will need to be renamed "),W,t(" when updated, see: "),e("a",z,[t("Issue"),n(o)]),t(".")]),G]),e("p",null,[t("For a full reference you can look at the documentation for "),e("a",J,[t("VuePress"),n(o)]),t(" and the "),e("a",K,[t("Hope Theme"),n(o)]),t(".")]),Q,S,X])}const oe=s(a,[["render",Z],["__file","configuration-files.html.vue"]]);export{oe as default};