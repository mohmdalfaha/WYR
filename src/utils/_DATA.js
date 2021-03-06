import pic from './pic.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

let users = {
  sarah: {
    id: 'sarah',
    name: ' Sarah',
    avatarURL: pic3,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  mohmdalfaha: {
    id: 'mohmdalfaha',
    name: 'Mohmd Faha',
    avatarURL: pic ,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  ibrahim: {
    id: 'ibrahim',
    name: ' Ibrahim ',
    avatarURL: pic2,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarah',
    timestamp: 1467166872634,
    title:'memory',
    optionOne: {
      votes: ['sarah'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'ibrahim',
    timestamp: 1468479767190,
    title: 'To be',
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['ibrahim', 'sarah'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarah',
    timestamp: 1488579767190,
    title: 'superpowers',
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarah'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'mohmdalfaha',
    timestamp: 1482579767190,
    title: 'developer',
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarah'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'mohmdalfaha',
    timestamp: 1489579767190,
    title: 'money',
    optionOne: {
      votes: ['mohmdalfaha'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['ibrahim'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'ibrahim',
    timestamp: 1493579767190,
    title:'Programming Language',
    optionOne: {
      votes: ['ibrahim'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['mohmdalfaha'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

 function formatQuestion ({ title, optionOneText, optionTwoText,author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    title,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,

    }
  }


}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);
//console.log('foramated optins:',question.optionOne,question.optionTwo)
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }
      //console.log('final result',formattedQuestion)
      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({authedUser, qid, answer}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
