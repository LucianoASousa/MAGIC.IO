import io from "socket.io-client"
export const socket = io.connect(import.meta.env.VITE_URL_MAGIC || "http://localhost:3001");