function useDefaults(propList: object, object: object) {
  const props = {}

  for (const key in object) {
    props[key] = propList[key] ?? object[key]
  }

  return props
}

export default useDefaults
