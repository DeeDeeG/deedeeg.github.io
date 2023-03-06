import{_ as r,o as l,c as d,a as e,b as t,d as o,w as c,e as i,r as s}from"./app.d3d44b5f.js";const h={},u=e("p",null,"Here is all the information on how the Pulsar website is built and configured.",-1),p={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vuepress-theme-hope.github.io/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"See the documentation there for generic items not covered in this guide.",-1),f=e("h2",{id:"building-the-website",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-the-website","aria-hidden":"true"},"#"),t(" Building the website")],-1),g=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),v={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"git",-1),y={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"corepack enable",-1),k=e("h3",{id:"clone-the-repository-and-install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clone-the-repository-and-install","aria-hidden":"true"},"#"),t(" Clone the repository and install")],-1),x={href:"https://github.com/pulsar-edit/pulsar-edit.github.io",target:"_blank",rel:"noopener noreferrer"},T=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/pulsar-edit/pulsar-edit.github.io

<span class="token builtin class-name">cd</span> pulsar-edit.github.io

<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="running-the-website" tabindex="-1"><a class="header-anchor" href="#running-the-website" aria-hidden="true">#</a> Running the website</h3><p>Once installed there are a number of scripts available to help you develop and build the site. Just prefix each command with <code>pnpm</code>. e,g, <code>pnpm dev</code>.</p><h4 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> <code>dev</code></h4><p>Starts a watch task that will rebuild VuePress whenever a change has been made to the included Markdown and JavaScript files. Additionally, it launches the development server to test the results in the browser.</p><h4 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>build</code></h4><p>Creates an optimized production build.</p><h4 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> <code>format</code></h4>`,8),j={href:"https://prettier.io",target:"_blank",rel:"noopener noreferrer"},L=i('<p><strong>Note:</strong> This task will run automatically on every commit, so it can be ignored in most cases</p><h4 id="lint" tabindex="-1"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> <code>lint</code></h4><p>Lints all Markdown files in the repository.</p><p><strong>Note:</strong> This task will run automatically on every commit, so it can be ignored in most cases</p><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h3><p>Whilst <code>dev</code> does run a watch task, not everything will be updated and some changes will require you to shut down the server and start it again. For example adding <code>@include</code> files to another file will not rebuild automatically.</p><p>If you wish to add new files from another repository via alias or <code>@include</code> then you will need to run <code>pnpm update</code> to get the latest version of the repository - the <code>pnpm-lock.yml</code> file will also be updated and must be part of any commit.</p><h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2><p>Nearly everything regarding the configuration of the website itself is controlled via the files found in the <code>/docs/.vuepress</code> directory.</p><p>Currently we have three main configuration files.</p><h3 id="config-js" tabindex="-1"><a class="header-anchor" href="#config-js" aria-hidden="true">#</a> <code>config.js</code></h3><p>This is the main configuration file for the website. This controls everything from the available settings, additional VuePress plugins, website description and various other elements to control various settings and plugins.</p>',12),A={href:"https://v2.vuepress.vuejs.org/reference/config.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vuepress-theme-hope.github.io/v2/config/",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,[t("This file is broken down to to keep it tidy, the below files are imported to "),e("code",null,"config.js"),t(" to extend the configuration file without making it unwieldy.")],-1),I=e("h3",{id:"navbar-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar-js","aria-hidden":"true"},"#"),t(),e("code",null,"navbar.js")],-1),W=e("p",null,"This controls the layout for the links in the top middle of the page and is always displayed.",-1),C=e("p",null,"Items that go here are ones that we always want to be shown and should always be available for quick navigation.",-1),M=e("p",null,"Each object can have a number of different values. The main ones we use are:",-1),N=e("li",null,[e("code",null,"text"),t(": This sets the text for the label.")],-1),O=e("code",null,"icon",-1),H={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"fa-",-1),F={href:"https://fontawesome.com/icons/house?s=solid&f=classic",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"solid fa-house",-1),Y=e("li",null,[e("code",null,"link"),t(": This controls where the link will actually take you. This can be a relative reference internal to the website or can be a URL to an external site.")],-1),U=e("li",null,[e("code",null,"children"),t(": Allows you to specify an array of child objects which will appear as a dropdown on mouseover. Use of this disables the "),e("code",null,"link"),t(" value. Each child can be defined as a full object as described here or can simply be a relative link from which the text will be set by the YAML title.")],-1),V={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar",target:"_blank",rel:"noopener noreferrer"},B={href:"https://vuepress-theme-hope.github.io/v2/config/theme/layout.html#navbar-config",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"sidebar-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar-js","aria-hidden":"true"},"#"),t(),e("code",null,"sidebar.js")],-1),R=e("p",null,[t("This control what is displayed in the sidebar on the left of the website. It is not displayed globally, only on directories which are set within the sidebar, currently we only have "),e("code",null,"docs"),t(" configured.")],-1),z=e("p",null,[t("Like "),e("code",null,"navbar.js"),t(" each sidebare item is configured as an object with a number of different values.")],-1),G=e("li",null,[e("code",null,"text"),t(": This sets the text for the label.")],-1),X=e("li",null,[e("code",null,"link"),t(": Controls the relative link for navigating the documents within the section")],-1),J=e("code",null,"icon",-1),Q={href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"fa-",-1),Z={href:"https://fontawesome.com/icons/house?s=solid&f=classic",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"solid fa-house",-1),ee=e("li",null,[e("code",null,"prefix"),t(": This adds a file path prefix to the item so its children do not need to specify the full path.")],-1),te=e("code",null,"collapsable",-1),oe=e("em",null,"Note",-1),ne=e("code",null,"collapsible",-1),ie={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/2377",target:"_blank",rel:"noopener noreferrer"},se=e("li",null,[e("code",null,"children"),t(": Takes an array of objects configured as above. Can also be set as a simple relative link in which case the title will be the YAML title of the document it links to.")],-1),ae={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar",target:"_blank",rel:"noopener noreferrer"},re={href:"https://vuepress-theme-hope.github.io/v2/config/theme/layout.html#sidebar-config",target:"_blank",rel:"noopener noreferrer"},le=i(`<h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h3><p>Within the <code>styles/</code> directory you will find the .scss file for controlling various aspects of the website&#39;s theme.</p><p><strong><em>TODO</em></strong>: This will be updated when we actually modify these files extensively.</p><h2 id="file-organization" tabindex="-1"><a class="header-anchor" href="#file-organization" aria-hidden="true">#</a> File Organization</h2><p>One of the most important things to take note of when adding new documentation is where it should go within the website layout.</p><p>The generalized overall layout of the website looks like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docs
\u251C\u2500\u2500 root level .md files
\u2514\u2500\u2500 section folder
    \u251C\u2500\u2500 sections
    \u2514\u2500\u2500 index.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The general idea is that for files that can stand by themselves (for example the <code>About Us</code> page, <code>Repositories</code> etc.) they exist at the <code>docs/</code> &quot;root&quot; level.</p><p>For anything that is more complex it needs to have a section directory named appropriately, an <code>index.md</code> file within it and a <code>sections</code> directory.</p><h3 id="index-md" tabindex="-1"><a class="header-anchor" href="#index-md" aria-hidden="true">#</a> <code>index.md</code></h3><p>This index file needs to have a YAML frontmatter to define, at a minimum, the title of the document. This is displayed as an <code>H1</code> header for the page (note: subsequent <code>H1</code> headers will be ignored so always start at <code>H2</code>).</p><p>The rest of this index file will be used to display the actual content you want to show. This is done in a number of ways.</p><p>First of all you can just include standard markdown. This is often used for introducing the section or adding one of our reusable components (e.g. a <code>danger</code> container).</p><p>The rest of the file should consist of <code>@includes</code> which take data from other folders on the website and integrates it automatically. Usually this will be the <code>sections</code> files which will be covered next.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@include(sections/file-organization.md)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),de=e("code",null,"@include",-1),ce={href:"https://github.com/pulsar-edit/.github",target:"_blank",rel:"noopener noreferrer"},he=i(`<p>This is done by having a value defined on the <code>config.js</code> file which will provide an alias for us to use:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;@orgdocs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>
		<span class="token string">&quot;@orgdocs&quot;</span><span class="token punctuation">,</span>
		path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../../node_modules/.github/&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows us to include org-level docs by using this special alias.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@include(@orgdocs/TOOLING.md)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sections" tabindex="-1"><a class="header-anchor" href="#sections" aria-hidden="true">#</a> Sections</h3><p>The <code>sections</code> directory is where we include the rest of the documents broken down by section. These should be self contained files which can be used alone but are designed to be included on the section page. This approach allows us flexibility with ordering as well as including these files in other places without needing to duplicate the material.</p><p>Files here can be navigated to directly on the website but should not be linked to directly.</p><p>These files shoud <em>not</em> have any YAML frontmatter as they will be included and shown as text.</p><h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h3>`,10),ue={href:"https://github.com/pulsar-edit/.github/tree/main/images/",target:"_blank",rel:"noopener noreferrer"},pe=i(`<p>An alias for this exists in <code>config.js</code> to access files from this repository.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;@images&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../node_modules/.github/images&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So to include an image you simply need to use the standard markdown image link along with the alias:</p><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">MyImage</span>](<span class="token url">@images/path/to/image.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="documentation-style-reusable-components" tabindex="-1"><a class="header-anchor" href="#documentation-style-reusable-components" aria-hidden="true">#</a> Documentation style &amp; reusable components</h2><p>The documentation for the project should maintain a consistent style where possible. This covers a number of aspects such as writing style, naming conventions, folder structure, links etc.</p><p>All docs are currently in American English (en-US) but localization is planned.</p><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h3><p>The main structure for documentation can be seen in <code>docs/docs</code>. There are a number of &quot;root&quot; sections:</p><ul><li><code>launch-manual</code> - For the current main Pulsar documentation</li><li><code>packages</code> - Currently holds wiki info from the atom package repos</li><li><code>resources</code> - For other referenced docs</li><li><code>blog</code> - For the website blog</li><li><code>atom-archive</code> - For &quot;as is&quot; archived Atom documentation</li></ul><p>Within each section is an <code>index.md</code> which will usually contain info about each sub-section as well as links to them. These correspond to the second level items on the sidebar.</p><p>Inside <code>sections</code> are the sub-sections which group more specific topics. These also have an <code>index.md</code> which corresponds to the third level item on the sidebar. This file is displayed on the website as a single long documenent but is actually created from a number of @include() lines which reference individual sections within the next sections directory. These should be relative to the location of index.md e.g. @include(sections/pulsar-packages.md). This file also contains the frontmatter for defining the title, language and description of the file and should also be the first level heading for the page. Here is also where you can place a container such as <code>Under Construction</code> to apply to the entire page.</p><p>Inside the next <code>sections</code> directory should be the actual content of the document. Each section should start with a second level header and should not contain any frontmatter.</p><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><p>Internal links can just be to the header (e.g.<code>[Structure](#structure)</code>), this to all sections included on the parent <code>index.md</code> so care should be made to not create any duplicate headers.</p><p>All other links should be relative but do not need to reference the index file itself (e.g.<code>[Installing](../getting-started#installing)</code>) will find the heading <code>#installing</code> within the index file in the <code>getting-started</code> directory above.</p><p>Images should be added to <code>[pulsar-assets](https://github.com/pulsar-edit/pulsar-assets)</code> and referenced from the package imported from it. This is done via an alias on the <code>.vuepress/config.js</code> file which adds most of the path for you: <code>&#39;@images&#39;: path.resolve(__dirname, &#39;../../node_modules/pulsar-assets/images&#39;)</code><br> so the link to your image would just be <code>![myImage](@images/pulsar/myImage.png &quot;My Image&quot;)</code>.</p><h3 id="naming" tabindex="-1"><a class="header-anchor" href="#naming" aria-hidden="true">#</a> Naming</h3><p>The name of the application is <code>Pulsar</code> and should be capitalized as such. Whilst the website and GitHub org name is <code>Pulsar-Edit</code>, this should not be used within documentation outside of links to the GitHub org or website.</p><p>Operating systems should be named as such:</p><ul><li><code>Linux</code> - All GNU/Linux distributions</li><li><code>macOS</code> - Apple&#39;s current operating system family</li><li><code>Windows</code> - Microsoft Windows family of operating systems</li></ul><p>This is also the order they should appear in within the tab switcher.</p><p>When using the <code>#tabs</code> switcher they should be in this order.</p><p>When referencing them inline then they should be abbreviated to the following, strongly emphasized and separated by a <code>-</code>:</p><ul><li>Linux = <strong><em>LNX</em></strong></li><li>macOS = <strong><em>MAC</em></strong></li><li>Windows = <strong><em>WIN</em></strong></li></ul><p>To keep order consistent it should be LNX -&gt; MAC -&gt; WIN. If instructions: common to two then it should either be LNX/MAC, LNX/WIN -&gt; MAC/WIN</p><p>For Linux we may sometimes need to reference particular distros or families of distributions. We currently use:</p><ul><li><code>Ubuntu/Debian</code> for all distributions based on Debian or Ubuntu</li><li><code>Fedora/RHEL</code> for all distrububtions based on Fedora Linux &amp; Red Hat Red Hat Enterprise Linux. This includes AlmaLinux, CentOS, Rocky Linux etc.</li><li><code>Arch</code> - for all Arch based distributions such as Manjaro, Garuda, ArcoLinux etc.</li><li><code>OpenSUSE</code> - for all OpenSUSE based distributions such as GeckoLinux</li></ul><p>We may need to add more in the future but generally users of less popular or more technical distributions such as Gentoo or NixOS understand how to adapt to their OS from the instructions above.</p><h3 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h3><p>Where you want to display an <code>info</code>, <code>warning</code> or tab/code switcher in the document you should use a container with the <code>:::</code> syntax.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>::: tabs#filename

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),me={href:"https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/common-text-blocks.md",target:"_blank",rel:"noopener noreferrer"},be={href:"https://vuepress-theme-hope.github.io/v2/guide/get-started/markdown.html#theme-enhancement",target:"_blank",rel:"noopener noreferrer"},fe=e("h3",{id:"writing-style",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-style","aria-hidden":"true"},"#"),t(" Writing style")],-1),ge=e("p",null,"TODO: Needs consensus",-1),ve=e("h2",{id:"blog-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blog-guide","aria-hidden":"true"},"#"),t(" Blog guide")],-1),we={href:"https://pulsar-edit.dev/article/",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://vuepress-theme-hope.github.io/v2/blog/",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://github.com/pulsar-edit/pulsar-edit.github.io",target:"_blank",rel:"noopener noreferrer"},ke=e("h3",{id:"writing-a-new-post",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#writing-a-new-post","aria-hidden":"true"},"#"),t(" Writing a new post")],-1),xe=i('<li>Create a new .md file in <a href="pulsar-edit.github.io/docs/blog">pulsar-edit.github.io/docs/blog</a>. <ul><li>This file should be named <code>YYYYMMDD-&lt;author&gt;-&lt;title&gt;.md</code> e.g <code>20221031-CreativeUsername-ThisIsMyBlogPost.md</code></li></ul></li><li>The metadata displayed on the website is dependent on a number of items that are configured in the YAML frontmatter of the file. You may in theory omit any of these except the title field but it&#39;s strongly recommend that you use <code>title</code>, <code>author</code>, <code>date</code>, <code>category</code> and <code>tag</code> as the minimum as the others will default to false. <ul><li>Frontmatter items supported currently are: <ul><li><code>title</code> - <em>String</em>: The displayed title of the post, consider this as <code>H1</code></li><li><code>author</code> - <em>String</em>: The name of the author to be displayed.</li><li><code>date</code> - <em>Date (ISO 8601)</em>: Allows display of date as well as enabling sorting on the timeline, set to the same as your filename date but with hyphens (e.g. <code>2022-10-31</code>).</li><li><code>category</code> - <em>String (multiline)</em>: Enables filtering by category, this should be based on the subject of the post e.g. <code>release</code>, <code>dev log</code>, <code>announcement</code>. This is a multiline field if you want to set more than one category.</li><li><code>tag</code> - <em>String (multiline)</em>: Enables filtering by tags, this should be based on the content of the post and areas it touches on e.g. <code>website</code>, <code>editor</code>, <code>config</code>.</li><li><code>sticky</code> - <em>Bool</em>: Enables &quot;pinning&quot; on the</li><li><code>star</code> - <em>Bool</em>: Enables use of the <code>star</code> category for any important articles we want to remain visible.</li><li><code>article</code> - <em>Bool</em>: You probably won&#39;t want to use this but setting this to <code>false</code> will exclude this page from appearing. This is set on the &quot;example&quot; blog post intentionally.</li></ul></li></ul></li><li>An excerpt can be added to the post by creating an html comment <code>&lt;!-- more --&gt;</code>. Anything above the comment will be treated as the excerpt and anything underneath will be the content of the post. <ul><li>We are looking at implementing an auto excerpt feature but this doesn&#39;t seem to be working on the theme at the moment, this file will be updated if and when it is available.</li></ul></li>',3),Te={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/config.html#vueplayground",target:"_blank",rel:"noopener noreferrer"},je=e("li",null,[t("Images are supported with the standard image syntax ("),e("code",null,"![myImage](./assets/myImage.png)"),t(") and should be located in the "),e("code",null,"blog/assets"),t(" directory. You may also use standard html "),e("code",null,"<img>"),t(" tags, particularly if you wish to control the displayed size of the image.")],-1),Le=e("li",null,"Create a PR to the repo and make it obvious it is a blog post, by including [BLOG] in the title of your PR. Please don't submit it alongside any website changes.",-1),Ae={href:"https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/docs/blog/20221112-Daeraxa-ExamplePost.md",target:"_blank",rel:"noopener noreferrer"},Se=e("h3",{id:"testing-locally",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#testing-locally","aria-hidden":"true"},"#"),t(" Testing locally")],-1),qe=i('<h3 id="website-blog-page-s" tabindex="-1"><a class="header-anchor" href="#website-blog-page-s" aria-hidden="true">#</a> Website &quot;Blog&quot; page(s)</h3><p>The website itself has a number of features which the aforementioned frontmatter fields can influence.</p><p>There is a &quot;selector&quot; at the top of the site which currently reads <code>All</code>, <code>Star</code>, <code>Slides</code>, <code>Encrypted</code>. The only ones we use are the first two and currently the theme doesn&#39;t support configuration of this. If necessary we may be able to hide it with CSS.<br> Any article with <code>Star</code> set to <code>true</code> will be shown in the <code>star</code> category.</p><p>On the right bar are 4 counters/links and filters for <code>Articles</code>, <code>Category</code>, <code>Tag</code> and <code>Timeline</code>.<br><code>Category</code> and <code>Tag</code> are used to filter articles depending on the categories submitted in the respective frontmatter fields. The <code>Timeline</code> allows views of blog posts over time according to the dates set in the <code>date</code> frontmatter field.</p><h3 id="questions-suggestions" tabindex="-1"><a class="header-anchor" href="#questions-suggestions" aria-hidden="true">#</a> Questions? Suggestions</h3><p>Just ask in Discord or GH Discussions and ping the <code>@documentation</code> team.</p><p>This is very much barebones default config so please let us know if you have any suggestions as to how we can improve it.</p>',7);function Ie(We,Ce){const n=s("ExternalLinkIcon"),a=s("RouterLink");return l(),d("div",null,[u,e("p",null,[t("The website itself is built using "),e("a",p,[t("VuePress v2"),o(n)]),t(" and the "),e("a",m,[t("Vuepress Hope Theme"),o(n)]),t(".")]),b,f,g,e("ul",null,[e("li",null,[t("Node.js - at least version 16 (recommended installation via "),e("a",v,[t("nvm"),o(n)]),t(").")]),w,e("li",null,[e("a",y,[t("pnpm"),o(n)]),t(" - simply run "),_])]),k,e("p",null,[t("The website repository is "),e("a",x,[t("https://github.com/pulsar-edit/pulsar-edit.github.io"),o(n)]),t(". Other assets are stored on other repositories but these will be downloaded automatically.")]),T,e("p",null,[t("Runs "),e("a",j,[t("Prettier"),o(n)]),t(" over all Markdown files included in the repository to ensure consistent formatting.")]),L,e("p",null,[t("For a full reference you can look at the documentation for "),e("a",A,[t("VuePress"),o(n)]),t(" and the "),e("a",S,[t("Hope Theme"),o(n)]),t(".")]),q,I,W,C,M,e("ul",null,[N,e("li",null,[O,t(": Used to prefix an icon to the item. The theme supports the free "),e("a",H,[t("FontAwesome"),o(n)]),t(" font natively. To add an icon you need to specify its name without the first "),E,t(" e.g. "),e("a",F,[t("fa-house"),o(n)]),t(" would be specified as "),P,t(".")]),Y,U]),e("p",null,[t("For a full reference you can look at the documentation for "),e("a",V,[t("VuePress"),o(n)]),t(" and the "),e("a",B,[t("Hope Theme"),o(n)]),t(".")]),D,R,z,e("ul",null,[G,X,e("li",null,[J,t(": Used to prefix an icon to the item. The theme supports the free "),e("a",Q,[t("FontAwesome"),o(n)]),t(" font natively. To add an icon you need to specify its name without the first "),K,t(" e.g. "),e("a",Z,[t("fa-house"),o(n)]),t(" would be specified as "),$,t(".")]),ee,e("li",null,[te,t(": (sic) Controls whether the item can be collapsed. "),oe,t(": This a breaking change on a future version of the Hope Theme so will need to be renamed "),ne,t(" when updated, see: "),e("a",ie,[t("Issue"),o(n)]),t(".")]),se]),e("p",null,[t("For a full reference you can look at the documentation for "),e("a",ae,[t("VuePress"),o(n)]),t(" and the "),e("a",re,[t("Hope Theme"),o(n)]),t(".")]),le,e("p",null,[t("However you can also use "),de,t(" to feature files from a different section of the website or even files from outside the main site. We use this to include files which are maintained on the organization "),e("a",ce,[t(".github repo"),o(n)]),t(" for org-level documents.")]),he,e("p",null,[t("Assets should be uploaded to the "),e("a",ue,[t(".github repo"),o(n)]),t(" repository so they can be used org-wide.")]),pe,e("p",null,[t("You can also find a list of currently maintained preformatted containers for various purposes at "),e("a",me,[t("pulsar-edit.github.io/common-text-blocks.md"),o(n)]),t(".")]),e("p",null,[t("See "),e("a",be,[t("VuePress Hope documentation"),o(n)])]),fe,ge,ve,e("p",null,[t("This is a guide on how to add a blog post to the website which will be shown on "),e("a",we,[t("https://pulsar-edit.dev/article/"),o(n)]),t(".")]),e("p",null,[t("We are using the "),e("a",ye,[t("Vuepress Blog Plugin"),o(n)]),t(" which comes as part of our Vuepress Hope Theme with some light configuration to suit our purposes.")]),e("p",null,[t("This is all implemented in the main "),e("a",_e,[t("website repository"),o(n)]),t(".")]),ke,e("ul",null,[xe,e("li",null,[t("The rest of the post is just standard Markdown - we are currently only supporting the standard features as per the "),e("a",Te,[t("MDEnhance"),o(n)]),t(" plugin but if we need more features such as GFM then please discuss and we can look at adding it to the website.")]),je,Le]),e("p",null,[t("See "),e("a",Ae,[t("example post"),o(n)]),t(" with everything above.")]),Se,e("p",null,[t("See "),o(a,{to:"/docs/resources/website/#building-the-website"},{default:c(()=>[t("building")]),_:1})]),qe])}const Ne=r(h,[["render",Ie],["__file","index.html.vue"]]);export{Ne as default};