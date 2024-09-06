import{_ as s,o as n,c as a,d as e}from"./app-4af9f679.js";const t={},p=e(`<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h2 id="vuepress2-x" tabindex="-1"><a class="header-anchor" href="#vuepress2-x" aria-hidden="true">#</a> vuepress2.x</h2><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装element-plus</span>
<span class="token function">npm</span> <span class="token function">install</span> element-plus <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>vuepress2.x开始文件名enhanceApp.js更改为client.js，在/docs/.vuepress文件夹中新建client.js文件，写入以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/client&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> ElementPlus from <span class="token string">&#39;element-plus&#39;</span>
<span class="token comment"># import &#39;./styles/index.scss&#39;</span>
<span class="token function">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token builtin class-name">export</span> default defineClientConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
  enhance<span class="token punctuation">(</span><span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app.use<span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ElementPlus配置好后，这里再给一个简单的使用例子。 在/docs/.vuepress/components/com2021（/.vuepress/components/com2021）文件夹中创建sampleExample.vue文件。文件内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token assign-left variable">class</span><span class="token operator">=</span><span class="token string">&quot;mb-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button<span class="token operator">&gt;</span>Default<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>Primary<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;success&quot;</span><span class="token operator">&gt;</span>Success<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;info&quot;</span><span class="token operator">&gt;</span>Info<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;warning&quot;</span><span class="token operator">&gt;</span>Warning<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;danger&quot;</span><span class="token operator">&gt;</span>Danger<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;ts&quot;</span> setup<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在markdown文章中使用是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用ElementPlus的简单例子</span>
<span class="token operator">&lt;</span>com2021-sampleExample /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以在markdown文章中直接使用ElementPlus组件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用ElementPlus的简单例子</span>
<span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>主要按钮<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress1-x" tabindex="-1"><a class="header-anchor" href="#vuepress1-x" aria-hidden="true">#</a> vuepress1.x</h2><p><strong>npm</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装element-plus</span>
<span class="token function">npm</span> i element-ui <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在/docs/.vuepress文件夹中新建enhanceApp.js文件，写入以下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">import</span> ElementUI from <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">(</span><span class="token punctuation">{</span>
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  Vue.use<span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ElementUI配置好后。这里再给一个简单的使用例子。 在/docs/.vuepress/components/com2021文件夹中创建sampleExample.vue文件。文件内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el-input v-model<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span> <span class="token assign-left variable">placeholder</span><span class="token operator">=</span><span class="token string">&quot;请输入内容&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/el-input<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>主要按钮<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  name: <span class="token string">&#39;sampleExample&#39;</span>,
  <span class="token function-name function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
      abc: <span class="token string">&quot;你好&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在markdown文章中使用是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用ElementUI的简单例子</span>
<span class="token operator">&lt;</span>com2021-sampleExample /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以在markdown文章中直接使用ElementUI组件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用ElementUI的简单例子</span>
<span class="token operator">&lt;</span>el-button <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>主要按钮<span class="token operator">&lt;</span>/el-button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=[p];function o(i,r){return n(),a("div",null,l)}const u=s(t,[["render",o],["__file","useelementPlus.html.vue"]]);export{u as default};
