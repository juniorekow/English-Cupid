import { io } from "socket.io-client";
import { appConfig } from "./config";

export const socket = io(appConfig.socketUrl, {
  autoConnect: false,
});
