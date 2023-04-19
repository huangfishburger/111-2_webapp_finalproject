const Map = ({ children, mapRef }) => {
	return (
		<div ref={mapRef} className="map" >
			{children}
		</div>
	)
}

export { Map };