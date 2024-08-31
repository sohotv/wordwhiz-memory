import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const [newWord, setNewWord] = useState('');
  const [words, setWords] = useState([
    { id: 1, word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.' },
    { id: 2, word: 'Ephemeral', definition: 'Lasting for a very short time.' },
  ]);

  const handleAddWord = () => {
    if (newWord.trim()) {
      setWords([...words, { id: Date.now(), word: newWord, definition: '' }]);
      setNewWord('');
    }
  };

  const handleDeleteWord = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Word</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder="Enter new word"
            />
            <Button onClick={handleAddWord}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Word
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Word List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Word</TableHead>
                <TableHead>Definition</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {words.map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.definition}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteWord(word.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;