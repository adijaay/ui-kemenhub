/* eslint-disable no-console */


function debugLog(...optionalParams: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.log("DEBUG_APP_LOG 👀", ...optionalParams);
  }
}

function debugError(...optionalParams: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.error("DEBUG_APP_ERROR ❌", ...optionalParams);
  }
}

function debugSocket(...optionalParams: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.log("DEBUG_APP_SOCKET 🔂", ...optionalParams);
  }
}

const debug = {
  log: debugLog,
  error: debugError,
  socket: debugSocket,
};

export default debug;
