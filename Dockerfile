# 使用官方 Node 镜像作为基础
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production
RUN npm install -g pnpm
RUN npm install -g pm2
RUN npm install express

# 复制项目所有文件
COPY . .

# 暴露应用端口（根据你的 Node 应用实际端口修改，比如 3000）
EXPOSE 3000

# 启动应用
# 确保 test1.js 是你的入口文件

#CMD ["node", "test1.js"]
CMD ["pm2-runtime", "start", "test1.js", "--name", "node-action"]