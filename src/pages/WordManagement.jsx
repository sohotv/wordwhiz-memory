import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const WordManagement = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.' },
    { id: 2, word: 'Ephemeral', definition: 'Lasting for a very short time.' },
    { id: 3, word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.' },
  ]);
  const [newWord, setNewWord] = useState({ word: '', definition: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWord = () => {
    setWords([...words, { id: words.length + 1, ...newWord }]);
    setNewWord({ word: '', definition: '' });
  };

  const filteredWords = words.filter(word => 
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">词汇管理</h1>
      <div className="mb-4 flex justify-between items-center">
        <Input
          placeholder="搜索单词或定义"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>添加新单词</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>添加新单词</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="word" className="text-right">
                  单词
                </Label>
                <Input
                  id="word"
                  value={newWord.word}
                  onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="definition" className="text-right">
                  定义
                </Label>
                <Input
                  id="definition"
                  value={newWord.definition}
                  onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleAddWord}>添加</Button>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>词汇列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>单词</TableHead>
                <TableHead>定义</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWords.map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.definition}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">编辑</Button>
                    <Button variant="outline" size="sm" className="ml-2">删除</Button>
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

export default WordManagement;