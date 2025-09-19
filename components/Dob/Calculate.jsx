// utils/calcAge.js
export const calculateAge = (dobString) => {
  const dob = new Date(dobString); // "2003-10-28"
  const now = new Date();

  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  const dayDiff = now.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--; // birthday not reached this year yet
  }

  return age;
};
