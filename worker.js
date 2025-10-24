/**
 * Cloudflare Workers 静态文件服务 Worker
 * 用于部署学生福利网页应用
 */

// 配置常量
const CONFIG = {
    BUILD_VERSION: ENV.BUILD_VERSION || '1.0.0',
    BUILD_DATE: ENV.BUILD_DATE || new Date().toISOString().split('T')[0],
    CACHE_TTL: 86400, // 24小时缓存
    INDEX_FILE: 'index.html'
};

// 文件映射 - 将URL路径映射到对应的文件
const FILE_MAP = {
    '/': 'index.html',
    '/index.html': 'index.html',
    '/styles.css': 'styles.css',
    '/script.js': 'script.js',
    '/test.html': 'test.html',
    '/PROJECT_README.md': 'PROJECT_README.md'
};

// MIME类型映射
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

/**
 * 获取文件内容的辅助函数
 */
async function getFileContent(filename) {
    try {
        // 使用 Cloudflare Workers 的 Assets 功能
        const response = await fetch(`https://your-subdomain.pages.dev/${filename}`);
        
        if (response.ok) {
            return await response.text();
        }
        
        // 如果远程获取失败，返回404
        return null;
    } catch (error) {
        console.error(`获取文件失败: ${filename}`, error);
        return null;
    }
}

/**
 * 生成HTML响应的辅助函数
 */
function generateHTMLResponse(content, status = 200) {
    return new Response(content, {
        status,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': `public, max-age=${CONFIG.CACHE_TTL}`,
            'X-Build-Version': CONFIG.BUILD_VERSION,
            'X-Build-Date': CONFIG.BUILD_DATE
        }
    });
}

/**
 * 生成CSS响应的辅助函数
 */
function generateCSSResponse(content, status = 200) {
    return new Response(content, {
        status,
        headers: {
            'Content-Type': 'text/css; charset=utf-8',
            'Cache-Control': `public, max-age=${CONFIG.CACHE_TTL}`,
            'X-Build-Version': CONFIG.BUILD_VERSION
        }
    });
}

/**
 * 生成JavaScript响应的辅助函数
 */
function generateJSResponse(content, status = 200) {
    return new Response(content, {
        status,
        headers: {
            'Content-Type': 'application/javascript; charset=utf-8',
            'Cache-Control': `public, max-age=${CONFIG.CACHE_TTL}`,
            'X-Build-Version': CONFIG.BUILD_VERSION
        }
    });
}

/**
 * 生成Markdown响应的辅助函数
 */
function generateMarkdownResponse(content, status = 200) {
    return new Response(content, {
        status,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Cache-Control': `public, max-age=${CONFIG.CACHE_TTL}`,
            'X-Build-Version': CONFIG.BUILD_VERSION
        }
    });
}

/**
 * 生成404响应
 */
function generate404Response() {
    const html = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - 页面未找到</title>
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                .error-container {
                    text-align: center;
                    background: rgba(255,255,255,0.1);
                    padding: 50px;
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                }
                .error-code {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .error-message {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }
                .back-link {
                    color: white;
                    text-decoration: none;
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 25px;
                    transition: all 0.3s ease;
                }
                .back-link:hover {
                    background: rgba(255,255,255,0.3);
                    transform: translateY(-2px);
                }
            </style>
        </head>
        <body>
            <div class="error-container">
                <div class="error-code">404</div>
                <div class="error-message">抱歉，您访问的页面不存在</div>
                <a href="/" class="back-link">返回首页</a>
            </div>
        </body>
        </html>
    `;
    
    return new Response(html, {
        status: 404,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }
    });
}

/**
 * 处理请求的主要函数
 */
async function handleRequest(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    console.log(`收到请求: ${pathname}`);
    
    // 处理根路径
    if (pathname === '/' || pathname === '/index.html') {
        const content = await getFileContent('index.html');
        if (content) {
            return generateHTMLResponse(content);
        }
        return generate404Response();
    }
    
    // 处理其他静态文件
    const filename = FILE_MAP[pathname];
    if (filename) {
        const content = await getFileContent(filename);
        
        if (content) {
            const extension = filename.substring(filename.lastIndexOf('.'));
            const mimeType = MIME_TYPES[extension] || 'application/octet-stream';
            
            if (extension === '.html') {
                return generateHTMLResponse(content);
            } else if (extension === '.css') {
                return generateCSSResponse(content);
            } else if (extension === '.js') {
                return generateJSResponse(content);
            } else if (extension === '.md') {
                return generateMarkdownResponse(content);
            } else {
                return new Response(content, {
                    headers: {
                        'Content-Type': mimeType,
                        'Cache-Control': `public, max-age=${CONFIG.CACHE_TTL}`,
                        'X-Build-Version': CONFIG.BUILD_VERSION
                    }
                });
            }
        }
    }
    
    // 处理API请求
    if (pathname === '/api/info') {
        return new Response(JSON.stringify({
            version: CONFIG.BUILD_VERSION,
            buildDate: CONFIG.BUILD_DATE,
            project: 'student-welfare-platform',
            files: Object.keys(FILE_MAP),
            status: 'active'
        }), {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'public, max-age=3600'
            }
        });
    }
    
    // 处理健康检查
    if (pathname === '/health' || pathname === '/ping') {
        return new Response('OK', {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=60'
            }
        });
    }
    
    return generate404Response();
}

/**
 * Cloudflare Workers 入口点
 */
export default {
    async fetch(request, env) {
        // 设置环境变量
        global.ENV = env;
        
        try {
            return await handleRequest(request);
        } catch (error) {
            console.error('请求处理错误:', error);
            
            // 返回错误页面
            const errorHTML = `
                <!DOCTYPE html>
                <html lang="zh-CN">
                <head>
                    <meta charset="UTF-8">
                    <title>服务器错误</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
                        .error { background: #f5f5f5; padding: 20px; border-radius: 5px; }
                    </style>
                </head>
                <body>
                    <div class="error">
                        <h2>服务器内部错误</h2>
                        <p>请稍后重试或联系管理员</p>
                        <p><small>错误代码: 500</small></p>
                    </div>
                </body>
                </html>
            `;
            
            return new Response(errorHTML, {
                status: 500,
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
            });
        }
    }
};
