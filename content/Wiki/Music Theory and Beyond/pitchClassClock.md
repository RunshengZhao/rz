---
title: "级数钟"
description: "一个可以互动的级数钟。"
date: 2025-06-18
draft: false
comments: true
tags:
  - post
---

一个可以互动的[级数钟](https://runshengzhao.github.io/pitch-class-clock/)。

---
这几天忙着用ChatGPT敲代码... 连我这种浑水摸鱼的人都能通过AI设计出一个功能良好的Web应用，可见AI的强大之处。其中也包括了很多折腾反复的情况，具体来说，因为自己对代码的无知。最后我和AI的对话就变成了：这里有问题，应该怎么改？然后复制粘贴，再进行纠错。也见识了什么叫“屎山”，因为移动端的设计必须要重新设计JavaScript代码又加入了新的功能来填补漏洞。不管怎么说，最后反正是运行起来了。

---
# 功能
这个级数钟大部分的灵感是汲取于我的老师Noel Johnston的[Voicing Mode App](https://www.noeljohnston.com/voicingmodeswebapp1.html)。在很多时候我不知道该怎么即兴或者需要一个Reference来源的时候，我都会咨询那个网页APP。现在在那个网页的基础上，这个[级数钟](https://runshengzhao.github.io/pitch-class-clock/)有这样一些功能：
- 一个基于[Pitch Class](https://pressbooks.uiowa.edu/twentieth-and-twenty-first-century-music/chapter/pitch-class/)的级数钟，在Pitch Class 里，C = 0， 但是这里的级数钟其实是首调概念，所以12点钟方向是以1开始。
- 四条[[Glossary#Parent Scale|Parent Scale]],  到目前为止有四条主音阶和旗下的modes。大调，和声小调，旋律小调，和和声大调。应该能满足绝大多数的情况。
- 旋转。Transposition。把整个pitch-class转调，可以形象的固定住pitch class的相对音程，并把它放到不同的级数上去。

# 如何使用
1. 点击钟表上的级数就可以确定这个级数存在于哪条音阶里。
2. 当点击多个级数后，就可以构成一个线条（音程）或者多边形（和弦）。
3. 旋转这个多边形就可以得出它在不同级数的表现。你也可以通过它来找到不同的转位。
当一个Major： 1-3-5开始转位时，你可以得到1-4-6， 1-♭3-♭6
![[pitchClassClockExample_1.jpg]]
4. 查看在什么音阶里包含这个pitch set。比如你可以看的Major 三和弦存在于哪些音阶里。
![[pitchClassClockExample_2.png]]
*可见三和弦存在于大调1-4-5级上，etc*
5. 不知道即兴用哪条音阶？点击音阶的和弦组成音即可。

---
我自己还在考虑这个钟的实际用法，还有待我整理出来。

---
<form
  action="https://buttondown.com/api/emails/embed-subscribe/RunshengZhao"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.com/RunshengZhao', 'popupwindow')"
  class="embeddable-buttondown-form"
  style="max-width: 600px; font-family: sans-serif; margin: 0 auto; text-align: center;"
>
  <div style="margin-bottom: 1em;">
    <span style="font-size:1.1em; font-weight:bold;">Subscribe 订阅我的数字花园！</span><br />
    (I won't spam you — you'll be lucky if I get my lazy ass up to write something.)
  </div>

  <input
    type="email"
    name="email"
    id="bd-email"
    placeholder="Your email here..."
    required
    style="width: 80%; padding: 0.5em; font-size: 1em; margin-bottom: 0.25em; text-align: center;"
  /><br />

  <input
    type="submit"
    value="Subscribe|订阅!"
    style="padding: 0.5em 1em; font-size: 1em; background-color: #333; color: white; border: none; border-radius: 4px; cursor: pointer;"
  />
</form>

---
> [!note] I’d love to hear what you think. Use your GitHub account to leave a comment below!  欢迎用 GitHub 账号在下方留言交流!

<script src="https://giscus.app/client.js"
        data-repo="RunshengZhao/rz"
        data-repo-id="R_kgDOOrPyUA"
        data-category="Announcements"
        data-category-id="DIC_kwDOOrPyUM4CqW1I"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>

