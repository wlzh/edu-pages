# Cloudflare 一键部署指南

## 🚀 快速部署

这个学生福利网页应用已经配置了完整的 Cloudflare 部署支持，您可以轻松实现一键部署。

## 📋 部署前准备

### 1. 安装依赖
```bash
npm install
```

### 2. 检查配置
```bash
npm run check
```

这个命令会检查：
- ✅ 文件完整性
- ✅ Cloudflare 配置
- ✅ 环境变量
- ✅ Node.js 版本

### 3. 设置环境变量
```bash
# 获取您的 Cloudflare API Token 和 Account ID
export CF_API_TOKEN="your_api_token"
export CF_ACCOUNT_ID="your_account_id"
```

## 🚀 部署方式

### 方式一：使用 Cloudflare Workers (推荐)
```bash
# 构建并部署
npm run deploy
```

### 方式二：使用 Cloudflare Pages
```bash
# 构建并部署到 Pages
npm run deploy:pages
```

## ⚙️ 配置说明

### 1. 修改域名配置
编辑 `wrangler.toml` 文件：
```toml
[[routes]]
pattern = "edu.869hr.uk/*"
zone_name = "edu.869hr.uk"
```

将 `edu.869hr.uk` 替换为您的实际域名。

### 2. 环境变量配置
在 `wrangler.toml` 中可以配置：
```toml
[vars]
BUILD_VERSION = "1.0.0"
BUILD_DATE = "2025-10-24"
```

## 🔍 部署检查清单

### 必要文件 ✅
- [x] `index.html` - 主页面
- [x] `styles.css` - 样式文件
- [x] `script.js` - JavaScript 功能
- [x] `worker.js` - Cloudflare Worker
- [x] `wrangler.toml` - Cloudflare 配置
- [x] `package.json` - 项目配置
- [x] `PROJECT_README.md` - 项目说明

### 可选文件 ⚠️
- [ ] `test.html` - 测试页面
- [ ] `README.md` - 项目文档

### 配置检查 ✅
- [x] Node.js 版本 >= 16.0.0
- [x] npm 版本 >= 8.0.0
- [x] Cloudflare CLI 工具已安装
- [x] 环境变量已设置

## 📊 部署后验证

### 1. 健康检查
访问 `https://edu.869hr.uk/health` 应该返回 `OK`

### 2. 项目信息
访问 `https://edu.869hr.uk/api/info` 查看项目信息

### 3. 功能测试
- [ ] 主页面正常加载
- [ ] 搜索功能正常
- [ ] 筛选功能正常
- [ ] 详情弹窗正常
- [ ] 响应式布局正常

## 🔧 故障排除

### 常见问题

#### 1. 部署失败
```bash
# 重新检查配置
npm run check

# 查看详细错误
npm run deploy --verbose
```

#### 2. 文件404
检查 `worker.js` 中的文件映射：
```javascript
const FILE_MAP = {
    '/': 'index.html',
    '/index.html': 'index.html',
    // ...
};
```

#### 3. 环境变量错误
确保设置了以下环境变量：
```bash
echo $CF_API_TOKEN
echo $CF_ACCOUNT_ID
```

## 📈 性能优化

### 1. 缓存配置
Worker 已经配置了 24 小时缓存：
```javascript
CACHE_TTL: 86400  // 24小时
```

### 2. MIME 类型
支持完整的 MIME 类型映射：
```javascript
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    // ...
};
```

## 🎯 一键部署脚本

创建 `deploy.sh` 脚本：
```bash
#!/bin/bash
echo "🚀 开始部署学生福利平台..."

# 检查配置
echo "🔍 检查配置..."
npm run check

if [ $? -eq 0 ]; then
    echo "✅ 配置检查通过"
    
    # 设置环境变量（请替换为您的实际值）
    export CF_API_TOKEN="your_api_token"
    export CF_ACCOUNT_ID="your_account_id"
    
    # 部署
    echo "🚀 开始部署..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 部署成功！"
        echo "🌐 访问地址: https://edu.869hr.uk"
    else
        echo "❌ 部署失败"
        exit 1
    fi
else
    echo "❌ 配置检查失败"
    exit 1
fi
```

赋予执行权限：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 📞 支持

如果遇到问题，请检查：
1. `PROJECT_README.md` - 项目说明文档
2. Cloudflare 官方文档
3. 项目 Issues 页面

## 🎁 部署完成

恭喜！您的学生福利网页应用现在已经部署到 Cloudflare，可以全球访问了！

---

**版本**: 1.0.0  
**最后更新**: 2025年  
**支持**: Cloudflare Workers & Pages
