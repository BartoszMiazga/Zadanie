let map
async function initMap() {
	const position = { lat: 50.088246080928215, lng: 19.892836710827538 }

	const { Map } = await google.maps.importLibrary('maps')
	const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')

	map = new Map(document.getElementById('map'), {
		zoom: 15,
		center: position,
		mapId: 'DEMO_MAP_ID',
	})

	const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		title: 'Jasnogórska 231-358 Kraków',
	})
}

initMap()
