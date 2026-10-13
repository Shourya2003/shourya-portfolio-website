import Image, { type StaticImageData } from "next/image";
import React from "react";

interface LightboxProps {
  image: StaticImageData;
  closeLightbox: () => void;
}

const Lightbox = ({ image, closeLightbox }: LightboxProps) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  return (
    <>
      <div className="mfp-bg mfp-ready" onClick={closeLightbox}>
        <div className="mfp-wrap mfp-close-btn-in mfp-ready">
          <div className="mfp-container mfp-s-ready mfp-image-holder">
            <div className="mfp-content">
              <div className="mfp-figure">
                <button
                  className="mfp-close"
                  aria-label="Close image"
                  onClick={closeLightbox}
                >
                  ×
                </button>
                <Image
                  src={image}
                  alt="image"
                  placeholder="blur"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
