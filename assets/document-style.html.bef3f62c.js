import{_ as o,o as s,c as a,a as e,b as t,d as n,e as d,r}from"./app.d3d44b5f.js";const l={},c=d(`<h2 id="documentation-style-reusable-components" tabindex="-1"><a class="header-anchor" href="#documentation-style-reusable-components" aria-hidden="true">#</a> Documentation style &amp; reusable components</h2><p>The documentation for the project should maintain a consistent style where possible. This covers a number of aspects such as writing style, naming conventions, folder structure, links etc.</p><p>All docs are currently in American English (en-US) but localization is planned.</p><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h3><p>The main structure for documentation can be seen in <code>docs/docs</code>. There are a number of &quot;root&quot; sections:</p><ul><li><code>launch-manual</code> - For the current main Pulsar documentation</li><li><code>packages</code> - Currently holds wiki info from the atom package repos</li><li><code>resources</code> - For other referenced docs</li><li><code>blog</code> - For the website blog</li><li><code>atom-archive</code> - For &quot;as is&quot; archived Atom documentation</li></ul><p>Within each section is an <code>index.md</code> which will usually contain info about each sub-section as well as links to them. These correspond to the second level items on the sidebar.</p><p>Inside <code>sections</code> are the sub-sections which group more specific topics. These also have an <code>index.md</code> which corresponds to the third level item on the sidebar. This file is displayed on the website as a single long documenent but is actually created from a number of @include() lines which reference individual sections within the next sections directory. These should be relative to the location of index.md e.g. @include(sections/pulsar-packages.md). This file also contains the frontmatter for defining the title, language and description of the file and should also be the first level heading for the page. Here is also where you can place a container such as <code>Under Construction</code> to apply to the entire page.</p><p>Inside the next <code>sections</code> directory should be the actual content of the document. Each section should start with a second level header and should not contain any frontmatter.</p><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><p>Internal links can just be to the header (e.g.<code>[Structure](#structure)</code>), this to all sections included on the parent <code>index.md</code> so care should be made to not create any duplicate headers.</p><p>All other links should be relative but do not need to reference the index file itself (e.g.<code>[Installing](../getting-started#installing)</code>) will find the heading <code>#installing</code> within the index file in the <code>getting-started</code> directory above.</p><p>Images should be added to <code>[pulsar-assets](https://github.com/pulsar-edit/pulsar-assets)</code> and referenced from the package imported from it. This is done via an alias on the <code>.vuepress/config.js</code> file which adds most of the path for you: <code>&#39;@images&#39;: path.resolve(__dirname, &#39;../../node_modules/pulsar-assets/images&#39;)</code><br> so the link to your image would just be <code>![myImage](@images/pulsar/myImage.png &quot;My Image&quot;)</code>.</p><h3 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h3><p>The name of the application is <code>Pulsar</code> and should be capitalized as such. Whilst the website and GitHub org name is <code>Pulsar-Edit</code>, this should not be used within documentation outside of links to the GitHub org or website.</p><p>Operating systems should be named as such:</p><ul><li><code>Linux</code> - All GNU/Linux distributions</li><li><code>macOS</code> - Apple&#39;s current operating system family</li><li><code>Windows</code> - Microsoft Windows family of operating systems</li></ul><p>This is also the order they should appear in within the tab switcher.</p><p>When using the <code>#tabs</code> switcher they should be in this order.</p><p>When referencing them inline then they should be abbreviated to the following, strongly emphasized and separated by a <code>-</code>:</p><ul><li>Linux = <strong><em>LNX</em></strong></li><li>macOS = <strong><em>MAC</em></strong></li><li>Windows = <strong><em>WIN</em></strong></li></ul><p>To keep order consistent it should be LNX -&gt; MAC -&gt; WIN. If instructions: common to two then it should either be LNX/MAC, LNX/WIN -&gt; MAC/WIN</p><p>For Linux we may sometimes need to reference particular distros or families of distributions. We currently use:</p><ul><li><code>Ubuntu/Debian</code> for all distributions based on Debian or Ubuntu</li><li><code>Fedora/RHEL</code> for all distrububtions based on Fedora Linux &amp; Red Hat Red Hat Enterprise Linux. This includes AlmaLinux, CentOS, Rocky Linux etc.</li><li><code>Arch</code> - for all Arch based distributions such as Manjaro, Garuda, ArcoLinux etc.</li><li><code>OpenSUSE</code> - for all OpenSUSE based distributions such as GeckoLinux</li></ul><p>We may need to add more in the future but generally users of less popular or more technical distributions such as Gentoo or NixOS understand how to adapt to their OS from the instructions above.</p><h3 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h3><p>Where you want to display an <code>info</code>, <code>warning</code> or tab/code switcher in the document you should use a container with the <code>:::</code> syntax.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>::: tabs#filename

@tab Linux

Lorem ipsum dolor sit amet...

@tab macOS

Lorem ipsum dolor sit amet...

@tab Windows

Lorem ipsum dolor sit amet...

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>::: tip My Helpful Tip

You might want to do X to get Y

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),u={href:"https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/common-text-blocks.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vuepress-theme-hope.github.io/v2/guide/get-started/markdown.html#theme-enhancement",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"writing-style",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-style","aria-hidden":"true"},"#"),t(" Writing style")],-1),p=e("p",null,"TODO: Needs consensus",-1);function b(g,f){const i=r("ExternalLinkIcon");return s(),a("div",null,[c,e("p",null,[t("You can also find a list of currently maintained preformatted containers for various purposes at "),e("a",u,[t("pulsar-edit.github.io/common-text-blocks.md"),n(i)]),t(".")]),e("p",null,[t("See "),e("a",h,[t("VuePress Hope documentation"),n(i)])]),m,p])}const y=o(l,[["render",b],["__file","document-style.html.vue"]]);export{y as default};