interface Choice {
  text: string
  type: 'dollar' | 'number' | 'string' | 'boolean'
}

interface Question {
  title: string
  choices: Choice[]
}

interface QuestionsListProps {
  questions: Question[]
}

const QuestionsList: React.FC<QuestionsListProps> = ({ questions }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-4">Saved Questions:</h2>
      <ul className="space-y-6">
        {questions.map((question, index) => (
          <li key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{question.title}</h3>
            <ul className="space-y-2 ml-4">
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex} className="flex items-center space-x-2">
                  <span className="font-semibold">{choice.text}</span>
                  <span className="text-gray-500 dark:text-gray-400">- {choice.type}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsList
