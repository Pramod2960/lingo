import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2h0pUX10DiYy83dVscQbfLaQHFY",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
