declare function debugLog(...optionalParams: unknown[]): void;
declare function debugError(...optionalParams: unknown[]): void;
declare function debugSocket(...optionalParams: unknown[]): void;
declare const debug: {
    log: typeof debugLog;
    error: typeof debugError;
    socket: typeof debugSocket;
};
export default debug;
