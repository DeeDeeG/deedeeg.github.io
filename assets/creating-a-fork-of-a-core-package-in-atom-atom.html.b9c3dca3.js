import{_ as s,o as c,c as l,a as e,b as a,d as o,w as i,e as m,r}from"./app.d3d44b5f.js";const p={},d=e("h2",{id:"creating-a-fork-of-a-core-package-in-atom-atom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-a-fork-of-a-core-package-in-atom-atom","aria-hidden":"true"},"#"),a(" Creating a Fork of a Core Package in atom/atom")],-1),u={href:"https://github.com/atom/atom/tree/master/packages",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"packages",-1),h={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"Tips",-1),f=e("strong",null,"Tip:",-1),_=e("h3",{id:"creating-your-new-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-your-new-package","aria-hidden":"true"},"#"),a(" Creating Your New Package")],-1),y={href:"https://github.com/atom/atom/tree/master/packages/one-light-ui",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/atom/atom/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},v=m(`<li><p>Unzip the file to a temporary location (for example <span class="platform-mac platform-linux"><code>/tmp/atom</code></span><span class="platform-windows"><code>C:\\TEMP\\atom</code></span>)</p></li><li><p>Copy the contents of the desired package into a working directory for your fork</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ &lt;span class=&#39;platform-mac platform-linux&#39;&gt;cp -R /tmp/atom/packages/one-light-ui ~/src/one-light-ui-plus&lt;/span&gt;&lt;span class=&#39;platform-windows&#39;&gt;xcopy C:\\TEMP\\atom\\packages\\one-light-ui C:\\src\\one-light-ui-plus /E /H /K&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Create a local repository and commit the initial contents</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd ~/src/one-light-ui-plus
$ git init
$ git commit -am &quot;Import core Atom package&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Update the <code>name</code> property in <code>package.json</code> to give your package a unique name</p></li><li><p>Make the other customizations that you have in mind</p></li><li><p>Commit your changes</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git commit -am &quot;Apply initial customizations&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,6),w={href:"https://help.github.com/articles/create-a-repo/",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[e("p",null,"Follow the instructions in the github.com UI to push your code to your new online repository")],-1),C=e("h3",{id:"merging-upstream-changes-into-your-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merging-upstream-changes-into-your-package","aria-hidden":"true"},"#"),a(" Merging Upstream Changes into Your Package")],-1);function A(T,I){const t=r("ExternalLinkIcon"),n=r("RouterLink");return c(),l("div",null,[d,e("p",null,[a("Several of Atom's core packages are maintained in the "),e("a",u,[g,a(" directory of the atom/atom repository"),o(t)]),a(". If you would like to use one of these packages as a starting point for your own package, please follow the steps below.")]),e("div",h,[k,e("p",null,[f,a(" In most cases, we recommend "),o(n,{to:"/docs/atom-archive/hacking-atom/package-word-count/#package-generator"},{default:i(()=>[a("generating a brand new package")]),_:1}),a(" or a "),o(n,{to:"/docs/atom-archive/hacking-atom/creating-a-theme/#creating-a-syntax-theme"},{default:i(()=>[a("brand new theme")]),_:1}),a(" as the starting point for your creation. The guide below applies only to situations where you want to create a package that closely resembles a core Atom package.")])]),_,e("p",null,[a("For the sake of this guide, let's assume that you want to start with the current code in the "),e("a",y,[a("one-light-ui"),o(t)]),a(' package, make some customizations to it, and publish your new package under the name "one-light-ui-plus".')]),e("ol",null,[e("li",null,[e("p",null,[a("Download the "),e("a",b,[a("current contents of the atom/atom repository as a zip file"),o(t)])])]),v,e("li",null,[e("p",null,[e("a",w,[a("Create a public repository on github.com"),o(t)]),a(" for your new package")])]),x,e("li",null,[e("p",null,[a("Follow the steps in the "),o(n,{to:"/docs/atom-archive/hacking-atom/sections/publishing/"},{default:i(()=>[a("Publishing guide")]),_:1}),a(" to publish your new package")])])]),C,e("p",null,[a("The code in the original package will continue to evolve over time, either to fix bugs or to add new enhancements. You may want to incorporate some or all of those updates into your package. To do so, you can follow "),o(n,{to:"/docs/atom-archive/hacking-atom/sections/maintaining-a-fork-of-a-core-package-in-atom-atom/#step-by-step-guide"},{default:i(()=>[a("these steps")]),_:1}),a(" for merging upstream changes into your package.")])])}const z=s(p,[["render",A],["__file","creating-a-fork-of-a-core-package-in-atom-atom.html.vue"]]);export{z as default};
