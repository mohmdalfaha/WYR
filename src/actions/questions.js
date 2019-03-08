import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading} from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { addUserQuestion } from '../actions/users'
import { saveUserAnswer } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return{
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (title,optionOne,optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()


    dispatch(showLoading())

    return saveQuestion({
      title,
      optionOneText:optionOne,
      optionTwoText:optionTwo,
      author: authedUser,
    })
    .then((question) => {
          dispatch(addQuestion(question))
          dispatch(addUserQuestion(authedUser, question.id))
          dispatch(handleInitialData())
          dispatch(hideLoading())
        })



  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveAnswer ({authedUser,qid,answer}) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer (info) {
  return (dispatch,getState) => {
    dispatch(showLoading())

    return saveQuestionAnswer(info)
        .then(() => dispatch(saveAnswer(info)))
        .then(() => dispatch(saveUserAnswer(info)))
        .then(() => dispatch(hideLoading()))
  }
}
