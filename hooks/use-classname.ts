function useClassName(
  componentClass: Array<string | null>,
  props?: object,
  classList?: object
) {
  if (props && classList) {
    for (const key in props) {
      if (key in classList && props[key as keyof typeof classList]) {
        componentClass.push(classList[key as keyof typeof classList])
      }
    }
  }

  return componentClass
    .filter(function (className) {
      return className != null
    })
    .join(" ")
}

export default useClassName
