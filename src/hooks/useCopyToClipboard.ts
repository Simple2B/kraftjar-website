import { useState, useCallback } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    console.log("", text);

    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      () => {
        setIsCopied(false);
      },
    );
  }, []);

  return { isCopied, copyToClipboard };
};
