import { getItem, setItem, setAttribute } from "../scripts"

function changeTheme(): Record<string, string> {
  let icon: string
  let theme = getItem("theme")

  switch (theme) {
    case "dark":
      setItem("theme", "light")
      break
    default:
      setItem("theme", "dark")
  }

  theme = getItem("theme")

  setAttribute("theme", String(theme))

  switch (theme) {
    case "dark":
      icon = "light_mode"
      break
    default:
      icon = "dark_mode"
  }

  return {
    icon: icon,
  }
}

export default changeTheme
