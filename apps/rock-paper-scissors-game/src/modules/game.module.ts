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
  pickedMe: CASE | null;
  pickedOther: CASE | null;
}

export interface ComparedState {
  picked: CASE;
}

export enum CASE {
  SCISSORS,
  PAPER,
  ROCK,
  LIZARD,
  SPOCK,
}

export enum RESULT {
  TIED,
  WIN,
  DEFEAT,
}

export enum ME_STATUS {
  READY = "ready",
  PICKED = "picked",
}

export enum OTHER_STATUS {
  PICKED = "picked",
  PICKING = "picking",
}

const CASE_LENGTH = 5;

/**
 * @description 선택값을 비교한다
 * @param me
 * @param other
 * @returns
 * @example
 *
 * compare(CASE.SCISSORS, CASE.PAPER): RESULT.WIN
 */
export const compare = (me: CASE, other: CASE) => {
  if (me === other) {
    return RESULT.TIED;
  }

  const WIN_CASES = [me + 1, me + 3].map((win_case) => win_case % CASE_LENGTH);

  if (WIN_CASES.some((win_case) => win_case === other)) {
    return RESULT.WIN;
  }

  return RESULT.DEFEAT;
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

export const pickByRandom = (): CASE => Math.floor(Math.random() * CASE_LENGTH);
