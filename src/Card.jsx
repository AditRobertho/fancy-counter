import { useEffect, useState } from "react";
import Count from "./Count";
import ResetButton from "./ResetButton";
import Title from "./Title";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        setCount(count + 1);
        if (newCount > 5) {
          setCount(5);
          return;
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton
          locked={locked}
          type="minus"
          setCount={setCount}
        />

        <CountButton
          locked={locked}
          type="plus"
          setCount={setCount}
        />
      </ButtonContainer>
    </div>
  );
}
