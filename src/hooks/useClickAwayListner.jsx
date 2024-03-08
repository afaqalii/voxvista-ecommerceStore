import { useEffect } from "react";

function useClickOutsideDetector(ref, onClickOutside, excludedRef = null) {
  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutside = ref.current && !ref.current.contains(event.target);
      const clickedOnExcluded = excludedRef && excludedRef.current && excludedRef.current.contains(event.target);

      if (clickedOutside && !clickedOnExcluded) {
        onClickOutside();
      }
    }

    // Bind
    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });

    return () => {
      // Dispose
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [ref, onClickOutside, excludedRef]);
}

export default useClickOutsideDetector;
