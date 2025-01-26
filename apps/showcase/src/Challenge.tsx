import ChallengeItem from "./ChallengeItem";
import { CHALLENGES_MOCK } from "./mocks/challenges.mock";
import { ChallengeInfo } from "./models/challenge.model";

const Challenge: React.FC = () => {
  const challenges: ChallengeInfo[] = CHALLENGES_MOCK;

  return (
    <section>
      <h1>Challenges</h1>
      <div>
        {challenges.map((challenge) => (
          <ChallengeItem key={challenge.name} {...challenge} />
        ))}
      </div>
    </section>
  );
};

export default Challenge;
