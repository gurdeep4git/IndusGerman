import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WOW from 'wowjs';

export function WowAnimate() {
    const { pathname } = useLocation();

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [pathname]);

    return null;
}