const fs = require('fs');
/// Parses changelog text into a mutable object.
/// - Parameter path: Path to changelog json file.
exports.parseChangelog = (path) => {
  const data = fs.readFileSync(path);
  const contents = data.toString();
  return JSON.parse(contents);
}