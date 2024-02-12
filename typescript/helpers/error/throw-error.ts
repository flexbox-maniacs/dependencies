function throwError(condition: boolean | undefined, error: string) {
  if (condition) {
    throw new Error(error)
  }
}

export default throwError
