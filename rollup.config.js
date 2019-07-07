import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import cpy from 'rollup-plugin-cpy';
import resolve from 'rollup-plugin-node-resolve';
//import commonjs from 'rollup-plugin-commonjs';


const config = createDefaultConfig({ input: './index.html' });
const config2 = createDefaultConfig({ input: './zwei.html',  });

export default [{input: './src/app.js',
output: {
    dir: 'dist',
    format: 'cjs'
  },
  
  plugins: [
    resolve(),
   // commonjs()
   cpy({
    // copy over all images files
    files: ['./src/**/*.html','index.html'],
    dest: 'dist',
    options: {
      // parents makes sure to preserve the original folder structure
      parents: true
    }
  }),
  ]},
{
  input: './src/fetch-element.js',
  output: {
    dir: 'dist',
    format: 'iife',
  },
  
  plugins: [
    resolve(),
   // commonjs()
  ]
},
{
  input: './src/my-component.js',
  output: {
    dir: 'dist',
    format: 'iife',
  },
 
  plugins: [
    resolve(),
   // commonjs()
  ]
}];

