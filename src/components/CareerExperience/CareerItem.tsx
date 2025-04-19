import {
  format,
  differenceInMonths,
  differenceInDays,
  addMonths,
} from "date-fns";
import { ICareerExperience } from "./ICareerExperience";

interface Props {
  experience: ICareerExperience;
}

export function CareerItem({ experience }: Props) {
  const start = new Date(experience.startDate);
  const end = experience.endDate ? new Date(experience.endDate) : new Date();

  let months = differenceInMonths(end, start);
  const extraDays = differenceInDays(end, addMonths(start, months));

  if (extraDays > 0) {
    months += 1;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const duration = [
    years ? `${years} year${years > 1 ? "s" : ""}` : null,
    remainingMonths
      ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
      : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className="space-y-1 list-disc list-inside">
      <strong>{experience.role}</strong> at {experience.company}
      <br />
      <span className="text-sm text-gray-500">
        {format(start, "MMM yyyy")} –{" "}
        {experience.endDate ? format(end, "MMM yyyy") : "Present"} ({duration})
      </span>
      {experience.description.map((row) => (
        <p className="text-gray-700 text-md">{"- " + row}</p>
      ))}
    </li>
  );
}
