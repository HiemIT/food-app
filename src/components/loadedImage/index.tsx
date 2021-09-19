import { useEffect, useState } from "react";

const LoadedImage = (src: any) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => setState(src);
  }, [src]);

  return state;
};

export default LoadedImage;

export interface State {
  sourceLoaded: null;
}
