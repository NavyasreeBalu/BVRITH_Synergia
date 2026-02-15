export type RegistrationStatus = 'Open' | 'Opening Soon' | 'Closed';

export const getRegistrationStatus = (
  eventDate: string,
  now: Date = new Date()
): RegistrationStatus => {
  const parsedEventDate = new Date(`${eventDate} 23:59:59`);

  if (Number.isNaN(parsedEventDate.getTime())) {
    return 'Opening Soon';
  }

  const registrationOpenDate = new Date(parsedEventDate);
  registrationOpenDate.setDate(parsedEventDate.getDate() - 10);

  if (now < registrationOpenDate) {
    return 'Opening Soon';
  }

  if (now <= parsedEventDate) {
    return 'Open';
  }

  return 'Closed';
};
