export function getMaxSalesPercent(regMax, regMin, selMax, selMin) {
  return Math.round(
    Math.max((regMax - selMax) / regMax, (regMin - selMin) / regMin) * 100
  );
}
