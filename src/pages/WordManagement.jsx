import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination } from "@/components/ui/pagination";
import { Upload, Volume2, Edit, Trash2 } from "lucide-react";

const WordManagement = () => {
  const [words, setWords] = useState([
    { 
      id: 1, 
      word: 'Serendipity', 
      phonetic: '/ˌserənˈdipəti/',
      definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
      example: 'The discovery of penicillin was a serendipity that revolutionized medicine.',
      memoryTip: 'Think of it as a "serene dip" into good fortune.',
      category: 'Noun',
      grade: '高中',
      textbook: '新概念英语',
      vocabularyBook: '托福核心词汇'
    },
    // ... more sample words
  ]);
  const [newWord, setNewWord] = useState({
    word: '', 
    phonetic: '',
    definition: '',
    example: '',
    memoryTip: '',
    category: '',
    grade: '',
    textbook: '',
    vocabularyBook: ''
  });
  const [editingWord, setEditingWord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState('all');

  const handleAddWord = () => {
    if (newWord.word && newWord.definition) {
      setWords([...words, { id: words.length + 1, ...newWord }]);
      setNewWord({
        word: '', 
        phonetic: '',
        definition: '',
        example: '',
        memoryTip: '',
        category: '',
        grade: '',
        textbook: '',
        vocabularyBook: ''
      });
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

  const handleImportWords = () => {
    // Implement word import logic here
    console.log('Importing words...');
  };

  const filteredWords = words.filter(word => 
    (word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeTab === 'all' || word.grade === activeTab)
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
        <div className="space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>添加新单词</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
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
                  <Label htmlFor="phonetic" className="text-right">音标</Label>
                  <Input
                    id="phonetic"
                    value={newWord.phonetic}
                    onChange={(e) => setNewWord({ ...newWord, phonetic: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="definition" className="text-right">定义</Label>
                  <Textarea
                    id="definition"
                    value={newWord.definition}
                    onChange={(e) => setNewWord({ ...newWord, definition: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="example" className="text-right">例句</Label>
                  <Textarea
                    id="example"
                    value={newWord.example}
                    onChange={(e) => setNewWord({ ...newWord, example: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="memoryTip" className="text-right">记忆方法</Label>
                  <Textarea
                    id="memoryTip"
                    value={newWord.memoryTip}
                    onChange={(e) => setNewWord({ ...newWord, memoryTip: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">词性</Label>
                  <Select
                    value={newWord.category}
                    onValueChange={(value) => setNewWord({ ...newWord, category: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="选择词性" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Noun">名词</SelectItem>
                      <SelectItem value="Verb">动词</SelectItem>
                      <SelectItem value="Adjective">形容词</SelectItem>
                      <SelectItem value="Adverb">副词</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="grade" className="text-right">年级</Label>
                  <Select
                    value={newWord.grade}
                    onValueChange={(value) => setNewWord({ ...newWord, grade: value })}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="选择年级" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="小学">小学</SelectItem>
                      <SelectItem value="初中">初中</SelectItem>
                      <SelectItem value="高中">高中</SelectItem>
                      <SelectItem value="大学">大学</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="textbook" className="text-right">教材版本</Label>
                  <Input
                    id="textbook"
                    value={newWord.textbook}
                    onChange={(e) => setNewWord({ ...newWord, textbook: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="vocabularyBook" className="text-right">词汇书</Label>
                  <Input
                    id="vocabularyBook"
                    value={newWord.vocabularyBook}
                    onChange={(e) => setNewWord({ ...newWord, vocabularyBook: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAddWord}>添加</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline" onClick={handleImportWords}>
            <Upload className="mr-2 h-4 w-4" />
            导入单词
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>词汇列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
            <TabsList>
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="小学">小学</TabsTrigger>
              <TabsTrigger value="初中">初中</TabsTrigger>
              <TabsTrigger value="高中">高中</TabsTrigger>
              <TabsTrigger value="大学">大学</TabsTrigger>
            </TabsList>
          </Tabs>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>单词</TableHead>
                <TableHead>音标</TableHead>
                <TableHead>定义</TableHead>
                <TableHead>年级</TableHead>
                <TableHead>教材</TableHead>
                <TableHead>词汇书</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((word) => (
                <TableRow key={word.id}>
                  <TableCell>{word.word}</TableCell>
                  <TableCell>{word.phonetic}</TableCell>
                  <TableCell>{word.definition}</TableCell>
                  <TableCell>{word.grade}</TableCell>
                  <TableCell>{word.textbook}</TableCell>
                  <TableCell>{word.vocabularyBook}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEditWord(word)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteWord(word.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
        <DialogContent className="max-w-md">
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
                <Label htmlFor="edit-phonetic" className="text-right">音标</Label>
                <Input
                  id="edit-phonetic"
                  value={editingWord.phonetic}
                  onChange={(e) => setEditingWord({ ...editingWord, phonetic: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-definition" className="text-right">定义</Label>
                <Textarea
                  id="edit-definition"
                  value={editingWord.definition}
                  onChange={(e) => setEditingWord({ ...editingWord, definition: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-example" className="text-right">例句</Label>
                <Textarea
                  id="edit-example"
                  value={editingWord.example}
                  onChange={(e) => setEditingWord({ ...editingWord, example: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-memoryTip" className="text-right">记忆方法</Label>
                <Textarea
                  id="edit-memoryTip"
                  value={editingWord.memoryTip}
                  onChange={(e) => setEditingWord({ ...editingWord, memoryTip: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">词性</Label>
                <Select
                  value={editingWord.category}
                  onValueChange={(value) => setEditingWord({ ...editingWord, category: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="选择词性" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Noun">名词</SelectItem>
                    <SelectItem value="Verb">动词</SelectItem>
                    <SelectItem value="Adjective">形容词</SelectItem>
                    <SelectItem value="Adverb">副词</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-grade" className="text-right">年级</Label>
                <Select
                  value={editingWord.grade}
                  onValueChange={(value) => setEditingWord({ ...editingWord, grade: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="选择年级" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="小学">小学</SelectItem>
                    <SelectItem value="初中">初中</SelectItem>
                    <SelectItem value="高中">高中</SelectItem>
                    <SelectItem value="大学">大学</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-textbook" className="text-right">教材版本</Label>
                <Input
                  id="edit-textbook"
                  value={editingWord.textbook}
                  onChange={(e) => setEditingWord({ ...editingWord, textbook: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-vocabularyBook" className="text-right">词汇书</Label>
                <Input
                  id="edit-vocabularyBook"
                  value={editingWord.vocabularyBook}
                  onChange={(e) => setEditingWord({ ...editingWord, vocabularyBook: e.target.value })}
                  className="col-span-3"
                />
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