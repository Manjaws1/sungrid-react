import React from "react";
import { loadLegacyScripts } from "../legacyScripts";

export default function ContactPage() {
  React.useEffect(() => {
    document.title = 'Sungrid | Clean Energy, Brighter Tomorrow';
    let cancelled = false;
    loadLegacyScripts().then(() => {
      if (cancelled) return;


    }).catch((error) => console.error(error));
    return () => { cancelled = true; };
  }, []);
  return (
    <>

    </>
  );
}
