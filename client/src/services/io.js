import io from "socket.io-client";
export const socket = io.connect("http://magicio-production.up.railway.app:6386");