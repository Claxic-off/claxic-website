/**
 * Fetches published courses from the configured Google Sheets endpoint.
 *
 * Setup:
 * 1. Create a Google Sheet named "Claxic Academy Course Catalogue" with a tab named "Courses".
 * 2. Add columns: slug, title, category, level, description, duration, format, price, status, coverImage
 * 3. Publish via Google Apps Script (see README for script) or export as a published CSV.
 * 4. Set VITE_COURSES_API_URL in your .env file to the public endpoint URL.
 *
 * Only courses with status === "Published" are shown.
 */

const API_URL = import.meta.env.VITE_COURSES_API_URL;

/**
 * @returns {Promise<Array>} Array of published course objects.
 */
export async function fetchCourses() {
  if (!API_URL || API_URL === 'YOUR_PUBLIC_COURSE_CATALOGUE_ENDPOINT') {
    // Return empty so the UI shows the empty state gracefully.
    return [];
  }

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') || '';
  let data;

  if (contentType.includes('application/json')) {
    data = await response.json();
  } else if (contentType.includes('text/csv') || contentType.includes('text/plain')) {
    // Handle published Google Sheets CSV
    const text = await response.text();
    data = parseCsv(text);
  } else {
    // Try JSON first, fall back to text
    const text = await response.text();
    try {
      data = JSON.parse(text);
    } catch {
      data = parseCsv(text);
    }
  }

  // Support Google Apps Script wrapper: { courses: [...] }
  const rows = Array.isArray(data) ? data : data.courses ?? [];

  return rows.filter(
    (course) => course.status && course.status.trim().toLowerCase() === 'published'
  );
}

/**
 * Minimal CSV parser for single-tab Google Sheet exports.
 */
function parseCsv(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''));

  return lines.slice(1).map((line) => {
    const values = splitCsvLine(line);
    return Object.fromEntries(headers.map((h, i) => [h, (values[i] ?? '').trim().replace(/^"|"$/g, '')]));
  });
}

function splitCsvLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}
