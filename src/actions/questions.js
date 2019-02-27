import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveAnswer ({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    qid,
    authedUser,
    answer,
  }
}

export function handleSaveAnswer (info) {
  return (dispatch) => {
    dispatch(saveAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleSaveAnswer:',e)
        dispatch(saveAnswer(info))
        alert('There was an error saving the answer. Try again.')
      })
  }
}