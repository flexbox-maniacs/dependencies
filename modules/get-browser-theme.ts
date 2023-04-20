import { getItem, setItem, getAttribute, setAttribute } from "../scripts"

function getBrowserTheme(): Record<string, string> {
  let icon: string
  let theme = getItem("theme")

  if (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setItem("theme", "dark")
    setAttribute("theme", "dark")
  }

  if (!theme && window.matchMedia("(prefers-color-scheme: light)").matches) {
    setItem("theme", "light")
    setAttribute("theme", "light")
  }

  if (theme) {
    setAttribute("theme", theme)
  }

  if (getAttribute("theme") == "dark") {
    icon = "light_mode"
  } else icon = "dark_mode"

  return {
    icon: icon,
  }
}

export default getBrowserTheme
