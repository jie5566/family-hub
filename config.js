// Public config. The publishable key is safe to ship in the browser:
// all data access goes through token-checked database functions.
var HUB_CONFIG = {
  supabaseUrl: 'https://mkopwxqvjcaxywtcofxb.supabase.co',
  supabaseKey: 'sb_publishable_7UU2QHoKzId-Q5V_dxm2-Q_tcQ5qJ6-',
  lat: 59.3293,
  lon: 18.0686,
  idleMinutes: 3,          // Kindle: switch to ink painting after this many idle minutes
  refreshMinutes: 5,       // Kindle: reload data this often
  galleryMinutes: 10       // Kindle: change painting this often
};
