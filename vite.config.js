import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
<<<<<<< HEAD
      entry: path.resolve(__dirname, 'index.js'),
      name: 'ReactUIComponentsFormcardByRaj',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
=======
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ReactUIComponentsFormAndCard',
      fileName: (format) => `raj-wasserstoff-FrontEndInternTask2.${format}.js`,
>>>>>>> df98461d0ce6c7d4e6302327d2c3b0a9f83e4486
    },
    rollupOptions: {
      
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
  
})
