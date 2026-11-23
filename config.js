// Public config. The publishable key is safe to ship in the browser:
// all data access goes through token-checked database functions.
var HUB_CONFIG = {
  supabaseUrl: 'https://mkopwxqvjcaxywtcofxb.supabase.co',
  supabaseKey: 'sb_publishable_7UU2QHoKzId-Q5V_dxm2-Q_tcQ5qJ6-',
  lat: 59.3293,
  lon: 18.0686,
  idleMinutes: 3,          // Kindle: switch to ink painting after this many idle minutes
  // Power saving: the screen only redraws when something actually changed.
  // Data is fetched often only in the windows when the family looks at it.
  activeWindows: [['06:30', '09:00'], ['15:00', '21:00']],
  activeRefreshMinutes: 15,   // inside the windows above
  dayRefreshMinutes: 120,     // 09:00–15:00
  // 21:00–06:30: no fetching at all (a tap on the screen still loads fresh data)
  galleryMinutes: 120         // change painting this often (only while awake hours)
};
