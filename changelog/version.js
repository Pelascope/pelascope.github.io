/// Looks for app version in command-line argument, and returns formatted version string.
/// - Important: The app version argument should take the form MAJOR.MINOR.REVISION.
/// - Parameter args: Array of arguments via `process.argv`.
/// - Returns: If a third argument is found, then a formatted version string is returned.
exports.getAppVersion = (args) => {
  if (args.length > 2) {
    const version = args[2];
    if (version.split('.').length == 3) {
      return "v" + version;
    }
  }
  throw new Error('Error: *** A valid version number MAJOR.MINOR.REVISION not found.')
}