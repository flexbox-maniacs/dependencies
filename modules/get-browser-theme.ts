import { getItem, setItem } from '../scripts';

export default function getBrowserTheme(): Record<string, string> {
  let icon: string;
  let theme = getItem('theme');

  if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setItem('theme', 'dark');
    document.documentElement.setAttribute('theme', 'dark');
  }

  if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setItem('theme', 'light');
    document.documentElement.setAttribute('theme', 'light');
  }

  if (theme) {
    document.documentElement.setAttribute('theme', theme);
  }

  if (document.documentElement.getAttribute('theme') == 'dark') {
    icon = 'light_mode';
  } else icon = 'dark_mode';

  return {
    icon: icon,
  };
}
