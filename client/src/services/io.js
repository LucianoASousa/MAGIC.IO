import io from "socket.io-client";
export const socket = io.connect("https://magicio-production.up.railway.app/:3001");