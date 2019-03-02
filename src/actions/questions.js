import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading} from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion (question) {
  return{
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOne,optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()


    const question = {
      optionOne,
      optionTwo,
      author:authedUser,
    }
        dispatch(showLoading())

    return saveQuestion(question)

    .then((question) => {
      dispatch(addQuestion(question))
      dispatch(handleInitialData());
      dispatch(hideLoading());
    })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveAnswer (answerInfo) {
  return {
    type: SAVE_ANSWER,
    answerInfo
  }
}

export function handleSaveAnswer (info) {
  return (dispatch, getState) => {

        dispatch(showLoading())

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleSaveAnswer:',e)
        dispatch(saveAnswer(info))
        alert('There was an error saving the answer. Try again.')

      })
            .then(() => dispatch(hideLoading()));
  }
}