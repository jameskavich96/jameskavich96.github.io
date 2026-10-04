// Ground-track math for the background map. Map units are degrees:
// x = longitude (unwrapped, Pacific-centred), y = 90 - latitude.

export const DEG = Math.PI / 180;

const INCLINATION = 38 * DEG; // reaches the US station's latitude band
export const PERIOD_S = 26; // one orbit on screen
const DRIFT_DEG = -22.5; // westward shift per orbit, as a real 90-minute orbit
const LON0 = 92;

export interface SubPoint {
  x: number;
  y: number;
  lat: number; // radians
  lon: number; // radians
}

/** the point on the ground directly under the craft, `sec` seconds into the animation */
export function subPoint(sec: number): SubPoint {
  const u = (sec / PERIOD_S) * 2 * Math.PI;
  const lat = Math.asin(Math.sin(INCLINATION) * Math.sin(u));
  const a = Math.atan2(Math.cos(INCLINATION) * Math.sin(u), Math.cos(u));
  const inertial = a + 2 * Math.PI * Math.round((u - a) / (2 * Math.PI));
  const lon = LON0 + inertial / DEG + DRIFT_DEG * (sec / PERIOD_S);
  return { x: lon, y: 90 - lat / DEG, lat, lon: lon * DEG };
}

/** great-circle angle between two lat/lon points, radians in, radians out */
export function angleBetween(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const cos =
    Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2);
  return Math.acos(Math.min(1, Math.max(-1, cos)));
}

/** shift an unwrapped longitude into [start, start + 360) */
export function wrapInto(x: number, start: number): number {
  return x - 360 * Math.floor((x - start) / 360);
}
