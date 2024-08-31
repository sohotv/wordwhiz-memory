import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, ThumbsUp, ThumbsDown } from "lucide-react";

const LearnWords = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    { word: 'Serendipity', pronunciation: '/ˌserənˈdipəti/', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', example: 'The discovery of penicillin was a serendipity that revolutionized medicine.' },
    { word: 'Ephemeral', pronunciation: '/əˈfem(ə)rəl/', definition: 'Lasting for a very short time.', example: 'The ephemeral nature of fashion trends makes it hard to keep up.' },
    { word: 'Ubiquitous', pronunciation: '/yo͞oˈbikwədəs/', definition: 'Present, appearing, or found everywhere.', example: 'Mobile phones have become ubiquitous in modern society.' },
  ];

  const currentWord = words[currentWordIndex];

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Learn Words</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{currentWord.word}</span>
            <Button variant="ghost" size="icon">
              <Volume2 className="h-6 w-6" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-2">{currentWord.pronunciation}</p>
          <p className="text-xl font-semibold mb-4">{currentWord.definition}</p>
          <p className="italic">{currentWord.example}</p>
          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handleNextWord}>
              <ThumbsDown className="mr-2 h-4 w-4" /> Didn't Know
            </Button>
            <Button onClick={handleNextWord}>
              <ThumbsUp className="mr-2 h-4 w-4" /> Knew It
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearnWords;