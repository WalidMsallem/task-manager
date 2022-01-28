/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const proxyConvert = (proxy: object) => {
  const stringifyObject = JSON.stringify(proxy);
  return JSON.parse(stringifyObject);
};
