function useClassName(componentClass: Array<string> | string, props?: object, classList?: object, className?: string) {
  let classes: Array<string> = []

  if (Array.isArray(componentClass)) {
    classes = classes.concat(componentClass)
  } else classes.push(componentClass)

  if (props && classList) {
    for (const key in classList) {
      if (key in props) {
        classes.push(classList[key])
      }
    }
  }

  if (className) {
    classes.unshift(className)
  }

  return classes.join(" ")
}

export default useClassName
