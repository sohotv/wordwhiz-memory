import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Progress = () => {
  const data = [
    { name: 'Mon', wordsLearned: 12 },
    { name: 'Tue', wordsLearned: 19 },
    { name: 'Wed', wordsLearned: 3 },
    { name: 'Thu', wordsLearned: 5 },
    { name: 'Fri', wordsLearned: 2 },
    { name: 'Sat', wordsLearned: 15 },
    { name: 'Sun', wordsLearned: 21 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Words Learned This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="wordsLearned" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Words Learned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">325</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Learning Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mastery Level</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Intermediate</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;