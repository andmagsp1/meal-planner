import { Heading2, Paragraph } from "@sb1/ffe-core-react";
import { formatSteps } from "./helpers/formatSteps.ts";
import { useTexts } from "./texts.ts";

interface Props {
  steps: string;
}

export function Steps({ steps }: Props) {
  const texts = useTexts();

  return (
    <>
      <Heading2 lookLike={3}>{texts.steps}</Heading2>
      <ol>
        {formatSteps(steps).map((step, index) => (
          <li key={index + step}>
            <Paragraph>{step}</Paragraph>
          </li>
        ))}
      </ol>
    </>
  );
}
