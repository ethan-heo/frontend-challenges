import { ChallengeInfo } from "./models/challenge.model";
import "./ChallengeItem.css";

const ChallengeItem = ({
  link,
  name,
  skills,
  description,
  sourceLink,
  source,
}: ChallengeInfo) => {
  const baseURL = "/frontend-challenges";
  const _link = `${baseURL}${link}`;

  return (
    <figure className="challenge">
      <div className="challenge-item__thumbnail">
        <iframe loading="lazy" src={_link} title={name} />
      </div>
      <ul className="challenge-item__skills">
        {skills.map((skill) => (
          <li key={`${name}-${skill}`}>{skill}</li>
        ))}
      </ul>
      <figcaption>{description}</figcaption>
      <div className="challenge__link">
        <a href={sourceLink} target="_blank">
          #{source}
        </a>
        <a href={_link} target="_blank">
          Go to page
        </a>
      </div>
    </figure>
  );
};

export default ChallengeItem;
