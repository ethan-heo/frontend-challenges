import { ChallengeInfo } from "./models/challenge.model";

const ChallengeItem = ({
  link,
  name,
  skills,
  description,
  sourceLink,
  source,
}: ChallengeInfo) => {
  return (
    <figure>
      <iframe src={link} title={name} />
      <ul>
        {skills.map((skill) => (
          <li key={`${name}-${skill}`}>{skill}</li>
        ))}
      </ul>
      <figcaption>{description}</figcaption>
      <a href={sourceLink}>{source}</a>
    </figure>
  );
};

export default ChallengeItem;
