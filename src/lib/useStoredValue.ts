import { useCallback, useSyncExternalStore } from "react";

const EVENT = "stored-value-change";

/**
 * Read/write one localStorage string without flashing wrong content.
 * `serverValue` is what the server (and the first client render) sees.
 * Returns null on the client when nothing is stored.
 */
export function useStoredValue(key: string, serverValue: string | null = null) {
  const subscribe = useCallback((cb: () => void) => {
    window.addEventListener("storage", cb);
    window.addEventListener(EVENT, cb);
    return () => {
      window.removeEventListener("storage", cb);
      window.removeEventListener(EVENT, cb);
    };
  }, []);
  const getSnapshot = useCallback(() => {
    try { return localStorage.getItem(key); } catch { return null; }
  }, [key]);
  const value = useSyncExternalStore(subscribe, getSnapshot, () => serverValue);
  const set = useCallback((v: string) => {
    try { localStorage.setItem(key, v); } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, [key]);
  return [value, set] as const;
}
