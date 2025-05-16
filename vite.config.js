import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {

      entry: path.resolve(__dirname, 'index.js'),
      name: 'ReactUIComponentsFormcardByRaj',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,

   
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
