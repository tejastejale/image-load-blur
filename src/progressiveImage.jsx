import React, { useEffect } from "react";

function ProgressiveImage(lowQualitySrc, highQualitySrc, setLoading) {
  const [src, setSrc] = React.useState(lowQualitySrc);
  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setLoading(false);
      setSrc(highQualitySrc);
    };
  }, [highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
}

export default ProgressiveImage;
