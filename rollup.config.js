import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import cpy from 'rollup-plugin-cpy';
import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';
import indexHTML from 'rollup-plugin-index-html';


const config = createDefaultConfig({ input: './index.html' });
const config2 = createDefaultConfig({ input: './zwei.html',  });

//export default config;


export default [{input: './src/app.js',
output: {
    dir: 'dist',
    format: 'esm'
  },
  
  plugins: [
    resolve(),
   // commonjs()
   cpy({
    // copy over all images files
    files: ['./src/**/*.html', './src/**/*.png', './src/**/*.css'],
    dest: 'dist',
    options: {
      // parents makes sure to preserve the original folder structure
      parents: false
    }
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
  ]
},
{
  input: './src/views/test.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ]
},
{
  input: './src/my-component.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ]
},
// Meine Views
{
  input: './src/about.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve(),
  ]
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
  ]
},
];

