import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, ThumbsUp, ThumbsDown, ArrowLeft, ArrowRight, Bookmark } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LearnWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [knownWords, setKnownWords] = useState(new Set());
  const words = [
    { word: 'Serendipity', pronunciation: '/ˌserənˈdipəti/', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', example: 'The discovery of penicillin was a serendipity that revolutionized medicine.' },
    { word: 'Ephemeral', pronunciation: '/əˈfem(ə)rəl/', definition: 'Lasting for a very short time.', example: 'The ephemeral nature of fashion trends makes it hard to keep up.' },
    { word: 'Ubiquitous', pronunciation: '/yo͞oˈbikwədəs/', definition: 'Present, appearing, or found everywhere.', example: 'Mobile phones have become ubiquitous in modern society.' },
    { word: 'Eloquent', pronunciation: '/ˈeləkwənt/', definition: 'Fluent or persuasive in speaking or writing.', example: 'Her eloquent speech moved the audience to tears.' },
    { word: 'Enigma', pronunciation: '/iˈniɡmə/', definition: 'A person or thing that is mysterious, puzzling, or difficult to understand.', example: 'The Voynich manuscript remains an enigma to scholars.' },
  ];

  const currentWord = words[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowDefinition(false);
  };

  const handlePreviousWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    setShowDefinition(false);
  };

  const handleKnownWord = () => {
    setKnownWords(prev => new Set(prev).add(currentWord.word));
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
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handleNextWord}>
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
