const fs = require('fs');
const { parseChangelog } = require('./parse');

const changelog = 'changelog.json';

/// Writes to `./changelog.json` file in same directory.
/// - Parameters:
///   - notes: An array of notes. Please proofread.
///   - version: A version number for the release.
exports.writeToChangelog = (notes, version) => {

  // Grab and convert the existing changelog into an array.
  let releaseNotes = parseChangelog(changelog);

  // Create new element.
  const newReleaseInformation = {
    'date':  getFormattedDate(),
    'title': version,
    'notes': notes,
  }

  // Insert new release notes at start of the existing array.
  releaseNotes.unshift(newReleaseInformation);

  // Add the release notes to the changelog file.
  fs.writeFileSync(changelog, JSON.stringify(releaseNotes, null, 2));
}

// Returns date in the format Month dd, YYYY (e.g. January 1, 2020).
function getFormattedDate() {
  const date  = new Date();
  const month = Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const day   = Intl.DateTimeFormat('en', { day:   'numeric' }).format(date);
  const year  = Intl.DateTimeFormat('en', { year:  'numeric' }).format(date);
  return month + " " + day + ", " + year;
}