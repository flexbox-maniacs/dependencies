function throwError(condition: boolean, error: string) {
  if (condition) {
    throw new Error(error)
  }
}

export default throwError
