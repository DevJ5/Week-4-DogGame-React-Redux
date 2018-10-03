import { SET_BREEDS } from '../reducers/allBreeds';
import { SET_CORRECT_BREED } from '../reducers/correctBreed';
import { GET_ANSWERS } from '../reducers/answers';
import { ADD_TO_SCORE } from '../reducers/score/currentScore';
import { ADD_TO_QUESTIONS_ASKED } from '../reducers/score/numberOfQuestionsAsked';
import { ADD_TO_STREAK, RESET_STREAK } from '../reducers/currentStreak';
import request from 'superagent';

export const getAllBreeds = () => {
  return function(dispatch) {
    request.get('https://dog.ceo/api/breeds/list/all').then(res => {
      dispatch(setAllBreeds(res.body.message));
    });
  };
};

export const setAllBreeds = breeds => ({
  type: SET_BREEDS,
  payload: breeds
});

export const setCorrectBreed = breedUrl => ({
  type: SET_CORRECT_BREED,
  payload: breedUrl
});

export const getAnswers = (correctBreed, allBreeds) => ({
  type: GET_ANSWERS,
  payload: {
    correctBreed,
    allBreeds
  }
});

export const addToScore = () => ({
  type: ADD_TO_SCORE
});

export const addToNumberOfQuestionsAsked = () => ({
  type: ADD_TO_QUESTIONS_ASKED
});

export const addToWinStreak = () => ({
  type: ADD_TO_STREAK
});

export const resetWinStreak = () => ({
  type: RESET_STREAK
});
