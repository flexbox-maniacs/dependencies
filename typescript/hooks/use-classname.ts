import throwError from "../helpers/error/throw-error"

function useClassName(defaultClass: Array<string> | string, propClasses?: object, componentProps?: object) {
  throwError(propClasses && !componentProps, "Parameter 'componentProps' is missing.")
  throwError(componentProps && !propClasses, "Parameter 'propClasses' is missing.")

  let classes: Array<string> = []

  if (Array.isArray(defaultClass)) {
    classes = classes.concat(defaultClass)
  } else classes.push(defaultClass)

  if (componentProps && propClasses) {
    for (const key in propClasses) {
      if (key in componentProps) {
        classes.push(propClasses[key])
      }
    }
  }

  return classes.join(" ")
}

export default useClassName
