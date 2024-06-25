"use client"

import { useState } from 'react'
import Modal from '@/components/modals/customModal'
import QuestionForm from '@/components/questions/questionForm'
import QuestionsList from '@/components/questions/questionsList'
import ModeToggle from '@/components/style/toggleMode'

interface Choice {
  text: string
  type: 'dollar' | 'number' | 'string' | 'boolean'
}

interface Question {
  title: string
  choices: Choice[]
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])

  const handleSave = (newQuestion: Question) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion])
    console.log(newQuestion) // This is where you can handle the saved question
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Modal open={true}>
        <QuestionForm onSave={handleSave} />
      </Modal>
      {questions.length > 0 && (
        <div className="mt-8">
          <QuestionsList questions={questions} />
        </div>
      )}
    </div>
  )
}
