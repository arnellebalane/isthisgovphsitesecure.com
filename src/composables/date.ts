export const useDate = (date: Date): string => {
  const month = date.toLocaleDateString(undefined, { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${month} ${day}, ${year} ${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
};
