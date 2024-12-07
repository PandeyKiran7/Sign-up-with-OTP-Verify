import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      hmr: {
        protocol: 'ws',  // Check if it's set to 'ws' or 'wss' (secure WebSocket)
        host: 'localhost',
        port: 5173, // Ensure the correct port is set
      }
    }
  });

