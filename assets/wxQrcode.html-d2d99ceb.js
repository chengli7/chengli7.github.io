import{_ as t,r as i,o as a,c as r,a as e,b as n,d as l,e as s}from"./app-959786d2.js";const o="/assets/1725517107078-277167be.png",c="/assets/1725517137253-69d042de.png",u="/assets/1725518111773-eeea8d41.png",v={},m=s('<h2 id="一、什么是qrcode-js" tabindex="-1"><a class="header-anchor" href="#一、什么是qrcode-js" aria-hidden="true">#</a> <strong>一、什么是qrcode.js</strong></h2><p>qrcode.js是一个JavaScript代码库，可以将指定的文本或网址转换为二维码图片, 二维码生成部分借鉴了 jquery-qrcode 源码。这是官方文档地址：https://github.com/yingye/weapp-qrcode#readme</p><h2 id="二、如何使用" tabindex="-1"><a class="header-anchor" href="#二、如何使用" aria-hidden="true">#</a> <strong>二、如何使用</strong></h2><p>1、安装qrcode.js</p><p>方式一：到<a href="#readme">https://github.com/yingye/weapp-qrcode#readme</a>的dist文件夹下载js文件，可选择 <strong>weapp.qrcode.common.js</strong> <strong>、</strong> <strong>weapp.qrcode.esm.js</strong> <strong>、</strong> <strong>weapp.qrcode.js</strong> <strong>、</strong> <strong>weapp.qrcode.min.js</strong> 四个文件中的任意一个下载，本案例中使用的是<strong>weapp.qrcode.js</strong></p><p><img src="'+o+'" alt="1725517107078"></p>',6),p={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html",target:"_blank",rel:"noopener noreferrer"},g=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install weapp-qrcode --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、项目中使用qrcode.js</p><p>（1）、 <a href="#readme">https://github.com/yingye/weapp-qrcode#readme</a>的<strong>examples</strong>文件夹下提供了使用mpvue、taro、原生微信小程序、wepy开发框架开发微信小程序时生成二维码的示例代码，可下载代码查看使用方法**。**</p><p>（2）、把下载的<strong>weapp.qrcode.js</strong>放到到项目目录中 <img src="`+c+`" alt="1725517137253"></p><p>（3）、先在.wxml 文件中，创建绘制的 canvas，并定义好 width, height, canvasId</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;canvas style=&quot;width:200px; height: 200px;&quot; canvas-id=&quot;myQrcode&quot;&gt;&lt;/canvas&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）、引入qrcode.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import drawQrcode from &quot;../utils/weapp.qrcode.js&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用 drawQrcode() 绘制二维码。在调用 drawQrcode() 方法之前，一定要确保可以获取到 canvas context, 由于本案例中有多个地方需要绘制二维码，因此将绘制二维码的方法提取为behaviors（类似于vue中的mixins）公共方法，关于behaviors的使用说明可查看官方文档说明(https://developers.weixin.qq.com/miniprogram/dev/reference/api/Behavior.html)）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 生成二维码
    draw () {
      console.log(&#39;qrcodeText&#39;, this.data.qrcodeText);
      drawQrcode({
        width: 160,
        height: 160,
        x: 20,
        y: 20,
        canvasId: &#39;myQrcode&#39;,
        // ctx: wx.createCanvasContext(&#39;myQrcode&#39;),
        typeNumber: 6,
        text: this.data.qrcodeText,
        // v1.0.0+版本支持在二维码上绘制图片
        //   image: {
        //     imageResource: &#39;../../images/icon.png&#39;,
        //     dx: 70,
        //     dy: 70,
        //     dWidth: 60,
        //     dHeight: 60
        //   },
        callback(e) {
          console.log(&#39;e: &#39;, e)
        }
      })
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>drawQrcode() 方法参数说明：</p>`,11),h=e("thead",null,[e("tr",null,[e("th",null,[e("strong",null,"参数")]),e("th",null,[e("strong",null,"说明")]),e("th",null,[e("strong",null,"示例")])])],-1),b=e("tr",null,[e("td",null,"width"),e("td",null,"必须，二维码宽度，与canvas的width保持一致"),e("td",null,"200")],-1),x=e("tr",null,[e("td",null,"height"),e("td",null,"必须，二维码高度，与canvas的height保持一致"),e("td",null,"200")],-1),_=e("tr",null,[e("td",null,"canvasId"),e("td",null,"非必须，绘制的canvasId"),e("td",null,"'myQrcode'")],-1),q=e("tr",null,[e("td",null,"ctx"),e("td",null,"非必须，绘图上下文，可通过wx.createCanvasContext('canvasId') 获取，v1.0.0+版本支持"),e("td",null,"'wx.createCanvasContext('canvasId')'")],-1),w=e("td",null,"text",-1),f=e("td",null,"必须，二维码内容",-1),y={href:"https://github.com/yingye",target:"_blank",rel:"noopener noreferrer"},j=e("tr",null,[e("td",null,"typeNumber"),e("td",null,"非必须，二维码的计算模式，默认值-1"),e("td",null,"8")],-1),Q=e("tr",null,[e("td",null,"correctLevel"),e("td",null,"非必须，二维码纠错级别，默认值为高级，取值：{ L: 1, M: 0, Q: 3, H: 2 }"),e("td",null,"1")],-1),k=e("tr",null,[e("td",null,"background"),e("td",null,"非必须，二维码背景颜色，默认值白色"),e("td",null,"'#ffffff'")],-1),C=e("tr",null,[e("td",null,"foreground"),e("td",null,"非必须，二维码前景色，默认值黑色"),e("td",null,"'#000000'")],-1),I=e("tr",null,[e("td",null,"_this"),e("td",null,"非必须，若在组件中使用，需要传入，v0.7.0+版本支持"),e("td",null,"this")],-1),N=e("tr",null,[e("td",null,"callback"),e("td",null,"非必须，绘制完成后的回调函数，v0.8.0+版本支持。安卓手机兼容性问题，可通过自行设置计时器来解决，更多可以参考"),e("td",null,"function (e) { console.log('e', e) }")],-1),T=e("tr",null,[e("td",null,"x"),e("td",null,"非必须，二维码绘制的x 轴起始位置，默认值0，v1.0.0+版本支持"),e("td",null,"100")],-1),B=e("tr",null,[e("td",null,"y"),e("td",null,"非必须，二维码绘制的y 轴起始位置，默认值0，v1.0.0+版本支持"),e("td",null,"100")],-1),L=e("tr",null,[e("td",null,"image"),e("td",null,[n("非必须，在canvas 上绘制图片，"),e("strong",null,"层级高于二维码"),n(" ，v1.0.0+版本支持")]),e("td",null,"{ imageResource: '', dx: 0, dy: 0, dWidth: 100, dHeight: 100 }")],-1),V=s('<p>（5）、在需要绘制二维码的js文件中引入并注册behaviors</p><p><img src="'+u+`" alt="1725518111773"></p><p>调用draw（）方法, 在调用该方法前一定要确保已经在相同目录下的同名wxml文件中创建了绘制的 canvas，否则会报找不到canvas的错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`&lt;canvas style=&quot;width:200px; height: 200px;&quot; canvas-id=&quot;myQrcode&quot;&gt;&lt;/canvas&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> this.draw()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此二维码已经生成好了，可调用微信小程序的扫码API进行扫码识别</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 扫码
  handleScan() {
    console.log(&#39;扫码&#39;);
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
        let id = res.result
        console.log(&#39;扫码成功&#39;, res.result);
        if (id) {
        wx.navigateTo({
            url: &#39;./oil-info/oil-info?id=&#39; + id,
        })
      }
      }
    })
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> <strong>三、总结</strong></h2><pre><code>本案例主要介绍了在原生微信小程序项目中使用qrcode.js在页面中生成二维码的方法，欢迎大家一起学习交流！
</code></pre>`,9);function E(H,S){const d=i("ExternalLinkIcon");return a(),r("div",null,[m,e("p",null,[n("方式二：NPM方式安装，使用 npm 构建前，需要先阅读微信官方的 "),e("a",p,[n("npm 支持"),l(d)])]),g,e("table",null,[h,e("tbody",null,[b,x,_,q,e("tr",null,[w,f,e("td",null,[n("'"),e("a",y,[n("https://github.com/yingye"),l(d)]),n("'")])]),j,Q,k,C,I,N,T,B,L])]),V])}const P=t(v,[["render",E],["__file","wxQrcode.html.vue"]]);export{P as default};
