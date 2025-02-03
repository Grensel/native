export type UsersType = {
  [key: string]: { id: number; name: string };
};

export const userObj = {
  "0": "Dymich",
  "1": "Natasha",
  "2": "Valera",
  "3": "Katya",
};
export const users: UsersType = {
  "101": { id: 101, name: "Dimych" },
  "32332312": { id: 32332312, name: "Natash" },
  "1": { id: 1, name: "Katya" },
};

const user = { id: 100500, name: "Igor" };

users[user.id] = user;
delete users[user.id];
users[user.id].name = "Vitya";

export const usersArray = [
  { id: 101, name: "Dimych" },
  { id: 32332312, name: "Natash" },
  { id: 1, name: "Katya" },
];

usersArray.push(user);

const usersCopy = [...usersArray.filter(u => u.id !== user.id), user];
