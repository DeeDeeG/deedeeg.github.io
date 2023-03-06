import{_ as e}from"./find-and-replace-newline.12d3be98.js";import{_ as n,o as t,c as i,e as a}from"./app.d3d44b5f.js";const l={},d=a(`<h3 id="how-do-i-use-a-newline-in-the-result-of-find-and-replace" tabindex="-1"><a class="header-anchor" href="#how-do-i-use-a-newline-in-the-result-of-find-and-replace" aria-hidden="true">#</a> How do I use a newline in the result of find and replace?</h3><p>To use a newline in the result of find and replace, enable the <code>Use Regex</code> option and use &quot;\\n&quot; in your replacement text. For example, given this text:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hello, world, goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you&#39;d like to replace the &quot;, &quot; with a newline so you end up with this text:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hello
world
goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the find and replace settings, enable <code>Use Regex</code>, enter &quot;, &quot; as the find text, and enter &quot;\\n&quot; as the replace text:</p><p><img src="`+e+'" alt="Find and replace with newline replace"></p><p>Then click <code>Find All</code> and finally, click <code>Replace All</code>.</p>',8),o=[d];function s(c,r){return t(),i("div",null,o)}const p=n(l,[["render",s],["__file","how-do-i-use-a-newline-in-the-result-of-find-and-replace.html.vue"]]);export{p as default};
