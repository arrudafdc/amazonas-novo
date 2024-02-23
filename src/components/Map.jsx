import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// eslint-disable-next-line react/prop-types
export function Map({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAtiIpYvbeiF7_kZuEuj4NgXjzh1CMCrCE",
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
  };

  const locale = {
    lat: lat,
    lng: lng,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={locale} zoom={20}>
      <Marker position={locale} />
    </GoogleMap>
  ) : (
    <></>
  );
}
