# 🚀 部署到 GitHub Pages

## 方法一：通过 GitHub 网页界面部署（推荐）

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 `+` 按钮，选择 `New repository`
3. 仓库名称：`french-verbs`（或你喜欢的名称）
4. 选择 `Public`（公开）或 `Private`（私有）
5. **不要**勾选 "Add a README file"
6. 点击 `Create repository`

### 步骤 2：上传项目文件

1. 在新创建的仓库页面，点击 `uploading an existing file`
2. 将以下文件拖拽到上传区域：
   - `index.html`
   - `verb-detail.html`
   - `css/` 文件夹（包含 `style.css` 和 `verb-detail.css`）
   - `js/` 文件夹（包含 `verbs.js`、`conjugations.js` 和 `usage.js`）
   - `README.md`
3. 在 "Commit changes" 输入框中输入：`Initial commit`
4. 点击 `Commit changes`

### 步骤 3：启用 GitHub Pages

1. 在仓库页面，点击 `Settings` 标签
2. 在左侧菜单中找到 `Pages`
3. 在 "Source" 部分：
   - 选择 `Deploy from a branch`
   - Branch 选择 `main`（或 `master`）
   - Folder 选择 `/ (root)`
4. 点击 `Save`

### 步骤 4：等待部署

GitHub 会自动部署你的网站，通常需要 1-2 分钟。

### 步骤 5：访问你的网站

部署完成后，你会看到类似这样的地址：
```
https://yourusername.github.io/french-verbs/
```

---

## 方法二：通过 Git 命令行部署

### 步骤 1：初始化 Git 仓库

```bash
cd /home/jeremy/.openclaw/workspace/french-verbs
git init
```

### 步骤 2：创建 .gitignore 文件

```bash
cat > .gitignore << 'EOF'
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# 临时文件
*.log
*.tmp
*.swp
*~

# 生成的文件
all_conjugations.js
batch1_conjugations.js
generate_*.py
merge_*.py
final_test.py
EOF
```

### 步骤 3：添加文件到 Git

```bash
git add .
git commit -m "Initial commit - French Verbs Learning Website"
```

### 步骤 4：推送到 GitHub

```bash
# 添加远程仓库（替换 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/french-verbs.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 5：启用 GitHub Pages

按照方法一的步骤 3-5 操作。

---

## 方法三：使用 GitHub Actions 自动部署（高级）

### 步骤 1：创建 GitHub Actions 工作流

```bash
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF
```

### 步骤 2：提交并推送

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push
```

### 步骤 3：启用 GitHub Pages

1. 在仓库页面，点击 `Settings` 标签
2. 在左侧菜单中找到 `Pages`
3. 在 "Source" 部分：
   - 选择 `GitHub Actions`
4. 点击 `Save`

---

## 🎯 自定义域名（可选）

如果你想使用自定义域名：

### 步骤 1：购买域名

从域名注册商购买域名（如 Namecheap, GoDaddy 等）

### 步骤 2：配置 DNS

在你的域名注册商处添加 CNAME 记录：
```
Type: CNAME
Name: @ (或 www)
Value: YOUR_USERNAME.github.io
```

### 步骤 3：在 GitHub 中配置

1. 在仓库的 `Settings` -> `Pages` 中
2. 在 "Custom domain" 输入你的域名
3. GitHub 会提供 DNS 配置信息
4. 按照提示完成配置

---

## 📝 检查部署状态

### 查看部署日志

1. 在仓库页面，点击 `Actions` 标签
2. 查看最新的工作流运行状态
3. 如果失败，点击查看详细日志

### 查看部署历史

1. 在仓库页面，点击 `Settings` -> `Pages`
2. 在 "Build and deployment" 部分查看历史

---

## 🔧 常见问题

### Q: 部署后网站显示 404 错误

A: 检查以下几点：
1. 确认 `index.html` 文件在仓库根目录
2. 确认 GitHub Pages 已启用
3. 等待 1-2 分钟让部署完成
4. 清除浏览器缓存

### Q: 样式文件没有加载

A: 检查以下几点：
1. 确认 `css/` 文件夹已上传
2. 确认文件名大小写正确（Linux 区分大小写）
3. 检查浏览器控制台是否有错误

### Q: JavaScript 文件没有加载

A: 检查以下几点：
1. 确认 `js/` 文件夹已上传
2. 确认文件名大小写正确
3. 检查浏览器控制台是否有错误

### Q: 如何更新网站？

A: 只需：
1. 修改本地文件
2. 提交更改：`git add . && git commit -m "Update"`
3. 推送到 GitHub：`git push`
4. GitHub 会自动重新部署

---

## 🎉 部署完成！

部署完成后，你就可以通过以下地址访问你的网站：

```
https://YOUR_USERNAME.github.io/french-verbs/
```

**💪 每天学习，每天进步 | Bonne chance!**
