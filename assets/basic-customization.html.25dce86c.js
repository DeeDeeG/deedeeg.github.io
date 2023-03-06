import{_ as r}from"./menubar.a245fcf6.js";import{_ as l,a as c,b as p,c as d,d as u}from"./portable-mode-folder.5b21bf29.js";import{_ as h,o as m,c as g,a as e,b as s,d as n,w as f,e as o,r as t}from"./app.d3d44b5f.js";const y={},b=e("h3",{id:"basic-customization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basic-customization","aria-hidden":"true"},"#"),s(" Basic Customization")],-1),v=e("p",null,"Now that we are feeling comfortable with just about everything built into Atom, let's look at how to tweak it. Perhaps there is a keybinding that you use a lot but feels wrong or a color that isn't quite right for you. Atom is amazingly flexible, so let's go over some of the simpler flexes it can do.",-1),k=e("h4",{id:"configuring-with-cson",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuring-with-cson","aria-hidden":"true"},"#"),s(" Configuring with CSON")],-1),w=e("a",{href:"#style-tweaks"},"style sheet",-1),x=e("a",{href:"/hacking-atom/sections/the-init-file"},"Init Script",-1),_={href:"https://github.com/bevry/cson#what-is-cson",target:"_blank",rel:"noopener noreferrer"},S={href:"https://json.org/",target:"_blank",rel:"noopener noreferrer"},A=o(`<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">key</span><span class="token operator">:</span>
  <span class="token property">key</span><span class="token operator">:</span> value
  <span class="token property">key</span><span class="token operator">:</span> value
  <span class="token property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> value<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Objects are the backbone of any CSON file, and are delineated by indentation (as in the above example). A key&#39;s value can either be a String, a Number, an Object, a Boolean, <code>null</code>, or an Array of any of these data types.</p><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>Just like the more common JSON, CSON&#39;s keys can only be repeated once per object. If there are duplicate keys, then the last usage of that key overwrites all others, as if they weren&#39;t there. The same holds true for Atom&#39;s config files.</p><p><strong>Don&#39;t do this:</strong></p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token comment"># Only the second snippet will be loaded</span>
<span class="token string-property property">&#39;.source.js&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;console.log&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;prefix&#39;</span><span class="token operator">:</span> <span class="token string">&#39;log&#39;</span>
    <span class="token string-property property">&#39;body&#39;</span><span class="token operator">:</span> <span class="token string">&#39;console.log(\${1:&quot;crash&quot;});$2&#39;</span>
<span class="token string-property property">&#39;.source.js&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;console.error&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;prefix&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
    <span class="token string-property property">&#39;body&#39;</span><span class="token operator">:</span> <span class="token string">&#39;console.error(\${1:&quot;crash&quot;});$2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Use this instead:</strong></p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token comment"># Both snippets will be loaded</span>
<span class="token string-property property">&#39;.source.js&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;console.log&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;prefix&#39;</span><span class="token operator">:</span> <span class="token string">&#39;log&#39;</span>
    <span class="token string-property property">&#39;body&#39;</span><span class="token operator">:</span> <span class="token string">&#39;console.log(\${1:&quot;crash&quot;});$2&#39;</span>
  <span class="token string-property property">&#39;console.error&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;prefix&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
    <span class="token string-property property">&#39;body&#39;</span><span class="token operator">:</span> <span class="token string">&#39;console.error(\${1:&quot;crash&quot;});$2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="style-tweaks" tabindex="-1"><a class="header-anchor" href="#style-tweaks" aria-hidden="true">#</a> Style Tweaks</h4><p>If you want to apply quick-and-dirty personal styling changes without creating an entire theme that you intend to publish, you can add styles to the <code>styles.less</code> file in your <span class="platform-mac platform-linux"><code>~/.atom</code></span><span class="platform-windows"><code>%USERPROFILE%\\.atom</code></span> directory. You can open this file in an editor from the <span class="platform-mac"><em>Atom &gt; Stylesheet</em></span><span class="platform-windows"><em>File &gt; Stylesheet</em></span><span class="platform-linux"><em>Edit &gt; Stylesheet</em></span> menu.</p>`,5),C=e("p",null,[e("img",{src:r,alt:"Stylesheet",title:"Stylesheet..."})],-1),T=o(`<p>For example, to change the colors of the Status Bar, you could add the following rule to your <code>styles.less</code> file:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.status-bar</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The easiest way to see what classes are available to style is to inspect the DOM manually via the Developer Tools. We&#39;ll go over the Developer Tools in great detail in the next chapter, but for now let&#39;s take a simple look. You can open the Developer Tools by pressing <kbd class="platform-mac">Alt+Cmd+I</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+I</kbd>, which will bring up the Chromium Developer Tools panel.</p><p><img src="`+l+'" alt="Developer Tools" title="Developer Tools"></p><p>With the Developer Tools, you can inspect all the elements in Atom. If you want to update the style of something, you can figure out what classes it has and add a Less rule to your stylesheet to modify it.</p>',5),z={class:"custom-container tip"},I=e("p",{class:"custom-container-title"},"Tip",-1),L={href:"http://www.lesscss.org",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,[s("If you prefer to use CSS instead, you can do that in the same "),e("code",null,"styles.less"),s(" file, since CSS is also valid in Less.")],-1),F=o(`<h4 id="customizing-keybindings" tabindex="-1"><a class="header-anchor" href="#customizing-keybindings" aria-hidden="true">#</a> Customizing Keybindings</h4><p>Atom keymaps work similarly to stylesheets. Just as stylesheets use selectors to apply styles to elements, Atom keymaps use selectors to associate key combinations with events in specific contexts. Here&#39;s a small example, excerpted from Atom&#39;s built-in keymap:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token string-property property">&#39;atom-text-editor&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;enter&#39;</span><span class="token operator">:</span> <span class="token string">&#39;editor:newline&#39;</span>

<span class="token string-property property">&#39;atom-text-editor[mini] input&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;enter&#39;</span><span class="token operator">:</span> <span class="token string">&#39;core:confirm&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This keymap defines the meaning of <kbd class="platform-all">Enter</kbd> in two different contexts. In a normal editor, pressing <kbd class="platform-all">Enter</kbd> triggers the <code>editor:newline</code> command, which causes the editor to insert a newline. But if the same keystroke occurs inside a select list&#39;s mini-editor, it instead triggers the <code>core:confirm</code> command based on the binding in the more-specific selector.</p><p>By default, <code>keymap.cson</code> is loaded when Atom is started. It will always be loaded last, giving you the chance to override bindings that are defined by Atom&#39;s core keymaps or third-party packages. You can open this file in an editor from the <span class="platform-mac"><em>Atom &gt; Keymap</em></span><span class="platform-windows"><em>File &gt; Keymap</em></span><span class="platform-linux"><em>Edit &gt; Keymap</em></span> menu.</p><p>You can see all the keybindings that are currently configured in your installation of Atom in the Keybindings tab in the Settings View.</p><p>If you run into problems with keybindings, the Keybinding Resolver is a huge help. It can be opened with the <kbd class="platform-mac">Cmd+.</kbd><kbd class="platform-windows platform-linux">Ctrl+.</kbd> key combination. It will show you what keys Atom saw you press and what command Atom executed because of that combination.</p><h4 id="global-configuration-settings" tabindex="-1"><a class="header-anchor" href="#global-configuration-settings" aria-hidden="true">#</a> Global Configuration Settings</h4><p>Atom loads configuration settings from the <code>config.cson</code> file in your <span class="platform-mac platform-linux"><code>~/.atom</code></span><span class="platform-windows"><code>%USERPROFILE%\\.atom</code></span> directory.</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;core&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;excludeVcsIgnoredPaths&#39;</span><span class="token operator">:</span> <span class="token keyword">true</span>
  <span class="token string-property property">&#39;editor&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;fontSize&#39;</span><span class="token operator">:</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The configuration is grouped into global settings under the <code>*</code> key and language-specific settings under scope named keys like <code>.python.source</code> or <code>.html.text</code>. Underneath that, you&#39;ll find configuration settings grouped by package name or one of the two core namespaces: <code>core</code> or <code>editor</code>.</p><p>You can open this file in an editor from the <span class="platform-mac"><em>Atom &gt; Config</em></span><span class="platform-windows"><em>File &gt; Config</em></span><span class="platform-linux"><em>Edit &gt; Config</em></span> menu.</p><h5 id="configuration-key-reference" tabindex="-1"><a class="header-anchor" href="#configuration-key-reference" aria-hidden="true">#</a> Configuration Key Reference</h5><ul><li><code>core</code><ul><li><code>customFileTypes</code>: Associations of language scope to file extensions (see <a href="#customizing-language-recognition">Customizing Language Recognition</a>)</li><li><code>disabledPackages</code>: An array of package names to disable</li><li><code>excludeVcsIgnoredPaths</code>: Don&#39;t search within files specified by <code>.gitignore</code></li><li><code>ignoredNames</code>: File names to ignore across all of Atom</li><li><code>projectHome</code>: The directory where projects are assumed to be located</li><li><code>themes</code>: An array of theme names to load, in cascading order</li></ul></li><li><code>editor</code><ul><li><code>autoIndent</code>: Enable/disable basic auto-indent (defaults to <code>true</code>)</li><li><code>nonWordCharacters</code>: A string of non-word characters to define word boundaries</li><li><code>fontSize</code>: The editor font size</li><li><code>fontFamily</code>: The editor font family</li><li><code>invisibles</code>: A hash of characters Atom will use to render whitespace characters. Keys are whitespace character types, values are rendered characters (use value <code>false</code> to turn off individual whitespace character types) <ul><li><code>tab</code>: Hard tab characters</li><li><code>cr</code>: Carriage return (for Microsoft-style line endings)</li><li><code>eol</code>: <code>\\n</code> characters</li><li><code>space</code>: Leading and trailing space characters</li></ul></li><li><code>lineHeight</code>: Height of editor lines, as a multiplier of font size</li><li><code>preferredLineLength</code>: Identifies the length of a line (defaults to <code>80</code>)</li><li><code>showInvisibles</code>: Whether to render placeholders for invisible characters (defaults to <code>false</code>)</li><li><code>showIndentGuide</code>: Show/hide indent indicators within the editor</li><li><code>showLineNumbers</code>: Show/hide line numbers within the gutter</li><li><code>softWrap</code>: Enable/disable soft wrapping of text within the editor</li><li><code>softWrapAtPreferredLineLength</code>: Enable/disable soft line wrapping at <code>preferredLineLength</code></li><li><code>tabLength</code>: Number of spaces within a tab (defaults to <code>2</code>)</li></ul></li><li><code>fuzzyFinder</code><ul><li><code>ignoredNames</code>: Files to ignore <em>only</em> in the fuzzy-finder</li></ul></li><li><code>whitespace</code><ul><li><code>ensureSingleTrailingNewline</code>: Whether to reduce multiple newlines to one at the end of files</li><li><code>removeTrailingWhitespace</code>: Enable/disable stripping of whitespace at the end of lines (defaults to <code>true</code>)</li></ul></li><li><code>wrap-guide</code><ul><li><code>columns</code>: Array of hashes with a <code>pattern</code> and <code>column</code> key to match the path of the current editor to a column position.</li></ul></li></ul><h4 id="language-specific-configuration-settings" tabindex="-1"><a class="header-anchor" href="#language-specific-configuration-settings" aria-hidden="true">#</a> Language Specific Configuration Settings</h4><p>You can also set several configuration settings differently for different file types. For example, you may want Atom to soft wrap markdown files, have two-space tabs for ruby files, and four-space tabs for python files.</p><p>There are several settings now scoped to an editor&#39;s language. Here is the current list:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>editor.autoIndent
editor.autoIndentOnPaste
editor.invisibles
editor.nonWordCharacters
editor.preferredLineLength
editor.scrollPastEnd
editor.showIndentGuide
editor.showInvisibles
editor.softWrap
editor.softWrapAtPreferredLineLength
editor.softWrapHangingIndent
editor.tabLength
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="language-specific-settings-in-the-settings-view" tabindex="-1"><a class="header-anchor" href="#language-specific-settings-in-the-settings-view" aria-hidden="true">#</a> Language-specific Settings in the Settings View</h5><p>You can edit these config settings in the Settings View on a per-language basis. Click on &quot;Packages&quot; tab in the navigation bar on the left, search for the language of your choice, select it, and edit away!</p><p><img src="`+c+`" alt="Python-specific settings" title="Python-specific settings"></p><h5 id="language-specific-settings-in-your-config-file" tabindex="-1"><a class="header-anchor" href="#language-specific-settings-in-your-config-file" aria-hidden="true">#</a> Language-specific Settings in your Config File</h5><p>You can also edit the <code>config.cson</code> directly. To open your configuration file via the Command Palette, press <kbd class="platform-mac">Cmd+Shift+P</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+P</kbd> type <code>open config</code>, and press <kbd class="platform-all">Enter</kbd>.</p><p>Global settings are under the <code>*</code> key, and each language can have its own top-level key. This key is the language&#39;s scope. Language-specific settings take precedence over anything set in the global section for that language only.</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span> <span class="token comment"># all languages unless overridden</span>
  <span class="token string-property property">&#39;editor&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;softWrap&#39;</span><span class="token operator">:</span> <span class="token keyword">false</span>
    <span class="token string-property property">&#39;tabLength&#39;</span><span class="token operator">:</span> <span class="token number">8</span>

<span class="token string-property property">&#39;.source.gfm&#39;</span><span class="token operator">:</span> <span class="token comment"># markdown overrides</span>
  <span class="token string-property property">&#39;editor&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;softWrap&#39;</span><span class="token operator">:</span> <span class="token keyword">true</span>

<span class="token string-property property">&#39;.source.ruby&#39;</span><span class="token operator">:</span> <span class="token comment"># ruby overrides</span>
  <span class="token string-property property">&#39;editor&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;tabLength&#39;</span><span class="token operator">:</span> <span class="token number">2</span>

<span class="token string-property property">&#39;.source.python&#39;</span><span class="token operator">:</span> <span class="token comment"># python overrides</span>
  <span class="token string-property property">&#39;editor&#39;</span><span class="token operator">:</span>
    <span class="token string-property property">&#39;tabLength&#39;</span><span class="token operator">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="finding-a-language-s-scope-name" tabindex="-1"><a class="header-anchor" href="#finding-a-language-s-scope-name" aria-hidden="true">#</a> Finding a Language&#39;s Scope Name</h5><p>In order to write these overrides effectively, you&#39;ll need to know the scope name for the language. We&#39;ve already done this for finding a scope for writing a snippet in <a href="/using-atom/sections/snippets#snippet-format">Snippet Format</a>, but we can quickly cover it again.</p><p>The scope name is shown in the settings view for each language. Click on &quot;Packages&quot; in the navigation on the left, search for the language of your choice, select it, and you should see the scope name under the language name heading:</p><p><img src="`+p+'" alt="Finding a language grammar" title="Finding a grammar&#39;s scope name"></p><p>Another way to find the scope for a specific language is to open a file of its kind and <span class="platform-mac">press <kbd class="platform-mac">Alt+Cmd+P</kbd></span><span class="platform-windows platform-linux">choose &quot;Editor: Log Cursor Scope&quot; in the Command Palette</span> to show all scopes for the current position of the cursor. The scope mentioned top most is always the language for this kind of file, the scopes following are specific to the cursor position:</p><p><img src="'+d+`" alt="Finding a language grammar with cursor scope" title="Finding a language grammar with cursor scope"></p><p>These scopes can be especially useful to style the editor, since they can also be used as class names in your stylesheet.</p><h4 id="customizing-language-recognition" tabindex="-1"><a class="header-anchor" href="#customizing-language-recognition" aria-hidden="true">#</a> Customizing Language Recognition</h4><p>If you want Atom to always recognize certain file types as a specific grammar, you&#39;ll need to manually edit your <code>config.cson</code> file. You can open it using the <em>Application: Open Your Config</em> command from the Command Palette. For example, if you wanted to add the <code>foo</code> extension to the CoffeeScript language, you could add this to your configuration file under the <code>*.core</code> section:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span>
  <span class="token property">core</span><span class="token operator">:</span>
    <span class="token property">customFileTypes</span><span class="token operator">:</span>
      <span class="token string-property property">&#39;source.coffee&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;foo&#39;</span>
      <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the example above, <code>source.coffee</code> is the language&#39;s scope name (see <a href="#finding-a-languages-scope-name">Finding a Language&#39;s Scope Name</a> for more information) and <code>foo</code> is the file extension to match without the period. Adding a period to the beginning of either of these will not work.</p><h4 id="controlling-where-customization-is-stored-to-simplify-your-workflow" tabindex="-1"><a class="header-anchor" href="#controlling-where-customization-is-stored-to-simplify-your-workflow" aria-hidden="true">#</a> Controlling Where Customization is Stored to Simplify Your Workflow</h4><p>The CSON configuration files for Atom are stored on disk on your machine. The location for this storage is customizable. The default is to use the home directory of the user executing the application. The Atom Home directory will, by default, be called <code>.atom</code> and will be located in the root of the home directory of the user.</p><h5 id="custom-home-location-with-an-environment-variable" tabindex="-1"><a class="header-anchor" href="#custom-home-location-with-an-environment-variable" aria-hidden="true">#</a> Custom home location with an environment variable</h5><p>An environment variable can be used to make Atom use a different location. This can be useful for several reasons. One of these may be that multiple user accounts on a machine want to use the same Atom Home. The environment variable used to specify an alternate location is called <code>ATOM_HOME</code>. If this environment variable exists, the location specified will be used to load and store Atom settings.</p><h5 id="taking-your-customization-with-you-with-portable-mode" tabindex="-1"><a class="header-anchor" href="#taking-your-customization-with-you-with-portable-mode" aria-hidden="true">#</a> Taking your customization with you with Portable Mode</h5><p>In addition to using the <code>ATOM_HOME</code> environment variable, Atom can also be set to use &quot;Portable Mode&quot;.</p><p>Portable Mode is most useful for taking Atom with you, with all your custom setting and packages, from machine to machine. This may take the form of keeping Atom on a USB drive or a cloud storage platform that syncs folders to different machines, like Dropbox. Atom is in Portable Mode when there is a directory named .atom sibling to the directory in which the atom executable file lives. For example, the installed Atom directory can be placed into a Dropbox folder next to a .atom folder.</p><p><img src="`+u+`" alt="Portable mode directory structure"></p><p>With such a setup, Atom will use the same Home directory with the same settings for any machine with this directory syncronized/plugged in.</p><h5 id="moving-to-portable-mode" tabindex="-1"><a class="header-anchor" href="#moving-to-portable-mode" aria-hidden="true">#</a> Moving to Portable Mode</h5><p>Atom provides a command-line parameter option for setting Portable Mode.</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --portable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Executing atom with the <code>--portable</code> option will take the <code>.atom</code> directory you have in the default location (<code>~/.atom</code>) and copy the relevant contents for your configuration to a new home directory in the Portable Mode location. This enables easily moving from the default location to a portable operation without losing the customization you have already set up.</p>`,49);function N(O,E){const a=t("ExternalLinkIcon"),i=t("Tabs");return m(),g("div",null,[b,v,k,e("p",null,[s("All of Atom's config files (with the exception of your "),w,s(" and your "),x,s(") are written in CSON, short for "),e("a",_,[s("CoffeeScript Object Notation"),n(a)]),s(". Just like its namesake JSON, "),e("a",S,[s("JavaScript Object Notation"),n(a)]),s(", CSON is a text format for storing structured data in the form of simple objects made up of key-value pairs.")]),A,n(i,{id:"35",data:[{title:"Mac"}],"tab-id":"basic-customization"},{tab0:f(({title:q,value:W,isActive:M})=>[C]),_:1}),T,e("div",z,[I,e("p",null,[s("If you are unfamiliar with Less, it is a basic CSS preprocessor that makes some things in CSS a bit easier. You can learn more about it at "),e("a",L,[s("lesscss.org"),n(a)]),s(".")]),P]),F])}const Y=h(y,[["render",N],["__file","basic-customization.html.vue"]]);export{Y as default};
