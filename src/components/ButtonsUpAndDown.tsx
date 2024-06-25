import { useState } from "react";
import down from "../icons/charm_chevron-down.png";
import up from "../icons/charm_chevron-up.png";


export default () => {
  const [visibleButton, setVisibleButton] = useState<boolean>(true);
  if (visibleButton) return (
    <img
      className="down" 
      src={down} 
      alt="botton down"
      onClick={() => setVisibleButton(false)}
        
    />
  );
  return (
    <img
      className="down" 
      src={up} 
      alt="botton up"
      onClick={() => setVisibleButton(true)} 
    />
  );
}