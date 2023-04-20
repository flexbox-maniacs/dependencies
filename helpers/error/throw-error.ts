function throwError(condition: string, error: string) {
  if (condition) {
    throw new Error(error)
  }
}

export default throwError
