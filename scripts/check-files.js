#!/usr/bin/env node

/**
 * 文件完整性检查脚本
 * 检查所有必要文件是否存在且格式正确
 */

const fs = require('fs');
const path = require('path');

// 检查结果
const results = {
    passed: [],
    failed: [],
    warnings: []
};

// 必要文件列表
const requiredFiles = [
    'index.html',
    'styles.css',
    'script.js',
    'worker.js',
    'wrangler.toml',
    'package.json',
    'PROJECT_README.md'
];

// 可选文件列表
const optionalFiles = [
    'test.html',
    'README.md'
];

/**
 * 检查文件是否存在
 */
function checkFileExists(filename) {
    const filePath = path.join(process.cwd(), filename);
    return fs.existsSync(filePath);
}

/**
 * 检查文件是否可读
 */
function checkFileReadable(filename) {
    try {
        const filePath = path.join(process.cwd(), filename);
        fs.accessSync(filePath, fs.constants.R_OK);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * 检查文件大小
 */
function checkFileSize(filename) {
    try {
        const filePath = path.join(process.cwd(), filename);
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return 0;
    }
}

/**
 * 检查 HTML 文件
 */
function checkHTMLFile(filename) {
    if (!checkFileExists(filename)) {
        return false;
    }
    
    try {
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
        
        // 检查基本 HTML 结构
        const hasDoctype = content.includes('<!DOCTYPE html>');
        const hasHtmlTag = content.includes('<html');
        const hasHead = content.includes('<head>');
        const hasBody = content.includes('<body>');
        
        if (hasDoctype && hasHtmlTag && hasHead && hasBody) {
            results.passed.push(`✅ ${filename} HTML 结构完整`);
            return true;
        } else {
            results.warnings.push(`⚠️  ${filename} HTML 结构可能不完整`);
            return false;
        }
    } catch (error) {
        results.failed.push(`❌ ${filename} 读取失败: ${error.message}`);
        return false;
    }
}

/**
 * 检查 CSS 文件
 */
function checkCSSFile(filename) {
    if (!checkFileExists(filename)) {
        return false;
    }
    
    try {
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
        
        // 检查是否有基本的 CSS 规则
        const hasSelector = content.includes('{') && content.includes('}');
        const hasProperty = content.includes(':');
        
        if (hasSelector && hasProperty) {
            results.passed.push(`✅ ${filename} CSS 格式正确`);
            return true;
        } else {
            results.warnings.push(`⚠️  ${filename} CSS 格式可能不完整`);
            return false;
        }
    } catch (error) {
        results.failed.push(`❌ ${filename} 读取失败: ${error.message}`);
        return false;
    }
}

/**
 * 检查 JavaScript 文件
 */
function checkJSFile(filename) {
    if (!checkFileExists(filename)) {
        return false;
    }
    
    try {
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
        
        // 检查是否有基本的 JS 语法
        const hasFunction = content.includes('function') || content.includes('=>');
        const hasVariable = content.includes('const') || content.includes('let') || content.includes('var');
        
        if (hasFunction || hasVariable) {
            results.passed.push(`✅ ${filename} JavaScript 格式正确`);
            return true;
        } else {
            results.warnings.push(`⚠️  ${filename} JavaScript 内容可能不完整`);
            return false;
        }
    } catch (error) {
        results.failed.push(`❌ ${filename} 读取失败: ${error.message}`);
        return false;
    }
}

/**
 * 检查 JSON 文件
 */
function checkJSONFile(filename) {
    if (!checkFileExists(filename)) {
        return false;
    }
    
    try {
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
        JSON.parse(content);
        results.passed.push(`✅ ${filename} JSON 格式正确`);
        return true;
    } catch (error) {
        results.failed.push(`❌ ${filename} JSON 格式错误: ${error.message}`);
        return false;
    }
}

/**
 * 检查文件编码
 */
function checkFileEncoding(filename) {
    if (!checkFileExists(filename)) {
        return false;
    }
    
    try {
        const content = fs.readFileSync(path.join(process.cwd(), filename), 'utf8');
        // 如果能正常读取为 UTF-8，说明编码正确
        results.passed.push(`✅ ${filename} 编码正确 (UTF-8)`);
        return true;
    } catch (error) {
        results.warnings.push(`⚠️  ${filename} 编码可能不是 UTF-8`);
        return false;
    }
}

/**
 * 生成文件清单
 */
function generateFileList() {
    const files = fs.readdirSync(process.cwd());
    const fileList = [];
    
    files.forEach(file => {
        if (file !== 'node_modules' && !file.startsWith('.') && file !== 'scripts') {
            const filePath = path.join(process.cwd(), file);
            const stats = fs.statSync(filePath);
            fileList.push({
                name: file,
                size: stats.size,
                type: stats.isDirectory() ? 'directory' : 'file',
                modified: stats.mtime
            });
        }
    });
    
    return fileList;
}

/**
 * 生成检查报告
 */
function generateReport() {
    console.log('\n📁 文件完整性检查报告\n');
    console.log('='.repeat(50));
    
    // 检查必要文件
    console.log('\n🔍 必要文件检查:');
    requiredFiles.forEach(file => {
        if (checkFileExists(file)) {
            results.passed.push(`✅ ${file} 存在`);
            
            // 检查文件类型
            if (file.endsWith('.html')) {
                checkHTMLFile(file);
            } else if (file.endsWith('.css')) {
                checkCSSFile(file);
            } else if (file.endsWith('.js')) {
                checkJSFile(file);
            } else if (file.endsWith('.json')) {
                checkJSONFile(file);
            } else {
                checkFileEncoding(file);
            }
        } else {
            results.failed.push(`❌ ${file} 不存在`);
        }
    });
    
    // 检查可选文件
    console.log('\n🔍 可选文件检查:');
    optionalFiles.forEach(file => {
        if (checkFileExists(file)) {
            results.passed.push(`✅ ${file} 存在`);
            checkFileEncoding(file);
        } else {
            results.warnings.push(`⚠️  ${file} 不存在（可选）`);
        }
    });
    
    // 检查文件大小
    console.log('\n📊 文件大小检查:');
    requiredFiles.forEach(file => {
        if (checkFileExists(file)) {
            const size = checkFileSize(file);
            if (size > 0) {
                results.passed.push(`✅ ${file} 大小: ${Math.round(size / 1024)} KB`);
            } else {
                results.warnings.push(`⚠️  ${file} 大小为 0`);
            }
        }
    });
    
    // 生成文件清单
    const fileList = generateFileList();
    console.log('\n📋 项目文件清单:');
    fileList.forEach(file => {
        if (file.type === 'file') {
            console.log(`  ${file.name} (${Math.round(file.size / 1024)} KB)`);
        }
    });
    
    console.log('\n' + '='.repeat(50));
    
    const totalChecks = results.passed.length + results.warnings.length + results.failed.length;
    const successRate = ((results.passed.length + results.warnings.length) / totalChecks * 100).toFixed(1);
    
    console.log(`\n📊 检查完成，成功率: ${successRate}%`);
    
    if (results.failed.length === 0) {
        console.log('\n🎉 文件检查通过！所有必要文件都存在且格式正确。');
        return true;
    } else {
        console.log('\n❌ 存在文件问题，需要修复。');
        return false;
    }
}

/**
 * 主函数
 */
function main() {
    console.log('🚀 开始检查文件完整性...\n');
    
    const success = generateReport();
    
    // 退出代码
    process.exit(success ? 0 : 1);
}

// 运行检查
if (require.main === module) {
    main();
}

module.exports = { checkFileExists, checkFileSize, generateFileList };
