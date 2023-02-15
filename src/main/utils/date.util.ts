export function formatDate(date: string | Date) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(new Date(date));
}

export function formatTime(date: string | Date) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return formatter.format(new Date(date));
}