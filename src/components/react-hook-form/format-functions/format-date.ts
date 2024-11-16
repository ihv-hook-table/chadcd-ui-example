export function formatDateFromISOString(isoString: string): string {
  const date = new Date(isoString);

  const value = new Intl.DateTimeFormat(navigator.language, {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  return value;
}

export function formatDateTimeFromISOString(isoString: string): string {
  const date = new Date(isoString);

  const value = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'short',
    timeStyle: 'short',
  })
    .format(date)
    .replace(',', ' ');

  return value;
}
