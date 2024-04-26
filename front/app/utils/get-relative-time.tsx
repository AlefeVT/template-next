// get-relative-time.ts

export function getRelativeTimeString(startDate: Date | string): string {
  const startDateTime =
    startDate instanceof Date ? startDate : new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - startDateTime.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ano${years !== 1 ? 's' : ''}`;
  } else if (months > 0) {
    return `${months} mês${months !== 1 ? 'es' : ''}`;
  } else if (days > 0) {
    return `${days} dia${days !== 1 ? 's' : ''}`;
  } else if (hours > 0) {
    return `${hours} hora${hours !== 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
  } else {
    return `${seconds} segundo${seconds !== 1 ? 's' : ''}`;
  }
}
