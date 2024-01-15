import type { ReactElement } from "react";
import { Text } from "#/components/text";
import Image from "next/image";

export function AboutSection(): ReactElement {
  return (
    <div className="flex justify-between gap-16">
      <div className="space-y-5">
        <Text size="3xl" color = "black">Anurag Roy</Text>

        <Text color="black">
        I work with powerful technologies to help companies succeed. <br></br>
        Javascript, Typescript, Kafka, Ruby on Rails, Golang.
        </Text>
      </div>

      <div className="relative h-32 w-32 shrink-0 rounded-full sm:hidden">
        <Image src="/bluzzi.png" alt="Profile picture" fill className="rounded-full border-10" />
      </div>
    </div>
  );
}