import pino from "pino";
import { sendlogs } from "../services/loggsenderService";
const send = async (level, logEvent, a, b) => {
  try {
    await sendlogs({
      level,
      timestamp: new Date(logEvent.ts),
      message: logEvent.messages[0],
    });
  } catch (err) {
    console.log("error sending logs to server.");
  }
};
export const logger = pino({
  browser: {
    serialize: true,
    asObject: true,
    transmit: {
      send,
    },
  },
});
