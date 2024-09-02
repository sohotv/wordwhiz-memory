import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination } from "@/components/ui/pagination";

const WordManagement = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Serendipity', definition: 'The occurrence and development of events by chance in a happy or beneficial way.', category: 'Noun' },
    { id: 2, word: 'Ephemeral', definition: 'Lasting for a very short time.', category: 'Adjective' },
    { id: 3, word: 'Ubiquitous', definition: 'Present, appearing, or found everywhere.', category: 'Adjective' },
    // Add more sample words here...
  ]);
  const [newWord, setNewWord] = useState({ word: '', definition: '', category: '' });
  const [editingWord, setEditingWord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleAddWord = () => {
    if (newWord.word && newWord.definition && newWord.category) {
      setWords([...words, { id: words.length + 1, ...newWord }]);
      setNewWord({ word: '', definition: '', category: '' });
    }
  };

  const handleEditWord = (word) => {
    setEditingWord(word);
  };

  const handleUpdateWord = () => {
    if (editingWord) {
      setWords(words.map(w => w.id === editingWord.id ? editingWord : w));
      setEditingWord(null);
    }
  };

  const handleDeleteWord = (id) => {
    setWords(words.filter(w => w.id !== id));
  };

  const filteredWords = words.filter(word => 
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWords.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">词汇管理</h1>
      <div className="mb-4 flex justify-between items-center">
        <Input
          placeholder="搜索单词、定义或类别"
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
                <Label htmlFor="word" className="text-right">单词</Label>
                <Input
                  id="word"
                  value={newWord.word}
                  onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="definition" className="text-right">定义</Label>
                <Input
                  id="definition"
                  value={newWord.definition}
                  onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">类别</Label>
                <Select
                  value={newWord.category}
                  onValueChange={(value) => setNewWord({ ...newWord, category: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="选择类别" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Noun">名词</SelectItem>
                    <SelectItem value="Verb">动词</SelectItem>
                    <SelectItem value="Adjective">形容词</SelectItem>
                    <SelectItem value="Adverb">副词</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddWord}>添加</Button>
            </DialogFooter>
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
                <TableHead>类别</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.definition}</TableCell>
                  <TableCell>{word.category}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEditWord(word)}>编辑</Button>
                    <Button variant="outline" size="sm" className="ml-2" onClick={() => handleDeleteWord(word.id)}>删除</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            className="mt-4"
            currentPage={currentPage}
            totalCount={filteredWords.length}
            pageSize={itemsPerPage}
            onPageChange={paginate}
          />
        </CardContent>
      </Card>
      <Dialog open={!!editingWord} onOpenChange={() => setEditingWord(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>编辑单词</DialogTitle>
          </DialogHeader>
          {editingWord && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-word" className="text-right">单词</Label>
                <Input
                  id="edit-word"
                  value={editingWord.word}
                  onChange={(e) => setEditingWord({ ...editingWord, word: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-definition" className="text-right">定义</Label>
                <Input
                  id="edit-definition"
                  value={editingWord.definition}
                  onChange={(e) => setEditingWord({ ...editingWord, definition: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">类别</Label>
                <Select
                  value={editingWord.category}
                  onValueChange={(value) => setEditingWord({ ...editingWord, category: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="选择类别" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Noun">名词</SelectItem>
                    <SelectItem value="Verb">动词</SelectItem>
                    <SelectItem value="Adjective">形容词</SelectItem>
                    <SelectItem value="Adverb">副词</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={handleUpdateWord}>更新</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WordManagement;