import { GasPlugin } from "esbuild-gas-plugin";
import { build } from "esbuild";

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  plugins: [GasPlugin],
  inject: ['./src/shim/text-encoder.shim.ts', './src/shim/text-decoder.shim.ts']
}).catch(() => process.exit(1))
