
function cartesianToEllipsoidCoordinates(X, Y, Z, semiMajor,semiMinor) {
 
    let eccentricity = Math.sqrt((Math.pow(semiMajor,2)-Math.pow(semiMinor,2))/Math.pow(semiMajor,2));
    let longitude = Math.atan2(Y, X);
    let N = semiMajor;
    let h = Math.sqrt((X ** 2 + Y ** 2 + Z ** 2)) - Math.sqrt(semiMajor * semiMinor);
    let p = Math.sqrt(X ** 2 + Y ** 2);
    let latitude = Math.atan(Z / (p * (1 - eccentricity ** 2 * (N / (N + h)))));
    let i = 0;
    while (true) {
        let Ntemp = N;
        N = semiMajor / Math.sqrt(1 - eccentricity ** 2 * (Math.sin(latitude)) ** 2);
        let hTemp = h;
        h = (p / Math.cos(latitude)) - N;
        let latTemp = latitude;
        latitude = Math.atan(Z / (p * (1 - eccentricity ** 2 * (N / (N + h)))));
        if (Math.abs(N - Ntemp) < 10 ** (-4) && Math.abs(h - hTemp) < 10 ** (-4) && Math.abs(latitude - latTemp) < 10 ** (-8)) {

            latitude = latitude * (180 / Math.PI);
            longitude = longitude * (180 / Math.PI);
        
            return [latitude, longitude, h, name];
        }
    }
}