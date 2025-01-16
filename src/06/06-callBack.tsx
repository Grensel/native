// const callBack = (): number => {
//   alert("hey");
//   return 12;
// };
// window.setTimeout(callBack, 1000);

import { ChangeEvent, MouseEvent, useState } from "react";

export const User = () => {
  const [age, setAge] = useState("");
  const search = (event: MouseEvent<HTMLButtonElement>) => {
    alert(age);
  };

  const onNameChanged = () => {
    console.log("name changed");
  };

  const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("age changed: " + e.currentTarget.value);
    setAge(e.currentTarget.value);
  };

  const focusLostHand = () => {
    console.log("focus lost");
  };

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHand}>
        Dimych
      </textarea>
      <input onChange={onAgeChanged} type={"number"} />
      <button name="delete" onClick={search}>
        search
      </button>
      {/* <button name="save" onClick={deleteUser}>
        save
      </button> */}
    </div>
  );
};
