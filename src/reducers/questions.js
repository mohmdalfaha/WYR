import { RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action ) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case SAVE_ANSWER :
      const {answerInfo} = action
      const {qid, authedUser} = answerInfo
      const selectedAnswer = answerInfo.answer

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [selectedAnswer]: {
            ...state[qid][selectedAnswer],
            votes: state[qid][selectedAnswer].votes.concat([authedUser])
          }
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
      default :
        return state
  }
}