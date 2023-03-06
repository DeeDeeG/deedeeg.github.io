import{_ as s,o,c as t,a as n,b as e,d as i,e as c,r}from"./app.d3d44b5f.js";const l={},p=c(`<h3 id="how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y" tabindex="-1"><a class="header-anchor" href="#how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y" aria-hidden="true">#</a> How do I make Atom recognize a file with extension X as language Y?</h3><p>Atom includes a feature called &quot;custom file types&quot; which you can use by adding some entries into your <code>config.cson</code> that look like this:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">core</span><span class="token operator">:</span>
  <span class="token property">customFileTypes</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;source.ruby&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;Cheffile&#39;</span>
      <span class="token string">&#39;this-is-also-ruby&#39;</span>
    <span class="token punctuation">]</span>
    <span class="token string-property property">&#39;source.cpp&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;h&#39;</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=n("code",null,"source.ruby",-1),u={href:"http://flight-manual.atom.io/using-atom/sections/basic-customization/#finding-a-languages-scope-name",target:"_blank",rel:"noopener noreferrer"};function m(h,g){const a=r("ExternalLinkIcon");return o(),t("div",null,[p,n("p",null,[e("The key (for example "),d,e(" in the above snippet) is the language's "),n("a",u,[e("scope name"),i(a)]),e(". The value is an array of file extensions, without the period, to match to that scope name.")])])}const k=s(l,[["render",m],["__file","how-do-i-make-atom-recognize-a-file-with-extension-x-as-language-y.html.vue"]]);export{k as default};
