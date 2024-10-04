import{_ as s,o as n,c as e,d as a}from"./app-572c54b3.js";const i={},l=a(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h2 id="使用vuepress-reco-theme-cli-脚手架搭建" tabindex="-1"><a class="header-anchor" href="#使用vuepress-reco-theme-cli-脚手架搭建" aria-hidden="true">#</a> 使用vuepress-reco/theme-cli 脚手架搭建</h2><p><strong>npx</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
npx @vuepress-reco/theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化，并选择 2.x</span>
<span class="token function">yarn</span> global <span class="token function">add</span> @vuepress-reco/theme-cli@1.0.7
theme-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vuepress2-x搭建" tabindex="-1"><a class="header-anchor" href="#使用vuepress2-x搭建" aria-hidden="true">#</a> 使用vuepress2.x搭建</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建并进入一个新目录</span>
<span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化package.json</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 vuepress</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next
<span class="token comment"># 安装打包工具和主题</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next @vuepress/theme-default@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 docs 目录和 docs/.vuepress 目录</span>
<span class="token function">mkdir</span> docs
<span class="token function">mkdir</span> docs/.vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 VuePress 配置文件 docs/.vuepress/config.js</span>
<span class="token function">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> from <span class="token string">&#39;vuepress&#39;</span>

<span class="token builtin class-name">export</span> default defineUserConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler: viteBundler<span class="token punctuation">(</span><span class="token punctuation">)</span>,
  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">)</span>,
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建你的第一篇文档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建完成后，项目目录结构应该是这样的：</span>
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 package.json 中添加一些 scripts</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,
    <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行 dev 脚本可以启动开发服务器:</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运运行 build 脚本构建网站:</span>
<span class="token function">npm</span> run build
<span class="token comment"># 在 docs/.vuepress/dist 目录中可以找到构建生成的静态文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[l];function d(t,r){return n(),e("div",null,c)}const u=s(i,[["render",d],["__file","createBlog.html.vue"]]);export{u as default};
