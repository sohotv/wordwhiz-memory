import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SystemSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>系统设置</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">启用通知</Label>
          <Switch id="notifications" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backup-frequency">备份频率（天）</Label>
          <Input id="backup-frequency" type="number" defaultValue={7} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">系统语言</Label>
          <select id="language" className="w-full p-2 border rounded">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
        <Button className="w-full">保存设置</Button>
      </CardContent>
    </Card>
  );
};

export default SystemSettings;