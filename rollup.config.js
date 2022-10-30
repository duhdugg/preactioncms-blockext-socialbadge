import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'
import external from 'rollup-plugin-peer-deps-external'
import visualizer from 'rollup-plugin-visualizer'

const plugins = [
  external(),
  nodeResolve(),
  postcss({}),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['jsx'],
  }),
  commonjs(),
]

const esmComponent = {
  input: 'src/SocialBadge.jsx',
  external: ['prop-types'],
  output: [
    {
      file: './dist/preactioncms-blockext-socialbadge.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: plugins.concat(visualizer({ filename: 'stats/esm-component.html' })),
}

const esmSettingsComponent = {
  input: 'src/SocialBadgeSettings.jsx',
  external: ['prop-types'],
  output: [
    {
      file: './dist/preactioncms-blockext-socialbadge-settings.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: plugins.concat(
    visualizer({ filename: 'stats/esm-settings-component.html' })
  ),
}

const m = [esmComponent, esmSettingsComponent]
export default m
