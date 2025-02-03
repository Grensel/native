import { UsersType } from "./08";

let users: UsersType;

beforeEach(() => {
  users = {
    "101": { id: 101, name: "Dimych" },
    "32332312": { id: 32332312, name: "Natash" },
    "1": { id: 1, name: "Katya" },
  };
});

test("should update corresponding user", () => {
  users["1"].name = "Ekaterina";
  expect(users["1"]).toEqual({ id: 1, name: "Ekaterina" });
});

test("should delete corresponding user", () => {
  delete users["1"];
  expect(users["1"]).toBeUndefined();
});
