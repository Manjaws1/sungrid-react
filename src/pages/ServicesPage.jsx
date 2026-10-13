import React from "react";
import { loadLegacyScripts } from "../legacyScripts";
import "./services.css";

export default function ServicesPage() {
    React.useEffect(() => {
        document.title = 'Sungrid | Clean Energy, Brighter Tomorrow';
        let cancelled = false;
        loadLegacyScripts().then(() => {
            if (cancelled) return;
            import("./services.js").then(({ initServicesPage }) => initServicesPage());

        }).catch((error) => console.error(error));
        return () => { cancelled = true; };
    }, []);
    return (
        <>

        </>
    );
}
