import ChallengeItem from "./ChallengeItem";
import { ChallengeInfo } from "./models/challenge.model";
import challengeData from "./assets/challenges.json";
import "./Challenge.css";
import ChallengeEmpty from "./ChallengeEmpty";

const Challenge: React.FC = () => {
  const challenges: ChallengeInfo[] = challengeData.infos;

  return (
    <section className="challenge">
      <h1>Challenges</h1>
      {challenges.length > 0 ? (
        <ul className="challenge-list">
          {challenges.map((challenge) => (
            <li key={challenge.name}>
              <ChallengeItem {...challenge} />
            </li>
          ))}
        </ul>
      ) : (
        <ChallengeEmpty />
      )}
    </section>
  );
};

export default Challenge;
