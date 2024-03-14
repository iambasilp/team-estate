import React from "react";

function ChartIFrame({ title, src, width = "640", height = "480", marginTop }) {
   return (
      <iframe
         style={{ marginTop: marginTop }}
         className="mt-2 bg-white border-none rounded-md shadow-md"
         width={width}
         height={height}
         src={src}
      ></iframe>
   );
}

export default ChartIFrame;
