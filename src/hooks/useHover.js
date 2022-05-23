import {useEffect, useRef, useState} from "react";

export default function useHover() {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(false)

    function enter() { setHovered(true) }
    function leave() { setHovered(false) }

    useEffect(() => {
        const domElement = ref.current;

        domElement.addEventListener("mouseenter", enter);
        domElement.addEventListener("mouseleave", leave);

        return () => {
            domElement.removeEventListener("mouseenter", enter);
            domElement.removeEventListener("mouseleave", leave);
        }
    })

    return [hovered, ref]
}
