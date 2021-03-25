export function getGlobalState() {
  var device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
    ? 'MOBILE'
    : 'DESKTOP';
  return {
    device: device,
    collapsed: collapsed,
  };
}
