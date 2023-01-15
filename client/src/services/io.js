import io from "socket.io-client";
export const socket = io.connect(process.env.URL_MAGIC);