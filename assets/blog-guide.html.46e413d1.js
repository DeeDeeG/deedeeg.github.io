const e=JSON.parse(`{"key":"v-c8081340","path":"/docs/resources/website/sections/blog-guide.html","title":"","lang":"en-US","frontmatter":{},"excerpt":"<h2 id=\\"blog-guide\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#blog-guide\\" aria-hidden=\\"true\\">#</a> Blog guide</h2>\\n<p>This is a guide on how to add a blog post to the website which will be shown on\\n<a href=\\"https://pulsar-edit.dev/article/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://pulsar-edit.dev/article/<ExternalLinkIcon/></a>.</p>\\n<p>We are using the <a href=\\"https://vuepress-theme-hope.github.io/v2/blog/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Vuepress Blog Plugin<ExternalLinkIcon/></a>\\nwhich comes as part of our Vuepress Hope Theme with some light configuration\\nto suit our purposes.</p>\\n<p>This is all implemented in the main <a href=\\"https://github.com/pulsar-edit/pulsar-edit.github.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">website repository<ExternalLinkIcon/></a>.</p>\\n<h3 id=\\"writing-a-new-post\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#writing-a-new-post\\" aria-hidden=\\"true\\">#</a> Writing a new post</h3>\\n<ul>\\n<li>Create a new .md file in <a href=\\"pulsar-edit.github.io/docs/blog\\">pulsar-edit.github.io/docs/blog</a>.\\n<ul>\\n<li>This file should be named <code v-pre>YYYYMMDD-&lt;author&gt;-&lt;title&gt;.md</code> e.g <code v-pre>20221031-CreativeUsername-ThisIsMyBlogPost.md</code></li>\\n</ul>\\n</li>\\n<li>The metadata displayed on the website is dependent on a number of items that\\nare configured in the YAML frontmatter of the file. You may in theory omit any of these except the title\\nfield but it's strongly recommend that you use <code v-pre>title</code>, <code v-pre>author</code>, <code v-pre>date</code>, <code v-pre>category</code>\\nand <code v-pre>tag</code> as the minimum as the others will default to false.\\n<ul>\\n<li>Frontmatter items supported currently are:\\n<ul>\\n<li><code v-pre>title</code> - <em>String</em>: The displayed title of the post, consider this as <code v-pre>H1</code></li>\\n<li><code v-pre>author</code> - <em>String</em>: The name of the author to be displayed.</li>\\n<li><code v-pre>date</code> - <em>Date (ISO 8601)</em>: Allows display of date as well as enabling\\nsorting on the timeline, set to the same as your filename date but with\\nhyphens (e.g. <code v-pre>2022-10-31</code>).</li>\\n<li><code v-pre>category</code> - <em>String (multiline)</em>: Enables filtering by category, this should be based on the\\nsubject of the post e.g. <code v-pre>release</code>, <code v-pre>dev log</code>, <code v-pre>announcement</code>. This is a\\nmultiline field if you want to set more than one category.</li>\\n<li><code v-pre>tag</code> - <em>String (multiline)</em>: Enables filtering by tags, this should be based on the content of\\nthe post and areas it touches on e.g. <code v-pre>website</code>, <code v-pre>editor</code>, <code v-pre>config</code>.</li>\\n<li><code v-pre>sticky</code> - <em>Bool</em>: Enables &quot;pinning&quot; on the</li>\\n<li><code v-pre>star</code> - <em>Bool</em>: Enables use of the <code v-pre>star</code> category for any important articles\\nwe want to remain visible.</li>\\n<li><code v-pre>article</code> - <em>Bool</em>: You probably won't want to use this but setting this to <code v-pre>false</code>\\nwill exclude this page from appearing. This is set on the &quot;example&quot; blog\\npost intentionally.</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>An excerpt can be added to the post by creating an html comment \`</li>\\n</ul>\\n","headers":[{"level":2,"title":"Blog guide","slug":"blog-guide","link":"#blog-guide","children":[{"level":3,"title":"Writing a new post","slug":"writing-a-new-post","link":"#writing-a-new-post","children":[]},{"level":3,"title":"Testing locally","slug":"testing-locally","link":"#testing-locally","children":[]},{"level":3,"title":"Website \\"Blog\\" page(s)","slug":"website-blog-page-s","link":"#website-blog-page-s","children":[]},{"level":3,"title":"Questions? Suggestions","slug":"questions-suggestions","link":"#questions-suggestions","children":[]}]}],"git":{"createdTime":1668356740000,"updatedTime":1668606927000,"contributors":[{"name":"Daeraxa","email":"58074586+Daeraxa@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.51,"words":754},"filePathRelative":"docs/resources/website/sections/blog-guide.md","localizedDate":"November 13, 2022"}`);export{e as data};