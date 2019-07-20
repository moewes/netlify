import cpy from 'rollup-plugin-cpy';
import resolve from 'rollup-plugin-node-resolve';

export default [{input: './src/app.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
    // commonjs()
    cpy({
    // copy over all images files
      files: ['./src/**/*.html', './src/**/*.png', './src/**/*.css', './config.json'],
      dest: 'dist',
      options: {
      // parents makes sure to preserve the original folder structure
        parents: false,
      },
    }),
  ]},
{
  input: './src/fetch-element.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
    replace( {
      exclude: 'node/modules/**',
      ENV: 'prod',
    }),
  ],
},

// Meine Views
{
  input: './src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ],
},
{
  input: './src/about.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ],
},
{
  input: './src/test.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ],
},
{
  input: './src/fetch.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ],
},
// Meine Komponenten
{
  input: './src/my-header.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ],
},

];

