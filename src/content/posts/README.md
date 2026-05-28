---
title: 新增的功能
published: 2026-02-21T08:00:00
updated: 2026-02-21
description: '介绍以及使用教程'
image: ''
tags: [Demo, Example, Fuwari,wanshushan]
category: '示例'
draft: false 
pinned: true
---

# blog of wanshushan

## powered by [Fuwari](https://github.com/saicaca/fuwari)

新增功能：
1. 右侧网站统计信息（使用 Umami，powered by[THW-为 Fuwari 添加 Umami 网站统计](https://blog.tianhw.top/posts/fuwari-umami-stats/)）
2. 右侧网站运行时间
3. 评论区（使用 Giscus，基于 GitHub Discussions，powered by[THW-为 Fuwari 添加 Giscus 评论系统](https://blog.tianhw.top/posts/fuwari-giscus/)）
4. 友链
5. mermaid图表支持

## 配置说明（相关配置在src\config.ts）

- `siteConfig`：网站基本信息配置
- `navBarConfig`：导航栏配置
- `profileConfig`：个人信息配置
- `widgetConfig`：右侧小组件配置（网站统计和运行时间）
- `giscusConfig`：评论区配置
- `licenseConfig`：版权信息配置

## 使用说明

### 使用博客

克隆仓库：

```bash
git clone 
```
安装依赖：

```bash
npm install
```

### 组件配置

编辑 `src/config.ts` 文件，根据注释说明修改配置项。

关于`umami`统计的配置项：
- 获取umami分享链接，然后将其填入`umamiShareUrl`

关于网站运行时间的配置项：
- `siteStartTime`：网站开始运行的时间，格式为 ISO 8601，例如 `2026-05-27T08:00:00+08:00`


关于`giscus`评论区的配置项：
根据[官方文档](https://giscus.app/)的说明，获取以下配置项：
- `enable`：是否启用评论区
- `repo`：GitHub 仓库，格式为 `用户名/仓库名
- `repoId`：
- `category`：
- `categoryId`：
- `lang`：评论区语言，例如中文为 `zh-CN`