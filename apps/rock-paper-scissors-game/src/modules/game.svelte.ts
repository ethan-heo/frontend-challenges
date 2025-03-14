import {
  compare,
  GAME_PLAYING_STATUS,
  GAME_STATUS,
  GAME_USE_CASE,
  pickByRandom,
  type GameState,
} from "../modules/game.module";

const initialState = {
  score: 0,
  status: GAME_STATUS.READY,
  playing: {
    pickedMe: null,
    pickedOther: null,
    status: null,
  },
};

export const GAME_BUTTONS = [
  {
    imgSrc: "images/icon-scissors.svg",
    useCase: GAME_USE_CASE.SCISSORS,
  },
  {
    imgSrc: "images/icon-paper.svg",
    useCase: GAME_USE_CASE.PAPER,
  },
  {
    imgSrc: "images/icon-rock.svg",
    useCase: GAME_USE_CASE.ROCK,
  },
  {
    imgSrc: "images/icon-lizard.svg",
    useCase: GAME_USE_CASE.LIZARD,
  },
  {
    imgSrc: "images/icon-spock.svg",
    useCase: GAME_USE_CASE.SPOCK,
  },
];

const findButton = (useCase: GAME_USE_CASE) =>
  GAME_BUTTONS.find((btn) => btn.useCase === useCase) ?? null;

const state = $state<GameState>(initialState);

const gameModules = {
  state,
  pickMe: (useCase: GAME_USE_CASE) => {
    state.playing.pickedMe = findButton(useCase);
    state.status = GAME_STATUS.PLAY;
  },
  playWithHouse: () => {
    const { pickedMe } = state.playing;
    const pickedHouse = pickByRandom();
    const result = compare(pickedMe!.useCase, pickedHouse);

    switch (result) {
      case GAME_PLAYING_STATUS.WIN:
        state.score++;
        break;
      case GAME_PLAYING_STATUS.DEFEAT:
        state.score = state.score > 1 ? state.score - 1 : state.score;
        break;
    }

    state.playing.status = result;
    state.playing.pickedOther = findButton(pickedHouse);
    state.status = GAME_STATUS.DONE;
  },
  tryAgain: () => {
    state.status = GAME_STATUS.READY;
    state.playing = initialState.playing;
  },
};

export default gameModules;
