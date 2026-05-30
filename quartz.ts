import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import { QuartzPluginData } from "./quartz/plugins/vfile"

const sortByModified = (f1: QuartzPluginData, f2: QuartzPluginData): number => {
  const d1 = f1.dates?.modified ?? f1.dates?.created ?? new Date(0)
  const d2 = f2.dates?.modified ?? f2.dates?.created ?? new Date(0)
  return d2.getTime() - d1.getTime() // newest first
}

// Apply to any listing plugin that accepts a sort option
componentRegistry.setOptionOverrides("folder-page", { sort: sortByModified })
componentRegistry.setOptionOverrides("tag-page", { sort: sortByModified })
componentRegistry.setOptionOverrides("recent-notes", { sort: sortByModified })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
