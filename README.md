# 🇫🇷 100个最常用法语动词学习网站

一个简洁优雅的法语动词学习工具，包含100个最常用的法语动词及其变位、例句。

## ✨ 功能特性

- ✅ **103个常用动词** - 涵盖日常交流中最常用的法语动词
- 🔍 **智能搜索** - 支持法语和中文搜索
- 🎯 **分类筛选** - 按动词类型（-er/-ir/-re）和不规则/规则筛选
- 📖 **动词详情页** - 103个动词的完整变位表
- 📱 **响应式设计** - 完美支持手机、平板、桌面
- 🎨 **精美界面** - 渐变背景、卡片式设计、流畅动画
- 🖨️ **打印友好** - 支持打印成学习卡片

## 📁 项目结构

```
french-verbs/
├── index.html          # 主页
├── verb-detail.html    # 动词详情页
├── css/
│   ├── style.css       # 主页样式
│   └── verb-detail.css # 详情页样式
├── js/
│   ├── verbs.js        # 动词数据（103个动词）
│   ├── conjugations.js # 变位数据（103个动词）
│   └── usage.js       # 使用说明（103个动词）
└── README.md           # 说明文档
```

## 🚀 快速开始

### 方法1：直接打开

1. 下载整个项目文件夹
2. 用浏览器打开 `index.html` 文件
3. 开始学习！🎉

### 方法2：使用本地服务器（推荐）

```bash
# 使用 Python 3
cd french-verbs
python -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (需要安装 http-server)
npx http-server
```

然后在浏览器中访问 `http://localhost:8000`

### 方法3：部署到 GitHub Pages（推荐）

查看 [DEPLOYMENT.md](DEPLOYMENT.md) 获取详细的部署指南。

**快速部署：**
```bash
# 1. 初始化 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 2. 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/french-verbs.git

# 3. 推送到 GitHub
git branch -M main
git push -u origin main

# 4. 在 GitHub 仓库中启用 GitHub Pages
# Settings -> Pages -> Source: Deploy from a branch -> main -> Save
```

部署完成后，访问：`https://YOUR_USERNAME.github.io/french-verbs/`

## 📊 动词分类

### 不规则动词（重点掌握）
- être, avoir, aller, faire, dire, prendre, venir, voir, savoir, pouvoir, vouloir, devoir, falloir

### 第一组动词 (-er)
- acheter, aider, aimer, appeler, apprendre, arrêter, arriver, commencer, compter, continuer...

### 第二组动词 (-ir)
- choisir, finir, grandir, grossir, maigrir, nourrir, obéir, rajeunir, réfléchir...

### 第三组动词 (-re)
- attendre, comprendre, connaître, descendre, entendre, perdre, répondre, rendre...

### 代词式动词
- se coucher, se doucher, s'habituer, s'inquiéter, s'intéresser, se lever, se moquer...

## 🎯 使用说明

1. **浏览动词** - 在网格中查看所有动词
2. **搜索动词** - 在搜索框中输入法语或中文
3. **筛选类型** - 点击筛选按钮按类型过滤
4. **查看详情** - 点击任意动词卡片查看完整变位表
5. **切换时态** - 在详情页中点击时态标签查看不同时态的变位

### 所有动词都有详情页

- ✅ 103个动词全部支持详情页
- ✅ 7种时态完整展示
- ✅ 使用说明和例句

## 📱 响应式设计

- **桌面端** (>768px) - 4列网格布局
- **平板端** (480-768px) - 2-3列网格布局
- **手机端** (<480px) - 单列布局

## 🖨️ 打印功能

按 `Ctrl+P` (Windows) 或 `Cmd+P` (Mac) 可以打印页面，自动优化为打印格式。

## 🎨 自定义

### 修改颜色主题

编辑 `css/style.css` 文件中的颜色变量：

```css
/* 主色调 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 不规则动词颜色 */
background: linear-gradient(90deg, #f093fb, #f5576c);
```

### 添加新动词

编辑 `js/verbs.js` 文件，添加新的动词对象：

```javascript
{
  id: 104,
  french: "marcher",
  chinese: "走",
  example: "Je marche tous les jours.",
  exampleZh: "我每天走路。",
  type: "er",
  irregular: false
}
```

## 📝 待开发功能

- [ ] 收藏功能
- [ ] 学习进度追踪
- [ ] 测验模式
- [ ] 发音功能
- [ ] 深色模式

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- 动词列表来源：[smilewang25 的法文学习笔记](https://smilewang25.pixnet.net/blog/posts/13359177678)
- 设计灵感：[LanguagePosters](https://languageposters.com)

---

**💪 每天学习，每天进步 | Bonne chance!**
