const DateReader = (date: string) => {
  try {
    if (!date) return;
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch (error) {
    console.log(error);
  }
};
export default DateReader;
