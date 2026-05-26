# Accompany-YOU

欢迎来到 **Accompany-YOU（智能陪伴系统）** 项目 👋  
本页是新手入口：教你如何在 GitHub 上直接预览前端界面、快速找到主要功能页面，并进行在线编辑。

## 1) 在 GitHub 上直接预览和体验界面

### 方式 A：GitHub Pages（推荐，真正可交互）
1. 打开仓库：`Settings` → `Pages`
2. `Source` 选择 `Deploy from a branch`
3. 分支选择 `main`，目录选择 `/ (root)`（或你前端所在目录）
4. 保存后等待 1~3 分钟，访问：
   - `https://<your-username>.github.io/Accompany-YOU/`

> 将 `<your-username>` 替换为你的 GitHub 用户名；如果你在本仓库直接操作，可用 `NienLiu`。

> 这是最适合“直接体验前端界面”的方式：页面可点击、可交互。

### 方式 B：直接在仓库里查看页面文件
1. 进入仓库 `Code` 页面
2. 打开前端入口文件（常见为 `index.html`、`src/main.*`、`src/App.*`）
3. 可先看源码结构，再决定是否启用 Pages 做交互预览

## 2) 界面入口与功能导航（微信风格三栏）

前端界面建议按以下导航体验：

1. **会话（Chat）**
   - 与 AI 角色聊天
   - 查看消息流、输入消息、打开会话选项（如免打扰/小剧场）
2. **角色（Role）**
   - 创建/导入角色卡
   - 查看角色资料、好感度、故事线章节
3. **陪伴圈（Feed）**
   - 浏览动态流（类似朋友圈）
   - 点赞、评论、查看角色动态
4. **我 / 设置（Me / Settings）**
   - 主题、通知、账号与系统配置

## 3) 新手如何在 GitHub 浏览与编辑代码

### 浏览代码
- 点击仓库上方 `Code` 标签查看文件树
- 按 `t` 可快速搜索文件名
- 点击文件可在线阅读代码

### 在线编辑
- 打开目标文件后，点击右上角 ✏️（编辑）
- 修改后填写提交说明（Commit message）
- 点击 `Commit changes` 提交

### 更顺手的网页版编辑器
- 在仓库页面按 `.`（英文句号）可打开 GitHub Web Editor（类似 VS Code）

## 4) 如需本地运行（简单指令）

如果项目是静态前端（如 `index.html`）：

```bash
git clone https://github.com/<your-username>/Accompany-YOU.git
cd Accompany-YOU
python3 -m http.server 5500
```

> 同样将 `<your-username>` 替换为你的 GitHub 用户名；本仓库示例可写为 `NienLiu`。

浏览器打开：`http://localhost:5500`

如果后续加入 Node.js 前端工程（如 Vite/React/Vue），常用命令是：

```bash
npm install
npm run dev
```

---