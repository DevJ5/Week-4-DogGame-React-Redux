import { combineReducers } from 'redux';

import allBreeds from './allBreeds';
import correctBreed from './correctBreed';
import answers from './answers';
import currentScore from './currentScore';
import numberOfQuestionsAsked from './numberOfQuestionsAsked';
import currentStreak from './currentStreak'

export default combineReducers({
  allBreeds,
  correctBreed,
  answers,
  currentScore,
  numberOfQuestionsAsked,
  currentStreak
});
