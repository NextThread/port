import type { ReactElement } from "react";
import type { ExperienceProps } from "./experience-info.type";
import { Text } from "#/components/text";
import { Label } from "#/components/label";
import { getLabelInfoByExperienceType } from "./experience-info.util";

export function ExperienceInfo({ experience, ...props }: ExperienceProps): ReactElement {
  const experienceTypeLabel = getLabelInfoByExperienceType(experience.type);

  return (
    <div {...props}>
      <div className="flex justify-between sm:flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <Text color="green" size="large" className="uppercase">{experience.company}</Text>

          <Label color={experienceTypeLabel.color} text={experienceTypeLabel.text} link={experience.link ?? undefined} />
        </div>

        <Text color="gray">
          {experience.dateFormat.start} - {experience.dateFormat.end} ({experience.duration})
        </Text>
      </div>

      <Text className="mb-1">{experience.title}</Text>

      {experience.description.map(line => <Text key={line} color="gray" size="small" className="ml-1">● {line}</Text>)}

      <Text size="small" color="gray" className="mt-1">
        <span className="text-white">Technologies :</span> {experience.skills.join(" • ")}
      </Text>
    </div>
  );
}