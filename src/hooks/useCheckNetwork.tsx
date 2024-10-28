/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

function NetworkProvider({ children }: React.PropsWithChildren) {
  const [isOnline, setIsOnline] = useState(
    typeof window !== "undefined" ? window.navigator.onLine : false,
  );

  useEffect(() => {
    if (!navigator) return;
    if ("serviceWorker" in navigator) {
      const swUrl = "/service-worker.js";
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          // console.log(
          //   "ServiceWorker registration successful with scope: ",
          //   registration.scope,
          // );
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed: ", error);
        });
    }
  }, []);

  useEffect(() => {
    const goOnline = () => {
      setIsOnline(true);
    };

    const goOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  });
  return <>{children}</>;
}

export default NetworkProvider;
