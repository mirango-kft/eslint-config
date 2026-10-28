import { useState } from "react";

import { greet } from "./fixture";

export function Counter({ name }: Readonly<{ name: string }>) {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      {greet(name)}: {count}
    </button>
  );
}
