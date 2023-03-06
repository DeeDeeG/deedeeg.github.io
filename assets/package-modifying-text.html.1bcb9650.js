import{_ as p,o as l,c as r,a,b as n,d as s,w as i,e as t,r as c}from"./app.d3d44b5f.js";const d={},u=a("h3",{id:"package-modifying-text",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#package-modifying-text","aria-hidden":"true"},"#"),n(" Package: Modifying Text")],-1),k={href:"https://en.wikipedia.org/wiki/ASCII_art",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                                     o888
    ooooooo     ooooooo     ooooooo   888
  888     888 888     888 888     888 888
  888         888     888 888     888 888
    88ooo888    88ooo88     88ooo88  o888o

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This should demonstrate how to do basic text manipulation in the current text buffer and how to deal with selections.</p><p>The final package can be viewed at https://github.com/atom/ascii-art.</p><h4 id="basic-text-insertion" tabindex="-1"><a class="header-anchor" href="#basic-text-insertion" aria-hidden="true">#</a> Basic Text Insertion</h4>`,4),m=a("kbd",{class:"platform-mac"},"Cmd+Shift+P",-1),v=a("kbd",{class:"platform-windows platform-linux"},"Ctrl+Shift+P",-1),g={href:"https://github.com/atom/command-palette",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"ascii-art",-1),f=t(`<p>Now let&#39;s edit the package files to make our ASCII Art package do something interesting. Since this package doesn&#39;t need any UI, we can remove all view-related code so go ahead and delete <code>lib/ascii-art-view.js</code>, <code>spec/ascii-art-view-spec.js</code>, and <code>styles/</code>.</p><p>Next, open up <code>lib/ascii-art.js</code> and remove all view code, so it looks like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> CompositeDisposable <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;atom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">subscriptions</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDisposable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
			atom<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;atom-workspace&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;ascii-art:convert&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">convert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">convert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Convert text!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="create-a-command" tabindex="-1"><a class="header-anchor" href="#create-a-command" aria-hidden="true">#</a> Create a Command</h5><p>Now let&#39;s add a command. You should namespace your commands with the package name followed by a <code>:</code> and then the name of the command. As you can see in the code, we called our command <code>ascii-art:convert</code> and we will define it to call the <code>convert()</code> method when it&#39;s executed.</p><p>So far, that will simply log to the console. Let&#39;s start by making it insert something into the text buffer.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">convert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> editor <span class="token operator">=</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>editor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),w=a("code",null,"atom.workspace.getActiveTextEditor()",-1),y=a("code",null,"convert()",-1),x={href:"https://atom.io/docs/api/latest/TextEditor#instance-insertText",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"insertText()",-1),q=t(`<h5 id="reload-the-package" tabindex="-1"><a class="header-anchor" href="#reload-the-package" aria-hidden="true">#</a> Reload the Package</h5><p>Before we can trigger <code>ascii-art:convert</code>, we need to load the latest code for our package by reloading the window. Run the command &quot;Window: Reload&quot; from the Command Palette or by pressing <kbd class="platform-mac">Alt+Cmd+Ctrl+L</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+F5</kbd>.</p><h5 id="trigger-the-command" tabindex="-1"><a class="header-anchor" href="#trigger-the-command" aria-hidden="true">#</a> Trigger the Command</h5><p>Now open the Command Palette and search for the &quot;Ascii Art: Convert&quot; command. But it&#39;s not there! To fix this, open <code>package.json</code> and find the property called <code>activationCommands</code>. Activation commands make Atom launch faster by allowing Atom to delay a package&#39;s activation until it&#39;s needed. So remove the existing command and use <code>ascii-art:convert</code> in <code>activationCommands</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;activationCommands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;atom-workspace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ascii-art:convert&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>First, reload the window by running the command &quot;Window: Reload&quot; from the command palette. Now when you run the &quot;Ascii Art: Convert&quot; command it will insert &quot;Hello, World!&quot; into the active editor, if any.</p><h5 id="add-a-key-binding" tabindex="-1"><a class="header-anchor" href="#add-a-key-binding" aria-hidden="true">#</a> Add a Key Binding</h5><p>Now let&#39;s add a key binding to trigger the <code>ascii-art:convert</code> command. Open <code>keymaps/ascii-art.json</code> and add a key binding linking <kbd class="platform-all">Alt+Ctrl+A</kbd> to the <code>ascii-art:convert</code> command. You can delete the pre-existing key binding since you won&#39;t need it anymore.</p><p>When finished, the file should look like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;atom-text-editor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ctrl-alt-a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ascii-art:convert&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now reload the window and verify that the key binding works.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><strong>Warning:</strong> The Atom keymap system is <em>case-sensitive</em>. This means that there is a distinction between <code>a</code> and <code>A</code> when creating keybindings. <code>a</code> means that you want to trigger the keybinding when you press <kbd class="platform-all">A</kbd>. But <code>A</code> means that you want to trigger the keybinding when you press <kbd class="platform-all">Shift+A</kbd>. You can also write <code>shift-a</code> when you want to trigger the keybinding when you press <kbd class="platform-all">Shift+A</kbd>.</p><p>We <strong>strongly</strong> recommend always using lowercase and explicitly spelling out when you want to include <kbd class="platform-all">Shift</kbd> in your keybindings.</p></div><h4 id="add-the-ascii-art" tabindex="-1"><a class="header-anchor" href="#add-the-ascii-art" aria-hidden="true">#</a> Add the ASCII Art</h4>`,13),A={href:"https://npmjs.org/package/figlet",target:"_blank",rel:"noopener noreferrer"},T={href:"https://npmjs.org/",target:"_blank",rel:"noopener noreferrer"},C=a("code",null,"package.json",-1),j=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;figlet&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.8&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After saving the file, run the command &quot;Update Package Dependencies: Update&quot; from the Command Palette. This will install the package&#39;s node module dependencies, only figlet in this case. You will need to run &quot;Update Package Dependencies: Update&quot; whenever you update the dependencies field in your <code>package.json</code> file.</p><p>If for some reason this doesn&#39;t work, you&#39;ll see a message saying &quot;Failed to update package dependencies&quot; and you will find a new <code>npm-debug.log</code> file in your directory. That file should give you some idea as to what went wrong.</p><p>Now require the figlet node module in <code>lib/ascii-art.js</code> and instead of inserting &quot;Hello, World!&quot;, convert the selected text to ASCII art.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">convert</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> editor <span class="token operator">=</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>editor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selection <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getSelectedText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> figlet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;figlet&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> font <span class="token operator">=</span> <span class="token string">&#39;o8&#39;</span>
    <span class="token function">figlet</span><span class="token punctuation">(</span>selection<span class="token punctuation">,</span> <span class="token punctuation">{</span>font<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> art</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>art<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now reload the editor, select some text in an editor window and press <kbd class="platform-all">Alt+Ctrl+A</kbd>. It should be replaced with a ridiculous ASCII art version instead.</p>`,6),I={href:"https://atom.io/docs/api/latest/TextEditor#instance-getSelectedText",target:"_blank",rel:"noopener noreferrer"},S=a("code",null,"editor.getSelectedText()",-1),N={href:"https://atom.io/docs/api/latest/TextEditor#instance-insertText",target:"_blank",rel:"noopener noreferrer"},W=a("code",null,"editor.insertText()",-1),P=a("h4",{id:"summary",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),n(" Summary")],-1),E=a("p",null,"In this section, we've made a UI-less package that takes selected text and replaces it with a processed version. This could be helpful in creating linters or checkers for your code.",-1);function B(R,L){const e=c("ExternalLinkIcon"),o=c("RouterLink");return l(),r("div",null,[u,a("p",null,[n("Now that we have our first package written, let's go through examples of other types of packages we can make. This section will guide you though creating a simple command that replaces the selected text with "),a("a",k,[n("ascii art"),s(e)]),n('. When you run our new command with the word "cool" selected, it will be replaced with:')]),h,a("p",null,[n("To begin, press "),m,v,n(" to bring up the "),a("a",g,[n("Command Palette"),s(e)]),n('. Type "generate package" and select the "Package Generator: Generate Package" command, just as we did in '),s(o,{to:"/hacking-atom/sections/package-word-count/#package-generator"},{default:i(()=>[n("the section on package generation")]),_:1}),n(". Enter "),b,n(" as the name of the package.")]),f,a("p",null,[n("As in "),s(o,{to:"/hacking-atom/sections/package-word-count/#counting-the-words"},{default:i(()=>[n("Counting Words")]),_:1}),n(", we're using "),w,n(" to get the object that represents the active text editor. If this "),y,n(" method is called when not focused on a text editor, nothing will happen.")]),a("p",null,[n("Next we insert a string into the current text editor with the "),a("a",x,[_,s(e)]),n(' method. This will insert the text wherever the cursor currently is in the current editor. If there are selections, it will replace all selections with the "Hello, World!" text.')]),q,a("p",null,[n("Now we need to convert the selected text to ASCII art. To do this we will use the "),a("a",A,[n("figlet"),s(e)]),n(" Node module from "),a("a",T,[n("npm"),s(e)]),n(". Open "),C,n(" and add the latest version of figlet to the dependencies:")]),j,a("p",null,[n("There are a couple of new things in this example we should look at quickly. The first is the "),a("a",I,[S,s(e)]),n(" which, as you might guess, returns the text that is currently selected.")]),a("p",null,[n("We then call the Figlet code to convert that into something else and replace the current selection with it with the "),a("a",N,[W,s(e)]),n(" call.")]),P,E])}const D=p(d,[["render",B],["__file","package-modifying-text.html.vue"]]);export{D as default};
