import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, ThumbsUp, ThumbsDown, ArrowLeft, ArrowRight, Bookmark, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

const LearnWords = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Serendipity', pronunciation: '/ˌserənˈdipəti/', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', example: 'The discovery of penicillin was a serendipity that revolutionized medicine.', difficulty: 3, nextReview: Date.now() },
    { id: 2, word: 'Ephemeral', pronunciation: '/əˈfem(ə)rəl/', definition: 'Lasting for a very short time.', example: 'The ephemeral nature of fashion trends makes it hard to keep up.', difficulty: 2, nextReview: Date.now() },
    { id: 3, word: 'Ubiquitous', pronunciation: '/yo͞oˈbikwədəs/', definition: 'Present, appearing, or found everywhere.', example: 'Mobile phones have become ubiquitous in modern society.', difficulty: 4, nextReview: Date.now() },
    { id: 4, word: 'Eloquent', pronunciation: '/ˈeləkwənt/', definition: 'Fluent or persuasive in speaking or writing.', example: 'Her eloquent speech moved the audience to tears.', difficulty: 3, nextReview: Date.now() },
    { id: 5, word: 'Enigma', pronunciation: '/iˈniɡmə/', definition: 'A person or thing that is mysterious, puzzling, or difficult to understand.', example: 'The Voynich manuscript remains an enigma to scholars.', difficulty: 5, nextReview: Date.now() },
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [knownWords, setKnownWords] = useState(new Set());

  useEffect(() => {
    const sortedWords = [...words].sort((a, b) => a.nextReview - b.nextReview);
    setWords(sortedWords);
  }, []);

  const currentWord = words[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowDefinition(false);
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    setShowDefinition(false);
  };

  const updateWordDifficulty = (newDifficulty) => {
    setWords(prevWords => prevWords.map(word => 
      word.id === currentWord.id ? {...word, difficulty: newDifficulty} : word
    ));
  };

  const calculateNextReview = (known) => {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    if (known) {
      return now + (currentWord.difficulty * day);
    } else {
      return now + (day / currentWord.difficulty);
    }
  };

  const handleKnownWord = () => {
    const nextReview = calculateNextReview(true);
    setWords(prevWords => prevWords.map(word => 
      word.id === currentWord.id ? {...word, nextReview} : word
    ));
    setKnownWords(prev => new Set(prev).add(currentWord.word));
    handleNextWord();
  };

  const handleUnknownWord = () => {
    const nextReview = calculateNextReview(false);
    setWords(prevWords => prevWords.map(word => 
      word.id === currentWord.id ? {...word, nextReview} : word
    ));
    handleNextWord();
  };

  const progress = (knownWords.size / words.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">学习单词</h1>
      <Progress value={progress} className="mb-4" />
      <p className="text-sm text-gray-600 mb-6">进度: {knownWords.size} / {words.length} 词</p>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{currentWord.word}</span>
            <div>
              <Button variant="ghost" size="icon" className="mr-2">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">{currentWord.pronunciation}</p>
          {showDefinition ? (
            <>
              <p className="text-xl font-semibold mb-4">{currentWord.definition}</p>
              <p className="italic mb-6">{currentWord.example}</p>
            </>
          ) : (
            <Button 
              className="w-full mb-4" 
              onClick={() => setShowDefinition(true)}
            >
              显示释义
            </Button>
          )}
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-2" />
            <span className="mr-2">难度:</span>
            <Slider
              min={1}
              max={5}
              step={1}
              value={[currentWord.difficulty]}
              onValueChange={([value]) => updateWordDifficulty(value)}
              className="w-32"
            />
            <span className="ml-2">{currentWord.difficulty}</span>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handleUnknownWord}>
              <ThumbsDown className="mr-2 h-4 w-4" /> 不认识
            </Button>
            <Button onClick={handleKnownWord}>
              <ThumbsUp className="mr-2 h-4 w-4" /> 认识
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button onClick={handlePreviousWord}>
          <ArrowLeft className="mr-2 h-4 w-4" /> 上一个
        </Button>
        <Button onClick={handleNextWord}>
          下一个 <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LearnWords;
