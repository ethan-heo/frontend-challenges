interface GAME_BUTTON_RESOURCE {
  useCase: GAME_USE_CASE;
  imgSrc: string;
}

export interface GameState {
  score: number;
  status: GAME_STATUS;
  playing: {
    pickedMe: GAME_BUTTON_RESOURCE | null;
    pickedOther: GAME_BUTTON_RESOURCE | null;
    status: GAME_PLAYING_STATUS | null;
  };
}

export enum GAME_USE_CASE {
  SCISSORS = "scissors",
  PAPER = "paper",
  ROCK = "rock",
  LIZARD = "lizard",
  SPOCK = "spock",
}

export enum GAME_PLAYING_STATUS {
  TIED,
  WIN,
  DEFEAT,
}

export enum GAME_STATUS {
  READY,
  PLAY,
  DONE,
}

const CASE_LENGTH = 5;
const INDEXED_USE_CASES = [
  GAME_USE_CASE.SCISSORS,
  GAME_USE_CASE.PAPER,
  GAME_USE_CASE.ROCK,
  GAME_USE_CASE.LIZARD,
  GAME_USE_CASE.SPOCK,
];

/**
 * @description GAME_USE_CASE의 순서를 반환
 * @param useCase
 * @returns
 */
export const findUseCaseIdx = (useCase: GAME_USE_CASE) =>
  INDEXED_USE_CASES.indexOf(useCase);

/**
 * @description 선택값을 비교한다
 * @param me
 * @param other
 * @returns
 * @example
 *
 * compare(CASE.SCISSORS, CASE.PAPER): RESULT.WIN
 */
export const compare = (me: GAME_USE_CASE, other: GAME_USE_CASE) => {
  if (me === other) {
    return GAME_PLAYING_STATUS.TIED;
  }
  const [meIdx, otherIdx] = [me, other].map(findUseCaseIdx);
  const WIN_CASES = [meIdx + 1, meIdx + 3].map((idx) => idx % CASE_LENGTH);

  if (WIN_CASES.some((win_case) => win_case === otherIdx)) {
    return GAME_PLAYING_STATUS.WIN;
  }

  return GAME_PLAYING_STATUS.DEFEAT;
};

/**
 * @description USE_CASE를 랜덤하게 반환한다.
 * @returns GAME_USE_CASE
 */
export const pickByRandom = (): GAME_USE_CASE =>
  INDEXED_USE_CASES[Math.floor(Math.random() * CASE_LENGTH)];
