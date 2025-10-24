#!/usr/bin/env node

/**
 * Cloudflare 部署配置检查脚本
 * 检查 wrangler.toml 配置是否正确
 */

const fs = require('fs');
const path = require('path');

// 检查结果
const results = {
    passed: [],
    failed: [],
    warnings: []
};

/**
 * 检查文件是否存在
 */
function checkFileExists(filename) {
    const filePath = path.join(process.cwd(), filename);
    if (fs.existsSync(filePath)) {
        results.passed.push(`✅ ${filename} 文件存在`);
        return true;
    } else {
        results.failed.push(`❌ ${filename} 文件不存在`);
        return false;
    }
}

/**
 * 检查 wrangler.toml 配置
 */
function checkWranglerConfig() {
    const wranglerPath = path.join(process.cwd(), 'wrangler.toml');
    
    if (!fs.existsSync(wranglerPath)) {
        results.failed.push('❌ wrangler.toml 文件不存在');
        return false;
    }
    
    const content = fs.readFileSync(wranglerPath, 'utf8');
    
    // 检查必要字段
    const requiredFields = [
        'name =',
        'main =',
        'compatibility_date ='
    ];
    
    let allFieldsPresent = true;
    requiredFields.forEach(field => {
        if (content.includes(field)) {
            results.passed.push(`✅ 找到配置: ${field}`);
        } else {
            results.failed.push(`❌ 缺少配置: ${field}`);
            allFieldsPresent = false;
        }
    });
    
    // 检查域名配置
    if (content.includes('edu.869hr.uk')) {
        results.warnings.push('⚠️  发现默认域名占位符，请替换为实际域名');
    }
    
    // 检查路由配置
    if (content.includes('[[routes]]')) {
        results.passed.push('✅ 路由配置存在');
    } else {
        results.failed.push('❌ 路由配置缺失');
    }
    
    return allFieldsPresent;
}

/**
 * 检查 package.json 脚本
 */
function checkPackageScripts() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (!fs.existsSync(packagePath)) {
        results.failed.push('❌ package.json 文件不存在');
        return false;
    }
    
    try {
        const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const scripts = packageData.scripts || {};
        
        const requiredScripts = ['start', 'deploy', 'build', 'check'];
        
        let allScriptsPresent = true;
        requiredScripts.forEach(script => {
            if (scripts[script]) {
                results.passed.push(`✅ 脚本 ${script} 存在`);
            } else {
                results.failed.push(`❌ 脚本 ${script} 缺失`);
                allScriptsPresent = false;
            }
        });
        
        return allScriptsPresent;
    } catch (error) {
        results.failed.push('❌ package.json 格式错误');
        return false;
    }
}

/**
 * 检查环境变量
 */
function checkEnvironment() {
    const requiredEnvVars = ['CF_API_TOKEN', 'CF_ACCOUNT_ID'];
    let envCheckPassed = true;
    
    requiredEnvVars.forEach(envVar => {
        if (process.env[envVar]) {
            results.passed.push(`✅ 环境变量 ${envVar} 已设置`);
        } else {
            results.warnings.push(`⚠️  环境变量 ${envVar} 未设置（部署时需要）`);
            envCheckPassed = false;
        }
    });
    
    return envCheckPassed;
}

/**
 * 检查 Node.js 版本
 */
function checkNodeVersion() {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    
    if (majorVersion >= 16) {
        results.passed.push(`✅ Node.js 版本 ${nodeVersion} 符合要求`);
        return true;
    } else {
        results.failed.push(`❌ Node.js 版本 ${nodeVersion} 过低，需要 16.0.0 或更高`);
        return false;
    }
}

/**
 * 生成检查报告
 */
function generateReport() {
    console.log('\n🔍 Cloudflare 部署配置检查报告\n');
    console.log('='.repeat(50));
    
    if (results.passed.length > 0) {
        console.log('\n✅ 通过的检查:');
        results.passed.forEach(result => console.log(`  ${result}`));
    }
    
    if (results.warnings.length > 0) {
        console.log('\n⚠️  警告:');
        results.warnings.forEach(result => console.log(`  ${result}`));
    }
    
    if (results.failed.length > 0) {
        console.log('\n❌ 失败的检查:');
        results.failed.forEach(result => console.log(`  ${result}`));
    }
    
    console.log('\n' + '='.repeat(50));
    
    const totalChecks = results.passed.length + results.warnings.length + results.failed.length;
    const successRate = ((results.passed.length + results.warnings.length) / totalChecks * 100).toFixed(1);
    
    console.log(`\n📊 检查完成，成功率: ${successRate}%`);
    
    if (results.failed.length === 0) {
        console.log('\n🎉 配置检查通过！可以进行部署了。');
        console.log('\n🚀 部署步骤:');
        console.log('  1. 设置环境变量: CF_API_TOKEN 和 CF_ACCOUNT_ID');
        console.log('  2. 运行: npm run deploy');
        console.log('  3. 或者使用 Pages: npm run deploy:pages');
        
        return true;
    } else {
        console.log('\n❌ 存在错误，需要修复后才能部署。');
        return false;
    }
}

/**
 * 主函数
 */
function main() {
    console.log('🚀 开始检查 Cloudflare 部署配置...\n');
    
    // 检查文件
    checkFileExists('worker.js');
    checkFileExists('wrangler.toml');
    checkFileExists('package.json');
    
    // 检查配置
    checkWranglerConfig();
    checkPackageScripts();
    checkEnvironment();
    checkNodeVersion();
    
    // 生成报告
    const success = generateReport();
    
    // 退出代码
    process.exit(success ? 0 : 1);
}

// 运行检查
if (require.main === module) {
    main();
}

module.exports = { checkWranglerConfig, checkPackageScripts, checkEnvironment, checkNodeVersion };
