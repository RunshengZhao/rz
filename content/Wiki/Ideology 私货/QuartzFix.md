---
title: QuartzFixDoc
description: ""
draft: true
comments: false
tags:
created: 2026-07-17 04:15
updated: 2026-07-17 04:15
---

# SVG FIX
⏺ Fix is done and verified. The build now emits <img 
  src=".../3_altered_n5/img/altered_n5_1.svg"> with the fully resolved
  path (previously <object data="altered_n5_1.svg">), the SVG files
  exist at those locations in public/, and no unresolved <object data=
  embeds remain anywhere in the built site.

  What I changed (3 things, all easily reversible)

  1. Created plugins/svg-embed-fix/ (new directory, 2 files):
  - index.js — a ~50-line dependency-free transformer that walks the
  HTML tree and rewrites <object data="..." type="image/svg+xml">
  elements to <img src="...">.
  - package.json — declares it as a Quartz transformer plugin with
  defaultOrder: 55.

  2. Added one entry to quartz.config.yaml (after the
  table-of-contents entry, right above crawl-links, with an
  explanatory comment):
  - source: ./plugins/svg-embed-fix
    enabled: true
    order: 55
  Order 55 places it between obsidian-flavored-markdown (30) and
  crawl-links (60), so it converts the <object>s to <img> just in time
  for crawl-links to apply its existing shortest-path resolution —
  the same pipeline your PNG embeds already use. No resolution logic
  is duplicated.

  3. Side effect: the build created a symlink at
  .quartz/plugins/svg-embed-fix pointing to plugins/svg-embed-fix.
  This is auto-managed by the loader; you never need to touch it.

  To reverse

  1. Delete the - source: ./plugins/svg-embed-fix block (5 comment
  lines + 3 config lines) from quartz.config.yaml.
  2. Delete the plugins/ directory.
  3. Optionally delete the .quartz/plugins/svg-embed-fix symlink
  (harmless if left; it's regenerated/ignored based on the config).

  Nothing in quartz/, .quartz/plugins/ (upstream plugins), or
  quartz.lock.json was modified, so Quartz updates and plugin
  reinstalls won't conflict with this. One rendering note: <img>
  displays SVGs statically — fine for your notation diagrams, but if
  you ever embed an SVG with internal scripts or clickable links,
  those won't be interactive. When the upstream
  obsidian-flavored-markdown plugin fixes this (worth filing an
  issue), just do the two deletions above.

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
