import{_ as u,o as p,c as b,a as e,b as n,d as a,w as i,e as c,r as d}from"./app.d3d44b5f.js";const h={},m=e("h2",{id:"building-pulsar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-pulsar","aria-hidden":"true"},"#"),n(" Building Pulsar")],-1),v=e("p",null,"If you want to investigate a bug, implement a new feature in Pulsar's core or just want to tinker then you will need to build and run Pulsar from source.",-1),g={href:"https://github.com/pulsar-edit/pulsar",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"requirements-and-dependencies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements-and-dependencies","aria-hidden":"true"},"#"),n(" Requirements and dependencies")],-1),f=e("p",null,"To build Pulsar you will need to meet some basic requirements:",-1),k={href:"https://github.com/pulsar-edit/pulsar/blob/master/.nvmrc",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[n("yarn (enable with "),e("code",null,"corepack enable"),n(")")],-1),w=e("li",null,"Git",-1),P=e("li",null,"Python",-1),S=e("li",null,"C++ toolchain",-1),I={href:"https://wiki.gnome.org/Projects/Libsecret",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"For OS or distribution specific instructions see below:",-1),N=e("h4",{id:"ubuntu-debian",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-debian","aria-hidden":"true"},"#"),n(" Ubuntu/Debian")],-1),O=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install development packages"),n(`
`),e("span",{class:"token function"},"apt"),n(),e("span",{class:"token function"},"install"),n(` build-essential libxkbfile-dev libsecret-1-dev libx11-dev
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("h4",{id:"fedora-rhel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedora-rhel","aria-hidden":"true"},"#"),n(" Fedora/RHEL")],-1),q=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install development packages"),n(`
dnf `),e("span",{class:"token parameter variable"},"--assumeyes"),n(),e("span",{class:"token function"},"install"),n(),e("span",{class:"token function"},"make"),n(` gcc gcc-c++ glibc-devel git-core libsecret-devel rpmdevtools libX11-devel libxkbfile-devel nss atk gdk-pixbuf2 gtk3 mesa-dri-drivers
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("h4",{id:"arch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arch","aria-hidden":"true"},"#"),n(" Arch")],-1),B=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install the development packges"),n(`
pacman `),e("span",{class:"token parameter variable"},"-S"),n(` base-devel libxkbfile libsecret libx11 libxcrypt-compat
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("h4",{id:"opensuse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opensuse","aria-hidden":"true"},"#"),n(" OpenSUSE")],-1),C=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install development packages"),n(`
`),e("span",{class:"token function"},"zypper"),n(),e("span",{class:"token keyword"},"in"),n(),e("span",{class:"token parameter variable"},"-t"),n(` pattern devel_basis
`),e("span",{class:"token function"},"zypper"),n(),e("span",{class:"token keyword"},"in"),n(` libX11-devel libxkbfile-devel libsecret-devel
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),U=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`TODO
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E={href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"},F=c(`<h3 id="building-and-running-the-application" tabindex="-1"><a class="header-anchor" href="#building-and-running-the-application" aria-hidden="true">#</a> Building and running the application</h3><p>To build the application so you can start hacking on the core you will need to download the source code to your local machine and <code>cd</code> to the pulsar directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/pulsar-edit/pulsar.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> pulsar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),M=e("code",null,"nvm",-1),V=e("code",null,"yarn",-1),z={href:"https://github.com/pulsar-edit/pulsar/blob/master/.nvmrc",target:"_blank",rel:"noopener noreferrer"},R=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span>
corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If Node.js is already installed, run the following to make sure the correct version of Node.js is being used (see <a href="#requirements-and-dependencies">requirements</a>):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use
<span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Run the following to initialize and update the submodules:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> submodule init <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> submodule update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now install and build Pulsar &amp; ppm:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> build
<span class="token function">yarn</span> build:apm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start Pulsar!</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>These instructions will also build <code>ppm</code> (Pulsar Package Manager) but it will require some <a href="#using-ppm-pulsar-package-manager">additional configuration</a> for use.</p><h3 id="building-binaries" tabindex="-1"><a class="header-anchor" href="#building-binaries" aria-hidden="true">#</a> Building binaries</h3><p>The following will allow you to build Pulsar as a stand alone binary or installer. After running you will find your your built application in <code>pulsar/binaries</code>.</p><p>The build script will automatically build for your system&#39;s CPU architecture, for example building on an <code>x86_64</code> CPU will produce binaries for <code>x86_64</code>, building on <code>arm64</code> will only produce binaries for <code>arm64</code>.</p><p>It is not possible to &quot;cross-build&quot; for different OSs. For Linux binaries you must build from a Linux machine, macOS binaries must be built from macOS etc. Your OS is detected automatically and the script will build the correct binaries for it.</p>`,14),D=e("p",null,[n("By default running "),e("code",null,"yarn dist"),n(" will attempt to create "),e("code",null,"appimage"),n(" (for most Linux distributions), "),e("code",null,"deb"),n(" (for Debian or Ubuntu based distributions) and "),e("code",null,"rpm"),n(" (for Red Hat or Fedora based distributions) binaries but you can select the actual target you want to build by appending the above targets to the command. e.g.:")],-1),H=e("ul",null,[e("li",null,[e("code",null,"yarn dist appimage")]),e("li",null,[e("code",null,"yarn dist deb")]),e("li",null,[e("code",null,"yarn dist rpm")]),e("li",null,[e("code",null,"yarn dist targz")])],-1),W=e("p",null,[e("code",null,"yarn dist"),n(" will create a "),e("code",null,"dmg"),n(" installer, there are currently no additional targets for macOS.")],-1),X=e("p",null,"As noted above this builds for your current CPU architecture. i.e. on an Intel Mac this will create Intel binaries, on Apple silicon (M1, M2 etc.) this will create Apple silicon binaries.",-1),G=e("p",null,[n("By default running "),e("code",null,"yarn dist"),n(" will attempt to create an "),e("code",null,"NSIS"),n(" installer as well as a "),e("code",null,"Portable"),n(" executable which does not require installation. If you only wish to build one then you can specify it by appending the above targets to the command e.g.:")],-1),Y=e("ul",null,[e("li",null,[e("code",null,"yarn dist nsis")]),e("li",null,[e("code",null,"yarn dist portable")])],-1);function J(K,Q){const s=d("ExternalLinkIcon"),r=d("Tabs");return p(),b("div",null,[m,v,e("p",null,[n("The Pulsar application code can be found in the "),e("a",g,[n("pulsar-edit/pulsar"),a(s)]),n(" repository.")]),_,f,e("ul",null,[e("li",null,[n("Node.js (version specified in "),e("a",k,[n("pulsar/.nvmrc"),a(s)]),n(", recommended installation is via "),e("a",y,[n("nvm"),a(s)]),n(")")]),x,w,P,S,e("li",null,[e("a",I,[n("Libsecret"),a(s)]),n(" development headers")])]),A,a(r,{id:"50",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"core-hacking"},{tab0:i(({title:l,value:t,isActive:o})=>[N,O,T,q,L,B,j,C]),tab1:i(({title:l,value:t,isActive:o})=>[U]),tab2:i(({title:l,value:t,isActive:o})=>[e("p",null,[n("Firstly install "),e("a",E,[n("Visual Studio"),a(s)]),n(" from Microsoft.")])]),_:1}),F,e("p",null,[n("Install Node.js (using "),M,n(" - see above) and enable corepack (for "),V,n("). This will install the version of Node.js specified in "),e("a",z,[n("pulsar/.nvmrc"),a(s)]),n(":")]),R,a(r,{id:"120",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"core-hacking"},{tab0:i(({title:l,value:t,isActive:o})=>[D,H]),tab1:i(({title:l,value:t,isActive:o})=>[W,X]),tab2:i(({title:l,value:t,isActive:o})=>[G,Y]),_:1})])}const $=u(h,[["render",J],["__file","building-pulsar.html.vue"]]);export{$ as default};
