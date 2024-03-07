import { useEffect } from "react";
function useClickOutsideDetector(ref, onClickOutside) {
  //  "ref" is the reference to the element that should not detect clicks outside.
  // "onClickOutside" excepts a call back function  that will be called when the user clicks outside of the element.
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [ref, onClickOutside]);
}
export default useClickOutsideDetector;
