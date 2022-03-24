import type { Options as TsupOptions } from 'tsup'
import type { SolidOptions } from 'esbuild-plugin-solid'
import { solidPlugin } from 'esbuild-plugin-solid'

type PluginArr = TsupOptions['plugins']

export default function SolidPlugin(options?: SolidOptions) {
  const tmp: PluginArr = [{
    name: 'tsup-plugin-solid',
    esbuildOptions(ctx) {
      ctx.plugins?.push(solidPlugin(options))
    },
  }]

  return tmp[0]
}
