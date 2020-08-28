import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: false
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false
    },
    {
      file: 'dist/natulu.min.js',
      format: 'umd',
      name: 'Natulu',
      sourcemap: false,
      plugins: [
        terser()
      ]
    }
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext'
        }
      },
      useTsconfigDeclarationDir: true // 使用tsconfig中的声明文件目录配置
    })
  ]
}
