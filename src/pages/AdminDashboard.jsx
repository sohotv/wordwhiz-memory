import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Trash2, Edit, Search, Users, BookOpen, BarChart3, Settings, User, Clock, Star, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const AdminDashboard = () => {
  const [newWord, setNewWord] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [newExample, setNewExample] = useState('');
  const [editingWord, setEditingWord] = useState(null);
  const [words, setWords] = useState([
    { id: 1, word: '机缘巧合', definition: '意外发现珍奇事物的能力；机缘巧合', example: '发现青霉素是一个改变医学的机缘巧合。', difficulty: 3 },
    { id: 2, word: '短暂的', definition: '持续时间很短的', example: '时尚潮流的短暂性使得跟上潮流变得困难。', difficulty: 2 },
    { id: 3, word: '无处不在', definition: '普遍存在的，到处都有的', example: '在现代社会中，手机已经无处不在。', difficulty: 4 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('az');

  const handleAddWord = () => {
    if (newWord.trim() && newDefinition.trim()) {
      setWords([...words, { id: Date.now(), word: newWord, definition: newDefinition, example: newExample, difficulty: 3 }]);
      setNewWord('');
      setNewDefinition('');
      setNewExample('');
    }
  };

  const handleDeleteWord = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  const handleEditWord = (word) => {
    setEditingWord(word);
    setNewWord(word.word);
    setNewDefinition(word.definition);
    setNewExample(word.example);
  };

  const handleUpdateWord = () => {
    if (editingWord && newWord.trim() && newDefinition.trim()) {
      setWords(words.map(word => 
        word.id === editingWord.id ? { ...word, word: newWord, definition: newDefinition, example: newExample } : word
      ));
      setEditingWord(null);
      setNewWord('');
      setNewDefinition('');
      setNewExample('');
    }
  };

  const filteredWords = words.filter(word => 
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'az') return a.word.localeCompare(b.word);
    if (sortBy === 'za') return b.word.localeCompare(a.word);
    if (sortBy === 'difficulty') return b.difficulty - a.difficulty;
    return 0;
  });

  const userStats = [
    { name: '活跃用户', value: 1200 },
    { name: '新用户', value: 150 },
    { name: '高级用户', value: 300 },
  ];

  const wordStats = [
    { name: '总词汇量', value: 5000 },
    { name: '本月新增词汇', value: 200 },
    { name: '最常搜索词', value: '机缘巧合' },
  ];

  const userProgressData = [
    { name: '第1周', users: 500 },
    { name: '第2周', users: 700 },
    { name: '第3周', users: 1000 },
    { name: '第4周', users: 1200 },
  ];

  const userLevels = [
    { name: '初学者', value: 300 },
    { name: '中级', value: 500 },
    { name: '高级', value: 300 },
    { name: '专家', value: 100 },
  ];

  const dailyActiveUsers = [
    { name: '周一', users: 800 },
    { name: '周二', users: 950 },
    { name: '周三', users: 1100 },
    { name: '周四', users: 1000 },
    { name: '周五', users: 1200 },
    { name: '周六', users: 1500 },
    { name: '周日', users: 1300 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', level: '中级', wordsLearned: 250, streak: 15 },
    { id: 2, name: '李四', email: 'lisi@example.com', level: '高级', wordsLearned: 500, streak: 30 },
    { id: 3, name: '王五', email: 'wangwu@example.com', level: '初级', wordsLearned: 100, streak: 7 },
    { id: 4, name: '赵六', email: 'zhaoliu@example.com', level: '专家', wordsLearned: 1000, streak: 60 },
    { id: 5, name: '钱七', email: 'qianqi@example.com', level: '中级', wordsLearned: 300, streak: 20 },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.level.toLowerCase().includes(userSearchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">管理员仪表板</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总用户数</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,200</div>
            <p className="text-xs text-muted-foreground">较上月增长10%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总词汇量</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,000</div>
            <p className="text-xs text-muted-foreground">本月新增200个词汇</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">活跃学习会话</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">450</div>
            <p className="text-xs text-muted-foreground">较上周增长5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">系统健康度</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">所有系统运行正常</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="words" className="space-y-4">
        <TabsList>
          <TabsTrigger value="words">词汇管理</TabsTrigger>
          <TabsTrigger value="users">用户统计</TabsTrigger>
          <TabsTrigger value="analytics">数据分析</TabsTrigger>
        </TabsList>
        <TabsContent value="words" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>添加新词汇</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  value={newWord}
                  onChange={(e) => setNewWord(e.target.value)}
                  placeholder="输入新词汇"
                />
                <Input
                  value={newDefinition}
                  onChange={(e) => setNewDefinition(e.target.value)}
                  placeholder="输入定义"
                />
                <Input
                  value={newExample}
                  onChange={(e) => setNewExample(e.target.value)}
                  placeholder="输入例句"
                />
              </div>
              <Button className="mt-4" onClick={editingWord ? handleUpdateWord : handleAddWord}>
                {editingWord ? '更新' : '添加'} 词汇
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>词汇列表</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input
                  placeholder="搜索词汇..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="排序方式" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="az">A-Z</SelectItem>
                    <SelectItem value="za">Z-A</SelectItem>
                    <SelectItem value="difficulty">难度</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>词汇</TableHead>
                    <TableHead>定义</TableHead>
                    <TableHead>例句</TableHead>
                    <TableHead>难度</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWords.map((word) => (
                    <TableRow key={word.id}>
                      <TableCell>{word.word}</TableCell>
                      <TableCell>{word.definition}</TableCell>
                      <TableCell>{word.example}</TableCell>
                      <TableCell>
                        <Badge variant={word.difficulty > 3 ? "destructive" : "secondary"}>
                          {word.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEditWord(word)}>
                          <Edit className="h-4 w-4" />
                        </Button>
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
        </TabsContent>
        <TabsContent value="users">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>用户统计</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userStats.map((stat, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{stat.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>用户列表</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input
                  placeholder="搜索用户..."
                  value={userSearchTerm}
                  onChange={(e) => setUserSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  导出用户数据
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>用户</TableHead>
                    <TableHead>等级</TableHead>
                    <TableHead>已学词汇</TableHead>
                    <TableHead>连续学习</TableHead>
                    <TableHead>状态</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.level}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Progress value={(user.wordsLearned / 1000) * 100} className="w-[60px] mr-2" />
                          <span>{user.wordsLearned}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{user.streak} 天</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Switch />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>用户增长趋势</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={userProgressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>用户等级分布</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userLevels}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {userLevels.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>每日活跃用户</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dailyActiveUsers}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>系统反馈</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="在这里输入系统反馈或改进建议..." className="mb-4" />
                <Button>提交反馈</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;