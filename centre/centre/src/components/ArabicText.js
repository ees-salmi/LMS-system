import React from "react";
import "@fontsource/cairo"; // Defaults to weight 400
import "@fontsource/cairo/400.css"; // Specify weight

const ArabicText = ({ text, fweight, fsize }) => {
  const style = {
    fontFamily: "'Cairo', sans-serif",
    fontWeight: fweight || 400, 
    fontSize: fsize || "16px", 
    alignItems : 'left',
  };

  return (
    <div>
      <p style={style}>{text}</p>
    </div>
  );
};

export default ArabicText;
