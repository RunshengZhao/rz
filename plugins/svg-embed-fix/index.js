/**
 * Workaround for a bug in quartz-community/obsidian-flavored-markdown:
 * SVG wikilink embeds (![[file.svg]]) are rendered as
 * <object data="file.svg" type="image/svg+xml"> with a naively slugified
 * filename and no vault-wide path resolution. CrawlLinks only rewrites the
 * src attribute of img/video/audio/iframe elements, so the <object> URL is
 * never resolved and 404s whenever the SVG lives in a different directory
 * than the page.
 *
 * This transformer must run after obsidian-flavored-markdown and before
 * crawl-links (order 55, between OFM's 30 and crawl-links' 60). It rewrites
 * those <object> elements to <img>, which crawl-links then resolves against
 * allSlugs with the configured markdownLinkResolution strategy — the same
 * path every other image embed already takes.
 *
 * Delete this directory and its entry in quartz.config.yaml once the bug is
 * fixed upstream.
 */

const hasScheme = /^[a-z][a-z0-9+.-]*:/i

function rewrite(node) {
  if (node.type === "element" && node.tagName === "object") {
    const props = node.properties ?? {}
    const data = props.data
    if (props.type === "image/svg+xml" && typeof data === "string" && !hasScheme.test(data)) {
      node.tagName = "img"
      node.properties = {
        src: data,
        alt: props.ariaLabel ?? props["aria-label"] ?? "",
        width: props.width,
        height: props.height,
      }
      node.children = []
      return
    }
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      rewrite(child)
    }
  }
}

export default function SvgEmbedFix() {
  return {
    name: "SvgEmbedFix",
    htmlPlugins() {
      return [() => (tree) => rewrite(tree)]
    },
  }
}
