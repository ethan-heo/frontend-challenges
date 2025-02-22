import { beforeEach, describe, expect, it } from "vitest";
import {
  CASE,
  compare,
  defeat,
  pickByRandom,
  RESULT,
  win,
} from "./game.module";

describe(`GAME`, () => {
  beforeEach(() => {});

  it.each([
    [CASE.SCISSORS, CASE.PAPER, RESULT.WIN],
    [CASE.SCISSORS, CASE.LIZARD, RESULT.WIN],
    [CASE.PAPER, CASE.ROCK, RESULT.WIN],
    [CASE.PAPER, CASE.SPOCK, RESULT.WIN],
    [CASE.ROCK, CASE.LIZARD, RESULT.WIN],
    [CASE.ROCK, CASE.SCISSORS, RESULT.WIN],
    [CASE.LIZARD, CASE.SPOCK, RESULT.WIN],
    [CASE.LIZARD, CASE.PAPER, RESULT.WIN],
    [CASE.SPOCK, CASE.SCISSORS, RESULT.WIN],
    [CASE.SPOCK, CASE.ROCK, RESULT.WIN],
  ])(`선택 비교 me(%o), other(%o)`, (me, other, result) => {
    expect(compare(me, other)).toBe(result);
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
    const CASES = [
      CASE.SCISSORS,
      CASE.PAPER,
      CASE.ROCK,
      CASE.LIZARD,
      CASE.SPOCK,
    ];

    for (let i = 0; i < 100; i++) {
      const picked = pickByRandom();

      expect(CASES.some((_case) => _case === picked)).toBeTruthy();
    }
  });
});
