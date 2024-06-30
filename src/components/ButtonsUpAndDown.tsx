import { useContext, useState } from "react";
import down from "../icons/charm_chevron-down.png";
import up from "../icons/charm_chevron-up.png";
import { MyContext } from "../context/contextProvider";

interface props {
  indexTable: number
}

export default ({indexTable}: props) => {
  const [visibleButton, setVisibleButton] = useState<boolean>(true);
  const { setNamesButton } = useContext(MyContext);

  if (visibleButton) return (
    <img 
      src={down} 
      alt="botton down"
      onClick={() => {
        setNamesButton((oldValue) => [...oldValue, `down${indexTable}`]);
        setVisibleButton(false);
      }} 
    />
  );
  return (
    <img
      src={up} 
      alt="botton up"
      onClick={() => {
        setVisibleButton(true);
        setNamesButton((oldValue) => oldValue.filter(name => name !== `down${indexTable}`));
      }} 
    />
  );
}