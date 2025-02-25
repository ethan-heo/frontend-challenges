import { beforeEach, describe, expect, it } from "vitest";
import {
  GAME_USE_CASE,
  compare,
  defeat,
  pickByRandom,
  GAME_RESULT,
  win,
  findUseCaseIdx,
} from "./game.module";

describe(`GAME`, () => {
  beforeEach(() => {});

  it.each([
    [GAME_USE_CASE.SCISSORS, GAME_USE_CASE.PAPER, GAME_RESULT.WIN],
    [GAME_USE_CASE.SCISSORS, GAME_USE_CASE.LIZARD, GAME_RESULT.WIN],
    [GAME_USE_CASE.PAPER, GAME_USE_CASE.ROCK, GAME_RESULT.WIN],
    [GAME_USE_CASE.PAPER, GAME_USE_CASE.SPOCK, GAME_RESULT.WIN],
    [GAME_USE_CASE.ROCK, GAME_USE_CASE.LIZARD, GAME_RESULT.WIN],
    [GAME_USE_CASE.ROCK, GAME_USE_CASE.SCISSORS, GAME_RESULT.WIN],
    [GAME_USE_CASE.LIZARD, GAME_USE_CASE.SPOCK, GAME_RESULT.WIN],
    [GAME_USE_CASE.LIZARD, GAME_USE_CASE.PAPER, GAME_RESULT.WIN],
    [GAME_USE_CASE.SPOCK, GAME_USE_CASE.SCISSORS, GAME_RESULT.WIN],
    [GAME_USE_CASE.SPOCK, GAME_USE_CASE.ROCK, GAME_RESULT.WIN],
  ])(`선택 비교 me(%o), other(%o)`, (me, other, gameResult) => {
    expect(compare(me, other)).toBe(gameResult);
  });

  it(`이겼을 때`, () => {
    expect(win({ score: 0, pickedMe: null, pickedOther: null })).toStrictEqual({
      score: 1,
      pickedMe: null,
      pickedOther: null,
    });
  });

  it(`졌을 때`, () => {
    expect(
      defeat({ score: 2, pickedMe: null, pickedOther: null }),
    ).toStrictEqual({
      score: 1,
      pickedMe: null,
      pickedOther: null,
    });
    expect(
      defeat({ score: 1, pickedMe: null, pickedOther: null }),
    ).toStrictEqual({
      score: 0,
      pickedMe: null,
      pickedOther: null,
    });
    expect(
      defeat({ score: 0, pickedMe: null, pickedOther: null }),
    ).toStrictEqual({
      score: 0,
      pickedMe: null,
      pickedOther: null,
    });
  });

  it(`랜덤 선택값 출력`, () => {
    const GAME_USE_CASES = [
      GAME_USE_CASE.SCISSORS,
      GAME_USE_CASE.PAPER,
      GAME_USE_CASE.ROCK,
      GAME_USE_CASE.LIZARD,
      GAME_USE_CASE.SPOCK,
    ];

    for (let i = 0; i < 100; i++) {
      const picked = pickByRandom();

      expect(
        GAME_USE_CASES.some((useCase) => findUseCaseIdx(useCase) === picked),
      ).toBeTruthy();
    }
  });
});
