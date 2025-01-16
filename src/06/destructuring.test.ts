import { ManType } from "./destructuring";

let props: ManType;
beforeEach(() => {
  props = {
    name: "dimych",
    age: 32,
    lessons: [{ title: "1" }, { title: "2" }, { title: "3", name: "react" }],
    address: {
      street: {
        title: "Nezavisimosti street",
      },
    },
  };
});

test("a", () => {
  // const age = props.age;
  // const lessons = props.lessons;

  const { age: a, lessons } = props;
  const { title } = props.address.street;

  expect(a).toBe(32);
  expect(lessons.length).toBe(3);
  expect(title).toBe("Nezavisimosti street");
});

test("b", () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1, ls2] = props.lessons;
  const [, , ls3] = props.lessons;
  const [lss1, ...restLessons] = props.lessons;
  const [, lss2, ...restLesson] = props.lessons;

  expect(l1.title).toBe("1");
  expect(l2.title).toBe("2");
  expect(ls1.title).toBe("1");
  expect(ls2.title).toBe("2");
  expect(ls3.title).toBe("3");
  expect(lss1.title).toBe("1");
  expect(restLessons.length).toBe(2);
  expect(restLessons[0].title).toBe("2");

  expect(lss2.title).toBe("2");
  expect(restLesson.length).toBe(1);
  expect(restLesson[0].title).toBe("3");
  expect(restLesson[0].name).toBe("react");
  expect(restLesson[0]).toStrictEqual({ title: "3", name: "react" });
});
