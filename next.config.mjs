/** @type {import('next').NextConfig} */

let veliteStarted = false

const nextConfig = {
  webpack(config) {
    class VeliteWebpackPlugin {
      apply(compiler) {
        compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
          if (veliteStarted) return
          veliteStarted = true
          const dev = compiler.options.mode === 'development'
          const { build } = await import('velite')
          await build({ watch: dev, clean: !dev })
        })
      }
    }

    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
}

export default nextConfig
