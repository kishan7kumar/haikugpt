import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "52px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
      if (scrollHeight > 200) {
        textAreaRef.style.overflow = "auto";
      } else {
        textAreaRef.style.overflow = "hidden";
      }
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
