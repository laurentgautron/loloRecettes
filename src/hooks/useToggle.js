import { useState } from "react";

function useToggle(initialValue=false) {
    const [value, setValue] = useState(initialValue);

    function open() {
        setValue(true);
    }

    function close() {
        setValue(false);
    }

    return {isOpen: value, open, close};
}

export default useToggle;