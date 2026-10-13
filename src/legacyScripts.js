const scriptPromises = new Map();

function loadScript(src) {
  if (scriptPromises.has(src)) return scriptPromises.get(src);

  const promise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-sungrid-script="${src}"]`);
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing || document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.sungridScript = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => {
      scriptPromises.delete(src);
      reject(new Error(`Could not load SUNGRID script: ${src}`));
    };
    if (!existing) document.body.appendChild(script);
  });

  scriptPromises.set(src, promise);
  return promise;
}

/** Load the original template scripts only after React has rendered the page DOM. */
export async function loadLegacyScripts() {
  await loadScript("/js/plugins.js");
  await loadScript("/js/designesia.js");

  if (document.querySelector(".hero-swiper")) {
    await loadScript("/js/swiper.js");
    await loadScript("/js/custom-swiper-1.js");
  }

  if (document.querySelector(".de-marquee-list, .de-marquee-list-2, .wm-carousel, .marquee, [data-marquee]")) {
    await loadScript("/js/custom-marquee.js");
  }
}
