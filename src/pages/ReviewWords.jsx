import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ReviewWords = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', options: ['Luck', 'Coincidence', 'Fate', 'Destiny'] },
    { id: 2, word: 'Ephemeral', definition: 'Lasting for a very short time.', options: ['Eternal', 'Temporary', 'Permanent', 'Enduring'] },
    { id: 3, word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', options: ['Rare', 'Common', 'Scarce', 'Unique'] },
    { id: 4, word: 'Eloquent', definition: 'Fluent or persuasive in speaking or writing.', options: ['Articulate', 'Inarticulate', 'Silent', 'Shy'] },
    { id: 5, word: 'Enigma', definition: 'A person or thing that is mysterious, puzzling, or difficult to understand.', options: ['Mystery', 'Solution', 'Answer', 'Clarity'] },
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [exerciseType, setExerciseType] = useState('definition');

  const currentWord = words[currentWordIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    let isCorrect = false;
    if (exerciseType === 'definition') {
      isCorrect = userInput.toLowerCase() === currentWord.word.toLowerCase();
    } else if (exerciseType === 'multipleChoice') {
      isCorrect = userInput === currentWord.word;
    }
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setUserInput('');
    setShowResult(false);
    setExerciseType(Math.random() < 0.5 ? 'definition' : 'multipleChoice');
  };

  const progress = ((currentWordIndex + 1) / words.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">复习单词</h1>
      <Progress value={progress} className="mb-4" />
      <p className="text-sm text-gray-600 mb-6">进度: {currentWordIndex + 1} / {words.length} 词</p>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{exerciseType === 'definition' ? '定义匹配' : '选择正确选项'}</CardTitle>
        </CardHeader>
        <CardContent>
          {exerciseType === 'definition' ? (
            <>
              <p className="text-lg mb-4">{currentWord.definition}</p>
              <form onSubmit={handleSubmit}>
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="输入匹配的单词"
                  className="mb-4"
                  disabled={showResult}
                />
                {!showResult && (
                  <Button type="submit" className="w-full">
                    提交
                  </Button>
                )}
              </form>
            </>
          ) : (
            <>
              <p className="text-lg mb-4">{currentWord.word}</p>
              <form onSubmit={handleSubmit}>
                <RadioGroup value={userInput} onValueChange={setUserInput} className="mb-4">
                  {currentWord.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} disabled={showResult} />
                      <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {!showResult && (
                  <Button type="submit" className="w-full">
                    提交
                  </Button>
                )}
              </form>
            </>
          )}
          {showResult && (
            <div className="mt-4">
              <p className={`text-lg font-bold ${userInput.toLowerCase() === currentWord.word.toLowerCase() ? 'text-green-500' : 'text-red-500'}`}>
                {userInput.toLowerCase() === currentWord.word.toLowerCase() ? '正确!' : '不正确'}
              </p>
              <p className="mt-2">正确答案: {currentWord.word}</p>
              <Button onClick={handleNextWord} className="w-full mt-4">
                下一个单词
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="text-center text-lg font-bold">
        正确率: {((correctAnswers / (currentWordIndex + 1)) * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default ReviewWords;
