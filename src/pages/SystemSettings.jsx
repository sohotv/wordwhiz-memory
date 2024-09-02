import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    backupFrequency: 7,
    language: 'zh',
    theme: 'light',
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    // Implement save settings logic here
    console.log('Saving settings:', settings);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>系统设置</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">启用通知</Label>
          <Switch
            id="notifications"
            checked={settings.notifications}
            onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backup-frequency">备份频率（天）</Label>
          <Input
            id="backup-frequency"
            type="number"
            value={settings.backupFrequency}
            onChange={(e) => handleSettingChange('backupFrequency', parseInt(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">系统语言</Label>
          <Select
            value={settings.language}
            onValueChange={(value) => handleSettingChange('language', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择语言" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="theme">界面主题</Label>
          <Select
            value={settings.theme}
            onValueChange={(value) => handleSettingChange('theme', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择主题" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">浅色</SelectItem>
              <SelectItem value="dark">深色</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={handleSaveSettings}>保存设置</Button>
      </CardContent>
    </Card>
  );
};

export default SystemSettings;