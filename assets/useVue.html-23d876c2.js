import{_ as n,o as s,c as a,d as e}from"./app-4af9f679.js";const t={},i=e(`<h2 id="使用vuepress-reco-theme-cli脚手架-或者-vuepress1-x-搭建" tabindex="-1"><a class="header-anchor" href="#使用vuepress-reco-theme-cli脚手架-或者-vuepress1-x-搭建" aria-hidden="true">#</a> 使用vuepress-reco/theme-cli脚手架 或者 vuepress1.x 搭建</h2><p>上述方式搭建的工程已经默认在全局注册了components下的所有.vue文件, 可在在markdown文章中使用, 在/docs/.vuepress/components/com2021(/.vuepress/components/com2021) 文件夹中创建sampleExample.vue文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span> abc + <span class="token number">456</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  name: <span class="token string">&#39;sampleExample&#39;</span>,
  <span class="token function-name function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
      abc: <span class="token number">123</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在markdown文章中使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用vue的简单例子</span>
<span class="token operator">&lt;</span>com2021-sampleExample /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vuepress2-x-方式搭建" tabindex="-1"><a class="header-anchor" href="#使用vuepress2-x-方式搭建" aria-hidden="true">#</a> 使用vuepress2.x 方式搭建</h2><p>vuepress2.x开始将不再全局注册components下的所有.vue文件，需要手动注册。在/docs/.vuepress/config.js文件中使用插件方式注册：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装@vuepress/plugin-register-components@next</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-register-components@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>/docs/.vuepress/config.js文件中写入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> from <span class="token string">&#39;vuepress&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> registerComponentsPlugin <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/plugin-register-components&#39;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> getDirname, path <span class="token punctuation">}</span> from <span class="token string">&#39;vuepress/utils&#39;</span>

const __dirname <span class="token operator">=</span> getDirname<span class="token punctuation">(</span>i<wbr>mport.meta.url<span class="token punctuation">)</span>

<span class="token builtin class-name">export</span> default defineUserConfig<span class="token punctuation">(</span><span class="token punctuation">{</span>
  bundler: viteBundler<span class="token punctuation">(</span><span class="token punctuation">)</span>,
  theme: defaultTheme<span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      logo: <span class="token string">&#39;/head.png&#39;</span>,
      // 默认主题配置
      navbar: <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> text: <span class="token string">&quot;首页&quot;</span>, link: <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span> text: <span class="token string">&quot;文档&quot;</span>, link: <span class="token string">&quot;/2022/home&quot;</span> <span class="token punctuation">}</span>,
        // <span class="token punctuation">{</span>
        //   text: <span class="token string">&quot;codinglin 的博客&quot;</span>,
        //   items: <span class="token punctuation">[</span>
        //     <span class="token punctuation">{</span> text: <span class="token string">&quot;掘金&quot;</span>, link: <span class="token string">&quot;https://juejin.cn/user/726107228492253&quot;</span> <span class="token punctuation">}</span>,
        //     <span class="token punctuation">{</span> text: <span class="token string">&quot;Github&quot;</span>, link: <span class="token string">&quot;https://github.com/coding-lin&quot;</span> <span class="token punctuation">}</span>
        //   <span class="token punctuation">]</span>
        // <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>,
      sidebar: <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> text: <span class="token string">&quot;关于我&quot;</span>, link: <span class="token string">&quot;/self-introduction&quot;</span> <span class="token punctuation">}</span>,
          // <span class="token punctuation">{</span>
          //   text: <span class="token string">&#39;2023年&#39;</span>,
          //   children: <span class="token punctuation">[</span><span class="token string">&#39;/docs/2022/theme&#39;</span>, <span class="token string">&#39;usage&#39;</span><span class="token punctuation">]</span>,
          //   collapsible: <span class="token boolean">true</span> // 默认展开，true 为折叠
          // <span class="token punctuation">}</span>,
          <span class="token punctuation">{</span>
            text: <span class="token string">&#39;2022年&#39;</span>,
            // prefix: <span class="token string">&#39;2022/&#39;</span>,
            children: <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text: <span class="token string">&#39;微信小程序从注册到上线发布&#39;</span>,
                link: <span class="token string">&quot;/2022/home&quot;</span>,
              <span class="token punctuation">}</span>,
              <span class="token punctuation">{</span>
                text: <span class="token string">&#39;css旋转动画&#39;</span>,
                link: <span class="token string">&quot;/2022/cssRotate&quot;</span>
              <span class="token punctuation">}</span>,
              <span class="token punctuation">{</span>
                text: <span class="token string">&#39;钉钉官网首页动画&#39;</span>,
                link: <span class="token string">&quot;/2022/dingDingHome&quot;</span>
              <span class="token punctuation">}</span>,
              <span class="token punctuation">{</span>
                text: <span class="token string">&#39;旋转菜单&#39;</span>,
                link: <span class="token string">&quot;/2022/rotateMenu&quot;</span>
              <span class="token punctuation">}</span>,
              <span class="token punctuation">{</span>
                text: <span class="token string">&#39;步骤条&#39;</span>,
                link: <span class="token string">&quot;2022/steps&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>,
            collapsible: <span class="token boolean">false</span> // 默认展开，true 为折叠
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>,
  // plugins: <span class="token punctuation">[</span>
  //   <span class="token punctuation">[</span>
  //     <span class="token string">&#39;@vuepress/register-components&#39;</span>,
  //     <span class="token punctuation">{</span>
  //       componentsDir: path.resolve<span class="token punctuation">(</span>__dirname, <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span>,
  //     <span class="token punctuation">}</span>,
  //   <span class="token punctuation">]</span>,
  // <span class="token punctuation">]</span>
  plugins: <span class="token punctuation">[</span>
    registerComponentsPlugin<span class="token punctuation">(</span><span class="token punctuation">{</span>
      componentsDir: path.resolve<span class="token punctuation">(</span>__dirname, <span class="token string">&#39;./components&#39;</span><span class="token punctuation">)</span>,
      componentsPatterns:<span class="token punctuation">[</span><span class="token string">&#39;**/*.vue&#39;</span><span class="token punctuation">]</span>, // 组件格式为.vue结尾的文件
    <span class="token punctuation">}</span><span class="token punctuation">)</span>,
  <span class="token punctuation">]</span>,
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好后在/docs/.vuepress/components/com2021(/.vuepress/components/com2021) 文件夹中创建sampleExample.vue文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token punctuation">{</span> abc + <span class="token number">456</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  name: <span class="token string">&#39;sampleExample&#39;</span>,
  <span class="token function-name function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
      abc: <span class="token number">123</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在markdown文章中使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### 使用vue的简单例子</span>
<span class="token operator">&lt;</span>com2021-sampleExample /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","useVue.html.vue"]]);export{r as default};
