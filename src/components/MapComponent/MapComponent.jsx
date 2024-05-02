import { load } from "@2gis/mapgl";
import MapWrapper from "./MapWrapper";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    let map;
    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [55.31878, 25.23584],
        zoom: 13,
        key: "a04b313a-85a3-440f-8e53-bdedef4cda28",
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <div
      style={{
        width: "700px",
        height: "400px",
        margin: "0 auto",
        border: "1px solid grey",
      }}
    >
      <MapWrapper />
    </div>
  );
};

export default Map;
