import{_ as s,a as i}from"./preview.5ef7c719.js";import{_ as r,o as l,c,a as t,b as e,d as o,e as n,r as p}from"./app.d3d44b5f.js";const d={},u=t("h2",{id:"writing-in-pulsar",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#writing-in-pulsar","aria-hidden":"true"},"#"),e(" Writing in Pulsar")],-1),h={href:"https://help.github.com/articles/about-writing-and-formatting-on-github/",target:"_blank",rel:"noopener noreferrer"},m=n('<p>In these docs, we&#39;ll concentrate on writing in Markdown; however, other prose markup languages like Asciidoc have packages that provide similar functionality.</p><h3 id="spell-checking" tabindex="-1"><a class="header-anchor" href="#spell-checking" aria-hidden="true">#</a> Spell Checking</h3><p>If you&#39;re working in text (which includes plain text files, GitHub markdown, and Git commit messages by default), Pulsar will automatically try to check your spelling.</p><p>Any misspelled words will be highlighted (by default with a dashed red line beneath the word), and you can pull up a menu of possible corrections by hitting <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+Shift+;</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+Shift+;</kbd> (or by choosing &quot;Correct Spelling&quot; from the right-click context menu or from the Command Palette).</p><p><img src="'+s+'" alt="Checking your spelling"></p><p>To add more types of files to the list of what Pulsar will try to spell check, go to the Spell Check package settings in your Settings view and add any grammars you want to spell check.</p><p>The default grammars to spell check are <code>text.plain</code>, <code>source.gfm</code>, <code>text.git-commit</code>, <code>source.asciidoc</code>, <code>source.rst</code>, and <code>text.restructuredtext</code> but you can add other grammars if you wish to check those types of files too.</p>',7),k={href:"https://github.com/pulsar-edit/spell-check",target:"_blank",rel:"noopener noreferrer"},g=n('<h3 id="previews" tabindex="-1"><a class="header-anchor" href="#previews" aria-hidden="true">#</a> Previews</h3><p>When writing prose in a markup language, it&#39;s often very useful to get an idea of what the content will look like when it&#39;s rendered. Pulsar ships with a package for previewing Markdown by default.</p><ul><li><kbd>Ctrl+Shift+M</kbd> - Will toggle Preview mode for Markdown.</li></ul><p><img src="'+i+'" alt="Preview your prose"></p><p>As you edit the text, the preview will also update automatically. This makes it fairly easy to check your syntax as you type.</p><p>You can also copy the rendered HTML from the preview pane into your system clipboard when the preview is focused and you press <strong><em>LNX</em></strong>: <kbd>Ctrl+Ins</kbd> - <strong><em>WIN</em></strong>: <kbd>Ctrl+C</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+C</kbd> or if you right-click in the preview pane and choose &quot;Copy as HTML&quot;.</p>',6),f={href:"https://github.com/pulsar-edit/markdown-preview",target:"_blank",rel:"noopener noreferrer"},b=n(`<h3 id="snippets" tabindex="-1"><a class="header-anchor" href="#snippets" aria-hidden="true">#</a> Snippets</h3><p>There are also a number of great snippets available for writing Markdown quickly.</p><p>If you type <code>img</code> and hit <code>tab</code> you get a Markdown-formatted image embed code like <code>![]()</code>. If you type <code>table</code> and hit <code>tab</code> you get a nice example table to fill out.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Header One </span><span class="token punctuation">|</span><span class="token table-header important"> Header Two </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:---------</span> <span class="token punctuation">|</span> <span class="token punctuation">:---------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> Item One   </span><span class="token punctuation">|</span><span class="token table-data"> Item Two   </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Although there are only a handful of Markdown snippets (<code>b</code> for bold, <code>i</code> for italic, <code>code</code> for a code block, etc), they save you from having to look up the more obscure syntaxes. Again, you can easily see a list of all available snippets for the type of file you&#39;re currently in by choosing <code>Snippets: Available</code> in the Command Palette.</p>`,5);function w(y,v){const a=p("ExternalLinkIcon");return l(),c("div",null,[u,t("p",null,[e("Though it is probably most common to use Pulsar to write software code, Pulsar can also be used to write prose quite effectively. Most often this is done in some sort of markup language such as Asciidoc or "),t("a",h,[e("Markdown"),o(a)]),e(" (in which this manual is written). Here we'll quickly cover a few of the tools Pulsar provides for helping you write prose.")]),m,t("p",null,[e("The spell checking is implemented in the "),t("a",k,[e("spell-check"),o(a)]),e(" package.")]),g,t("p",null,[e("Markdown preview is implemented in the "),t("a",f,[e("markdown-preview"),o(a)]),e(" package.")]),b])}const C=r(d,[["render",w],["__file","writing-in-pulsar.html.vue"]]);export{C as default};
