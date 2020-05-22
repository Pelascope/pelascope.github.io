const { exec } = require('child_process');
/// Commits and pushes directory to remote origin.
/// - Parameter version: A version number for the release.
exports.commit = (version) => {
  exec('git add changelog.json');
  exec('git commit -m \"' + version + '\"');
  exec('git push');
}