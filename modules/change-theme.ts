import { getItem, setItem } from '../scripts';

export default function changeTheme(): Record<string, string> {
  let icon: string;
  let theme = getItem('theme');

  switch (theme) {
    case 'dark':
      setItem('theme', 'light');
      break;
    default:
      setItem('theme', 'dark');
  }

  theme = getItem('theme');

  document.documentElement.setAttribute('theme', String(theme));

  switch (theme) {
    case 'dark':
      icon = 'light_mode';
      break;
    default:
      icon = 'dark_mode';
  }

  return {
    icon: icon,
  };
}
