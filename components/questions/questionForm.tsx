import { useState, useEffect } from 'react';

interface Choice {
  text: string;
  type: 'dollar' | 'number' | 'string' | 'boolean';
}

interface Question {
  title: string;
  choices: Choice[];
}

interface QuestionFormProps {
  onSave: (question: Question) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [choices, setChoices] = useState<Choice[]>([
    { text: '', type: 'string' },
    { text: '', type: 'string' },
  ]);
  const [errors, setErrors] = useState<string[]>([]);

  const validateChoices = (newChoices: Choice[]) => {
    const newErrors = newChoices.map((choice, index) => {
      if (!choice.text) {
        return `Choice ${index + 1} text is required.`;
      }
      switch (choice.type) {
        case 'dollar':
        case 'number':
          if (isNaN(Number(choice.text))) {
            return `Choice ${index + 1} must be a valid ${choice.type}.`;
          }
          break;
        case 'boolean':
          if (!['true', 'false'].includes(choice.text.toLowerCase())) {
            return `Choice ${index + 1} must be either "true" or "false".`;
          }
          break;
        case 'string':
        default:
          break;
      }
      return '';
    });
    setErrors(newErrors);
  };

  const handleChoiceChange = (index: number, field: 'text' | 'type', value: string) => {
    const newChoices = choices.map((choice, i) =>
      i === index ? { ...choice, [field]: value } : choice
    );
    setChoices(newChoices);
    validateChoices(newChoices);
  };

  const clear = () => {
    setTitle('');
    setChoices([{ text: '', type: 'string' }, { text: '', type: 'string' }]);
    setErrors([]);
  };

  const handleSave = () => {
    if (errors.some(error => error !== '')) {
      return;
    }
    onSave({ title, choices });
    clear();
  };

  const allChoicesFilled = choices.every(choice => choice.text && choice.type);

  return (
    <div className="p-4">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter the question title"
        />
      </div>
      {choices.map((choice, index) => (
        <div key={index} className="mt-4">
          <div className="flex items-center">
            <div className="flex-1 mr-2">
              <label htmlFor={`choice-text-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Choice {index + 1} Text</label>
              <input
                id={`choice-text-${index}`}
                type="text"
                value={choice.text}
                onChange={(e) => handleChoiceChange(index, 'text', e.target.value)}
                className="border p-2 w-full"
                placeholder={`Enter text for choice ${index + 1}`}
              />
            </div>
            <div className="flex-1">
              <label htmlFor={`choice-type-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Choice {index + 1} Type</label>
              <select
                id={`choice-type-${index}`}
                value={choice.type}
                onChange={(e) => handleChoiceChange(index, 'type', e.target.value)}
                className="border p-2 w-full"
              >
                <option value="dollar">Dollar</option>
                <option value="number">Number</option>
                <option value="string">String</option>
                <option value="boolean">Boolean</option>
              </select>
            </div>
          </div>
          <div className="text-red-500 mt-1 h-4">
            {errors[index] && errors[index]}
          </div>
        </div>
      ))}
      <div className="mt-4 h-10">
        {allChoicesFilled && (
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;
