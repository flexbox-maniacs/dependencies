const assets = (file: string) => {
  return new URL(`../assets/${file}`, import.meta.url).href;
};

export default {
  assets_url(file: string): string {
    return assets(file);
  },

  images(file: string): string {
    return assets(`images/${file}`);
  },

  news(file: string): string {
    return assets(`images/news/${file}`);
  },

  carriers_url(file: string): string {
    return assets(`images/carriers/${file}`);
  },

  erp_url(file: string) {
    return assets(`images/erp/${file}`);
  },

  gateways_url(file: string) {
    return assets(`images/gateways/${file}`);
  },

  apps_url(file: string) {
    return assets(`images/apps/${file}`);
  },

  payments(file: string) {
    return assets(`images/payments/${file}`);
  },

  presets(file: string) {
    return assets(`images/presets/${file}`);
  },
};
