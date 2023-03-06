import{_ as r,o as s,c as i,a as e,b as a,d as n,e as t,r as c}from"./app.d3d44b5f.js";const l={},h=t('<h3 id="maintaining-your-packages" tabindex="-1"><a class="header-anchor" href="#maintaining-your-packages" aria-hidden="true">#</a> Maintaining Your Packages</h3><p>While publishing is, by far, the most common action you will perform when working with the packages you provide, there are other things you may need to do.</p><h4 id="publishing-a-package-manually" tabindex="-1"><a class="header-anchor" href="#publishing-a-package-manually" aria-hidden="true">#</a> Publishing a Package Manually</h4><div class="custom-container danger"><p class="custom-container-title">Warning</p><p><strong>Danger:</strong> \u{1F6A8} Publishing a package manually is not a recommended practice and is only for the advanced user who has published packages before. If you perform the steps wrong, you may be unable to publish the new version of your package and may have to completely unpublish your package in order to correct the faulty state. You have been warned.</p></div><p>Some people prefer to control every aspect of the package publishing process. Normally, the apm tool manages certain details during publishing to keep things consistent and make everything work smoothly. If you&#39;re one of those people that prefers to do things manually, there are certain steps you&#39;ll have to take in order to make things work just as smoothly as if apm has taken care of things for you.</p>',5),d={class:"custom-container note"},p=e("p",{class:"custom-container-title"},"Note",-1),u=e("strong",null,"Note:",-1),g={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},m=t('<p>When you have completed the changes that you want to publish and are ready to start the publishing process, you must perform the following steps on the <code>master</code> branch:</p><ol><li>Update the version number in your package&#39;s <code>package.json</code>. The version number <strong>must</strong> match the regular expression: <code>^\\d+\\.\\d+\\.\\d+</code></li><li>Commit the version number change</li><li>Create a Git tag referencing the above commit. The tag <strong>must</strong> match the regular expression <code>^v\\d+\\.\\d+\\.\\d+</code> and the part after the <code>v</code> <strong>must</strong> match the full text of the version number in the <code>package.json</code></li><li>Execute <code>git push --follow-tags</code></li><li>Execute <code>apm publish --tag tagname</code> where <code>tagname</code> <strong>must</strong> match the name of the tag created in the above step</li></ol><h4 id="adding-a-collaborator" tabindex="-1"><a class="header-anchor" href="#adding-a-collaborator" aria-hidden="true">#</a> Adding a Collaborator</h4>',3),b={href:"https://help.github.com/articles/adding-collaborators-to-a-personal-repository/",target:"_blank",rel:"noopener noreferrer"},y=e("em",null,"Note:",-1),f={href:"https://help.github.com/articles/creating-a-new-organization-account/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://help.github.com/articles/permission-levels-for-an-organization/",target:"_blank",rel:"noopener noreferrer"},v=e("h4",{id:"transferring-ownership",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transferring-ownership","aria-hidden":"true"},"#"),a(" Transferring Ownership")],-1),w=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"Warning"),e("p",null,[e("strong",null,"Danger:"),a(" \u{1F6A8} This is a permanent change. There is no going back! \u{1F6A8}")])],-1),_={href:"https://help.github.com/articles/transferring-a-repository/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"package.json",-1),T=t(`<h4 id="unpublish-your-package" tabindex="-1"><a class="header-anchor" href="#unpublish-your-package" aria-hidden="true">#</a> Unpublish Your Package</h4><p>If you no longer want to support your package and cannot find anyone to take it over, you can unpublish your package from https://atom.io. For example, if your package is named <code>package-name</code> then the command you would execute is:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm unpublish &lt;em&gt;package-name&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will remove your package from the https://atom.io package registry. Anyone who has already downloaded a copy of your package will still have it and be able to use it, but it will no longer be available for installation by others.</p><h5 id="unpublish-a-specific-version" tabindex="-1"><a class="header-anchor" href="#unpublish-a-specific-version" aria-hidden="true">#</a> Unpublish a Specific Version</h5><p>If you mistakenly published a version of your package or perhaps you find a glaring bug or security hole, you may want to unpublish just that version of your package. For example, if your package is named <code>package-name</code> and the bad version of your package is v1.2.3 then the command you would execute is:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm unpublish &lt;em&gt;package-name@1.2.3&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will remove just this particular version from the https://atom.io package registry.</p><h4 id="rename-your-package" tabindex="-1"><a class="header-anchor" href="#rename-your-package" aria-hidden="true">#</a> Rename Your Package</h4><p>If you need to rename your package for any reason, you can do so with one simple command \u2013 <code>apm publish --rename</code> changes the <code>name</code> field in your package&#39;s <code>package.json</code>, pushes a new commit and tag, and publishes your renamed package. Requests made to the previous name will be forwarded to the new name.</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm publish --rename &lt;em&gt;new-package-name&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p><strong>Tip:</strong> Once a package name has been used, it cannot be re-used by another package even if the original package is unpublished.</p></div>`,12);function I(N,j){const o=c("ExternalLinkIcon");return s(),i("div",null,[h,e("div",d,[p,e("p",null,[u,a(" The apm tool will only publish and https://atom.io will only list packages that are hosted on "),e("a",g,[a("GitHub"),n(o)]),a(", regardless of what process is used to publish them.")])]),m,e("p",null,[a("Some packages get too big for one person. Sometimes priorities change and someone else wants to help out. You can let others help or create co-owners by "),e("a",b,[a("adding them as a collaborator"),n(o)]),a(" on the GitHub repository for your package. "),y,a(" Anyone that has push access to your repository will have the ability to publish new versions of the package that belongs to that repository.")]),e("p",null,[a("You can also have packages that are owned by a "),e("a",f,[a("GitHub organization"),n(o)]),a(". Anyone who is a member of an organization's "),e("a",k,[a("team"),n(o)]),a(" which has push access to the package's repository will be able to publish new versions of the package.")]),v,w,e("p",null,[a("If you want to hand off support of your package to someone else, you can do that by "),e("a",_,[a("transferring the package's repository"),n(o)]),a(" to the new owner. Once you do that, they can publish a new version with the updated repository information in the "),x,a(".")]),T])}const Y=r(l,[["render",I],["__file","maintaining-your-packages.html.vue"]]);export{Y as default};
