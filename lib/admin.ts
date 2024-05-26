import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e89Y6rmG7t6419zWAQ77FIshzK",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
