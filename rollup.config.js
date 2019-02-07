import typescript from 'rollup-plugin-typescript'

export default {
  input: './src/index.tsx',
  output: {
    file: 'umd/react-lambda.js',
    format: 'umd',
    name: 'react-lambda',
    exports: 'named',
    globals: {
      react: 'React'
    }
  },
  plugins: [typescript()],
  external: ['react']
}
