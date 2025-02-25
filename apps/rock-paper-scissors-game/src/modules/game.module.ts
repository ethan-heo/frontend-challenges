/**
 * 데이터 처리
 * 1. 선택값 비교 O
 * 2. 컴퓨터 - 랜덤값 생성 O
 * 3. 스코어 출력 O
 * 4. 상태값 - me(READY -> PICKED), other(PICKING -> PICKED)
 *
 * 액션
 * 1. 나 - 값 선택하기
 * 2. 컴퓨터 - 값 선택하기
 * 4. 결과 - 값 비교, 스코어 변경
 */

export interface GameState {
  score: number;
  pickedMe: GAME_USE_CASE | null;
  pickedOther: GAME_USE_CASE | null;
}

export interface ComparedState {
  picked: GAME_USE_CASE;
}

export enum GAME_USE_CASE {
  SCISSORS = "scissors",
  PAPER = "paper",
  ROCK = "rock",
  LIZARD = "lizard",
  SPOCK = "spock",
}

export enum GAME_RESULT {
  TIED,
  WIN,
  DEFEAT,
}

export enum GAME_STATUS {
  READY,
  PICKING,
  PICKED,
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
    return GAME_RESULT.TIED;
  }
  const [meIdx, otherIdx] = [me, other].map(findUseCaseIdx);
  const WIN_CASES = [meIdx + 1, meIdx + 3].map((idx) => idx % CASE_LENGTH);

  if (WIN_CASES.some((win_case) => win_case === otherIdx)) {
    return GAME_RESULT.WIN;
  }

  return GAME_RESULT.DEFEAT;
};

/**
 * @description 이겼을 때 게임 상태 변경
 * @param state
 * @returns
 */
export const win = (state: GameState) => ({ ...state, score: state.score + 1 });

/**
 * @description 졌을 때 게임 상태 변경
 * @param state
 * @returns
 */
export const defeat = (state: GameState) => ({
  ...state,
  score: state.score > 0 ? state.score - 1 : state.score,
});

export const pickByRandom = (): number =>
  Math.floor(Math.random() * CASE_LENGTH);
