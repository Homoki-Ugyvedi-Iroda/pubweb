(async () => {
  const data = await (await fetch('assets/json/env.json')).json();

  /**
   * Moves the map to display over Homoki Ügyvédi Iroda
   *
   * @param  {H.Map} map      A HERE Map instance within the application
   */

  /**
   * Boilerplate map initialization code starts below:
   */

  //Step 1: initialize communication with the platform
  // In your own code, replace variable window.apikey with your own apikey
  const platform = new H.service.Platform({
    apikey: data.HERE_MAP_API_KEY,
  });

  const defaultLayers = platform.createDefaultLayers();

  //Step 2: initialize a map - this map is centered over Europe
  const map = new H.Map(
    document.getElementById('map'),
    defaultLayers.vector.normal.map,
    {
      center: { lat: 47.50644, lng: 19.0493 },
      zoom: 17,
    }
  );

  const coords = { lat: 47.50644, lng: 19.0493 };
  const marker = new H.map.Marker(coords);

  // Add the marker to the map and center the map at the location of the marker:
  map.addObject(marker);
  map.setCenter(coords);

  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());
})();
