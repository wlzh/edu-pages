// 学生福利数据
const welfareData = [
    {
        id: 1,
        title: "GitHub 学生开发者包",
        category: "开发工具",
        benefits: [
            "免费使用多达 89 种开发工具，包括 Microsoft Azure、JetBrains、Heroku、GitHub Pro 等",
            "提供免费域名（如 Namecheap 提供的一年免费.me域名）",
            "DigitalOcean 的 $200 云服务代金券",
            "各种开发相关软件和服务，如 Postman、Bootstrap Studio 等"
        ],
        steps: [
            "访问 GitHub Student Developer Pack 页面",
            "登录您的 GitHub 账号（如果没有，请先创建一个）",
            "点击'Get your pack'，填写申请表格",
            "使用 edu 邮箱验证身份，或上传学生证等证明文件"
        ],
        verify: ["学校颁发的 edu 邮箱地址", "或者上传有效的学生证照片或学校开具的在读证明"],
        link: "https://education.github.com/pack"
    },
    {
        id: 2,
        title: "Microsoft Azure for Students",
        category: "云服务",
        benefits: [
            "每年 $100 的 Azure 信用额度，用于订阅云服务",
            "免费使用 Visual Studio Code、SQL Server Developer 等开发工具",
            "可访问 Azure Dev Tools for Teaching 中的所有资源"
        ],
        steps: [
            "前往 Azure for Students 页面",
            "点击'Activate Now'按钮，登录或创建 Microsoft 账户",
            "输入您的 edu 邮箱地址进行验证"
        ],
        verify: ["必须提供有效的 edu 邮箱地址进行身份验证"],
        link: "https://azure.microsoft.com/en-us/free/students/"
    },
    {
        id: 3,
        title: "AWS Educate",
        category: "云服务",
        benefits: [
            "至少 $40 的 AWS 云计算服务优惠额度",
            "数百小时的云技术学习资源，包括动手实验室和课程内容"
        ],
        steps: [
            "打开 AWS Educate 页面",
            "点击'Join AWS Educate'按钮并填写申请表格",
            "使用 edu 邮箱完成验证"
        ],
        verify: ["有效的 edu 邮箱地址即可完成注册"],
        link: "https://aws.amazon.com/education/awseducate/"
    },
    {
        id: 4,
        title: "Autodesk 教育版软件",
        category: "设计工具",
        benefits: [
            "免费使用 AutoCAD、Revit、Maya 等专业设计软件，试用期最长可达三年"
        ],
        steps: [
            "访问 Autodesk Education Community 页面",
            "创建 Autodesk 账户并选择'教育版'选项",
            "上传证明文件以确认学生身份"
        ],
        verify: ["学生证照片或学校开具的在读证明（必须包含姓名、学校名称及学期信息）"],
        link: "https://www.autodesk.com/education/home"
    },
    {
        id: 5,
        title: "JetBrains 学生包",
        category: "开发工具",
        benefits: [
            "免费使用 IntelliJ IDEA、PyCharm、WebStorm 等所有 JetBrains 开发工具套件"
        ],
        steps: [
            "前往 JetBrains Student License 页面",
            "点击'Apply Now'，登录或创建 JetBrains 账户",
            "使用 edu 邮箱验证身份，或者上传在读证明材料"
        ],
        verify: ["有效的 edu 邮箱地址，或者最近六个月内的成绩单或在读证明"],
        link: "https://www.jetbrains.com/community/education/#students"
    },
    {
        id: 6,
        title: "Google Workspace for Education",
        category: "其他优惠",
        benefits: [
            "提供 Gmail、自定义电子邮件地址、大容量 Google Drive 存储空间等协作工具套件功能（大陆地区不适用）"
        ],
        steps: [
            "如果您的学校支持 Google Workspace，请联系学校管理员获取账户信息或申请权限",
            "登录 Google Workspace for Education 页面了解更多详情"
        ],
        verify: ["无需额外提交材料，由学校直接分配账户权限"],
        link: "https://edu.google.com/products/workspace-for-education/"
    },
    {
        id: 7,
        title: "Adobe Creative Cloud 教育版",
        category: "设计工具",
        benefits: [
            "大幅折扣购买 Adobe 全家桶，包括 Photoshop、Illustrator 和 Premiere Pro 等软件套件（通常为原价的一半）"
        ],
        steps: [
            "打开 Adobe Creative Cloud for Students 页面",
            "创建 Adobe ID 并选择'学生与教师'选项购买订阅计划",
            "验证您的学生身份（通常通过 edu 邮箱）"
        ],
        verify: ["有效的 edu 邮箱地址，或者上传学生证照片进行验证"],
        link: "https://www.adobe.com/creativecloud/buy/students.html"
    },
    {
        id: 8,
        title: "Notion 学生计划",
        category: "开发工具",
        benefits: [
            "免费升级到 Notion Personal Pro 版本，可无限制地创建页面和协作项目"
        ],
        steps: [
            "前往 Notion for Students and Educators 页面",
            "注册 Notion 帐号并输入您的 edu 邮箱地址完成验证"
        ],
        verify: ["有效的 edu 邮箱即可完成认证，无需额外材料"],
        link: "https://www.notion.com/product/notion-for-education"
    },
    {
        id: 9,
        title: "Spotify Premium 学生套餐",
        category: "其他优惠",
        benefits: [
            "每月仅约 $4-$5，即可享受 Spotify Premium 服务，包括无广告播放、高质量音频和离线下载功能（具体价格因地区而异）"
        ],
        steps: [
            "打开 Spotify Premium for Students 页面并登录 Spotify 帐户（如果没有，请先创建一个）",
            "填写申请表格并输入您的 edu 邮箱地址进行验证，通过 SheerID 完成认证流程"
        ],
        verify: ["有效的学生证照片或其他在读证明材料，可能需要上传至 SheerID 系统审核"],
        link: "https://www.spotify.com/student/"
    },
    {
        id: 10,
        title: "Canva Pro 教育版",
        category: "设计工具",
        benefits: [
            "免费使用 Canva Pro 的所有高级功能，包括团队协作、高级模板、素材库等",
            "提供无限制的存储空间和设计功能，适合用于学术项目、演示文稿和创意设计"
        ],
        steps: [
            "前往 Canva 教育计划页面",
            "点击'注册'或'申请教育版'按钮",
            "使用您的 edu 邮箱地址创建账户，或者登录现有账户",
            "上传学生证或学校开具的在读证明以完成身份验证"
        ],
        verify: ["有效的 edu 邮箱地址", "学生证照片或学校开具的在读证明（如果需要进一步验证）"],
        link: "https://www.canva.com/education/"
    },
    {
        id: 11,
        title: "Apple 教育优惠",
        category: "其他优惠",
        benefits: [
            "购买 MacBook、iPad 等设备时可享受教育折扣（通常为原价的 5%-10% 折扣）",
            "部分促销活动期间还会赠送 AirPods 或其他配件",
            "Apple Music 学生套餐每月仅 $4.99，并附赠 Apple TV+ 服务"
        ],
        steps: [
            "打开 Apple 教育商店页面",
            "登录您的 Apple ID 或创建新账户",
            "选择您需要购买的产品并完成结账流程",
            "系统可能会通过 UNiDAYS 或其他平台验证您的学生身份"
        ],
        verify: ["有效的 edu 邮箱地址，或者通过 UNiDAYS 上传学生证照片进行验证"],
        link: "https://www.apple.com.cn/education/"
    },
    {
        id: 12,
        title: "Lenovo 和 Dell 学生折扣",
        category: "其他优惠",
        benefits: [
            "Lenovo 权益：可享受笔记本电脑、台式机及配件的专属学生折扣（通常为 5%-20%）",
            "Dell 权益：提供 XPS、Inspiron 等系列产品的教育优惠，以及免费送货服务"
        ],
        steps: [
            "前往 Lenovo 学生商店页面",
            "注册账户并填写个人信息，使用 edu 邮箱完成认证",
            "浏览商品并选择符合条件的优惠产品进行购买"
        ],
        verify: ["有效的 edu 邮箱地址即可完成认证，无需额外材料"],
        link: "https://shop.lenovo.com.cn/page/xs/xs.html"
    },
    {
        id: 13,
        title: "Coursera 和 Udemy 学习平台优惠",
        category: "学习平台",
        benefits: [
            "Coursera 权益：部分课程和专业认证对学生免费开放，或提供大幅折扣",
            "Udemy 权益：不定期推出针对学生用户的大幅度课程折扣活动"
        ],
        steps: [
            "打开 Coursera for Students 页面",
            "创建账户并填写个人信息，使用 edu 邮箱完成注册",
            "浏览课程目录并选择符合条件的免费或优惠课程进行学习"
        ],
        verify: ["有效的 edu 邮箱地址即可完成认证，无需额外材料"],
        link: "https://www.coursera.org/"
    },
    {
        id: 14,
        title: "Amazon Prime 学生优惠",
        category: "其他优惠",
        benefits: [
            "免费试用 Amazon Prime 6 个月，然后享受 50% 的折扣"
        ],
        steps: [
            "进入 Amazon Prime 学生页面",
            "使用 .edu 邮箱注册",
            "提供学生身份信息进行验证",
            "完成注册后可享受学生优惠"
        ],
        verify: ["edu 邮箱，学生身份信息"],
        link: "https://www.amazon.cn/Prime-Student/b?ie=UTF8&node=6075209051"
    },
    {
        id: 15,
        title: "Student Beans",
        category: "其他优惠",
        benefits: [
            "通过 Student Beans 平台，学生可以享受多种品牌的折扣，包括 Nike、Adidas、H&M、ASOS 等"
        ],
        steps: [
            "访问 Student Beans 网站",
            "使用 .edu 邮箱注册",
            "查看并选择你需要的品牌折扣"
        ],
        verify: ["edu 邮箱等"],
        link: "https://www.studentbeans.com/"
    },
    {
        id: 16,
        title: "iAsk.ai 免费人工智能搜索引擎",
        category: "AI工具",
        benefits: [
            "释放高级自我推理人工智能的力量",
            "上传文件并向人工智能提出具有洞察力的问题，以提取关键信息提出后续问题以完善答案",
            "无限制的人工智能生成精美图片",
            "无广告体验",
            "每天 300 个专业问题"
        ],
        steps: [
            "访问 iAsk教育优惠注册链接页面",
            "打开后点击Sign Up for Free",
            "直接用edu邮箱进行注册，设置用户名和密码进入",
            "进入邮箱确认后，再重新回到iask.ai网站主页"
        ],
        verify: ["edu 邮箱"],
        link: "https://iask.ai/students"
    },
    {
        id: 17,
        title: "阿里云学生计划",
        category: "云服务",
        benefits: [
            "认证后一年300元的直抵用优惠券，可购买大部分（不能购买99优惠服务器）的阿里云产品"
        ],
        steps: [
            "访问阿里云高校计划页面",
            "认证方式为使用支付宝学信网认证",
            "认证后一年300元的直抵用优惠券",
            "审核通过后即可享受优惠"
        ],
        verify: ["学信网认证等"],
        link: "https://university.aliyun.com/"
    },
    {
        id: 18,
        title: "腾讯云校园计划",
        category: "云服务",
        benefits: [
            "提供云服务器、对象存储等产品的优惠套餐，价格实惠"
        ],
        steps: [
            "访问腾讯云校园计划链接页面",
            "在活动页面点击 '立即申请'",
            "按要求填写个人信息和学校信息，并上传学生证或校园卡照片进行身份验证",
            "审核通过后即可享受优惠"
        ],
        verify: ["学生证照片或校园卡，edu 邮箱等"],
        link: "https://cloud.tencent.com/act/campus"
    },
    {
        id: 19,
        title: "网易云笔记",
        category: "其他优惠",
        benefits: [
            "免费领取网易云笔记会员，享受相关会员权益"
        ],
        steps: [
            "访问网易启航邮申请链接页面",
            "输入验证校园邮箱（只对活动参与范围内的邮箱有效，需自行测试）",
            "填写 edu 邮箱进行启航邮的申请，绑定手机号码，成功登录启航邮后，邮箱会自动收到一封云笔记会员登录邮件，点击邮件，按照提示填写已注册的有道云笔记账号，即可绑定会员"
        ],
        verify: ["活动参与范围内的邮箱，手机号等"],
        link: "https://vip.163.com/projects/campus-vip/#/emailCheck?utm_source=web&from=default"
    },
    {
        id: 20,
        title: "Figma",
        category: "设计工具",
        benefits: [
            "教育版为学生和教师提供免费使用权限"
        ],
        steps: [
            "访问 Figma for Education 页面",
            "打开链接后点击 'Get verfied' 字样跳转到学生认证页面",
            "用 edu 邮箱注册 Figma 账号，然后在收到的验证邮件中点击链接完成验证，再填写学校名称、主要研究领域等信息",
            "验证成功后即可获得 Figma 教育版的使用权限"
        ],
        verify: ["Edu邮箱，学校信息等"],
        link: "https://www.figma.com/education"
    },
    {
        id: 21,
        title: "语雀",
        category: "其他优惠",
        benefits: [
            "语雀免费一年会员"
        ],
        steps: [
            "访问语雀公益计划页面",
            "打开链接后点击 '立即认证' 字样跳转到注册页面进行注册",
            "填写edu邮箱（仅支持**.edu.cn）发送认证邮件",
            "验证成功后即可获得语雀免费一年会员的使用权限"
        ],
        verify: ["Edu邮箱等"],
        link: "https://www.yuque.com/about/welfare"
    },
    {
        id: 22,
        title: "Craft",
        category: "AI工具",
        benefits: [
            "可以免费使用高级功能，包括但不限于gpt-4o-mini，经状态验证可无限次续订"
        ],
        steps: [
            "访问 Craft教育计划页面",
            "打开链接后点击 'Get for F' 字样跳转到注册页面进行注册",
            "使用edu邮箱注册，等待Craft团队审批",
            "验证成功后即可获得免费一年会员的使用权限,经状态验证可无限次续订"
        ],
        verify: ["Edu邮箱等"],
        link: "https://www.craft.do/education"
    },
    {
        id: 23,
        title: "Miro",
        category: "开发工具",
        benefits: [
            "免费访问 Miro 的教育计划，适用于学生和教师",
            "提供无限制的协作白板功能，用于团队项目、头脑风暴和学习活动",
            "可创建无限数量的团队和项目，并享受高级模板库",
            "支持实时协作和跨设备同步"
        ],
        steps: [
            "访问 Miro for Education 页面",
            "点击'Sign up free'按钮，创建或登录您的 Miro 账户",
            "输入您的 edu 邮箱地址进行验证，或者上传学生证等证明文件以确认身份",
            "验证通过后，即可免费使用 Miro 教育版"
        ],
        verify: ["有效的 edu 邮箱地址（如学校颁发的 .edu 后缀邮箱）", "或者上传有效的学生证照片或学校开具的在读证明"],
        link: "https://miro.com/education/"
    },
    {
        id: 24,
        title: "Sketch",
        category: "设计工具",
        benefits: [
            "免费获取一年期 Sketch 个人许可证，用于 UI/UX 设计、原型制作等专业设计工作",
            "包含所有高级功能，如矢量编辑工具、插件支持以及云端协作功能"
        ],
        steps: [
            "前往 Sketch Education Store 页面",
            "创建或登录 Sketch 帐户",
            "填写申请表格并提供学生身份验证信息（如 edu 邮箱或其他证明材料）",
            "验证通过后即可获得一年的免费许可证"
        ],
        verify: ["有效的 edu 邮箱地址（推荐）", "或者上传有效的学生证照片、学校开具的在读证明，或最近六个月内的成绩单"],
        link: "https://www.sketch.com/store/education/"
    },
    {
        id: 25,
        title: "Raycast",
        category: "开发工具",
        benefits: [
            "享受50%的折扣优惠",
            "解锁所有高级功能，包括自定义扩展、API 集成和更高效的生产力工具",
            "支持团队协作功能，适合学术研究和项目管理"
        ],
        steps: [
            "打开 Raycast Student Program 页面",
            "登录或创建 Raycast 帐户",
            "使用 edu 邮箱完成验证，或者提交相关学生身份材料（如学生证）",
            "验证成功后，即可激活 Raycast Pro 的免费订阅服务"
        ],
        verify: ["有效的 edu 邮箱地址（优先推荐）", "或者上传有效的学生证照片或学校出具的在读证明材料"],
        link: "https://raycastapp.typeform.com/to/hSoIknLJ"
    },
    {
        id: 26,
        title: "Axure",
        category: "设计工具",
        benefits: [
            "免费获取 Axure RP 专业版，为期一年，用于原型设计和用户体验研究"
        ],
        steps: [
            "前往 Axure 教育计划页面",
            "填写申请表格并上传学生身份验证材料（如学生证）",
            "验证通过后即可获得许可证密钥并激活软件"
        ],
        verify: ["有效的学生证照片或学校开具的在读证明"],
        link: "https://www.axure.com/edu"
    },
    {
        id: 27,
        title: "扫描全能王",
        category: "其他优惠",
        benefits: [
            "免费或大幅折扣使用 CamScanner 的高级功能，包括：无水印 PDF 导出、高级 OCR（光学字符识别）功能，用于提取文本、云存储空间扩展 、文档加密和共享功能、批量扫描和编辑工具"
        ],
        steps: [
            "前往 CamScanner 学生优惠页面（具体链接可能因地区而异）",
            "登录或创建一个 CamScanner 帐号",
            "点击'申请学生认证'按钮，进入验证流程",
            "提交您的 edu 邮箱地址，或者上传学生证等证明文件以完成身份验证",
            "验证通过后，账户将自动升级为学生版，并享受相应的优惠"
        ],
        verify: ["有效的 edu 邮箱地址（优先推荐）", "或者上传有效的学生证照片或学校出具的在读证明材料"],
        link: "https://www.camscanner.com/"
    },
    {
        id: 28,
        title: "MATLAB (MathWorks) 学生版优惠",
        category: "开发工具",
        benefits: [
            "MATLAB 和 Simulink 提供学生版许可，价格大幅优惠，包括 MATLAB 基础软件以及多种附加工具箱（Toolboxes），适用于学术学习、研究和项目开发"
        ],
        steps: [
            "访问 MathWorks 学生版页面",
            "点击'Get MATLAB and Simulink'按钮",
            "登录或创建 MathWorks 账户",
            "输入学校信息并验证 edu 邮箱地址",
            "根据提示选择需要的产品并完成购买"
        ],
        verify: ["有效的 edu 邮箱地址", "或者上传学生证照片以证明学生身份"],
        link: "https://www.mathworks.com/academia/student_version.html"
    },
    {
        id: 29,
        title: "OriginLab 学生版优惠",
        category: "开发工具",
        benefits: [
            "OriginLab 提供学生版许可，以折扣价获取 Origin 和 OriginPro 数据分析与可视化软件，包括高级绘图功能、统计分析工具和数据处理模块",
            "适合科学研究、工程项目和学术报告制作"
        ],
        steps: [
            "访问 OriginLab 学生版页面",
            "点击'Purchase Now'按钮并选择学生版选项",
            "创建 OriginLab 帐户并填写个人信息，包括学校名称和课程信息",
            "上传有效的学生证照片或在读证明文件以完成身份验证",
            "验证通过后，即可享受折扣价购买软件"
        ],
        verify: ["有效的学生证照片或学校开具的在读证明（必须包含姓名、学校名称及学期信息）"],
        link: "https://www.originlab.com/index.aspx?go=Products/OriginStudentVersion"
    },
    {
        id: 30,
        title: "You.com 教育版优惠",
        category: "AI工具",
        benefits: [
            "访问所有 AI 模型，包括 GPT-4o、OpenAI o1 和 Claude 3.5 Sonnet",
            "文件上传，每个查询最多 25MB",
            "高达 64k 上下文窗口",
            "接触研究和定制代理"
        ],
        steps: [
            "访问 You.com官网注册",
            "注册完成后跳转 教育优惠网站",
            "点击立即开始"
        ],
        verify: ["Edu邮箱等"],
        link: "https://you.com/"
    },
    {
        id: 31,
        title: "网易云音乐 黑胶vip",
        category: "其他优惠",
        benefits: [
            "黑胶VIP包月与年卡享受优惠"
        ],
        steps: [
            "访问学生优惠链接",
            "点击立享优惠（但标注说明要特邀用户参与，自行测试）"
        ],
        verify: ["特邀名额"],
        link: "https://y.music.163.com/m/at/daydayup230505Astudyup-01"
    },
    {
        id: 32,
        title: "百度网盘 vip",
        category: "其他优惠",
        benefits: [
            "百度网盘VIP包月与年卡享受优惠"
        ],
        steps: [
            "访问学生优惠链接",
            "点击认证学生（本人脱离学生阶段需用户自行测试）"
        ],
        verify: ["学生认证等"],
        link: "https://snsyun.baidu.com/sl/dDfZKL7"
    },
    {
        id: 33,
        title: "Ansys Academic Program",
        category: "开发工具",
        benefits: [
            "免费或折扣使用 Ansys 学术版软件，包括 Ansys Mechanical、Ansys Fluent、Ansys Electronics Desktop 等",
            "提供学生个人学习版（Student Version），支持有限规模的仿真功能，适合学习和课程项目",
            "高校可以申请 Ansys Campus Solution，提供全校范围内的访问权限",
            "访问丰富的学习资源，包括教程、培训视频和技术支持"
        ],
        steps: [
            "访问 Ansys for Students 页面",
            "点击'Free Student Software Downloads'按钮，进入学生版软件下载页面",
            "创建或登录 Ansys 帐户",
            "填写表格并上传相关证明文件（如 edu 邮箱或学生证）",
            "下载并安装软件后，即可激活教育许可"
        ],
        verify: ["有效的 edu 邮箱地址", "或者上传有效的学生证照片或学校开具的在读证明"],
        link: "https://www.ansys.com/academic/students"
    },
    {
        id: 34,
        title: "CST Studio Suite",
        category: "开发工具",
        benefits: [
            "提供 CST Studio Suite 学术版，用于电磁场仿真和设计优化，适用于研究和教学用途",
            "学生个人可以通过学校获得授权许可（通常为网络许可）",
            "免费试用版本可供下载，但功能受限，仅用于评估目的"
        ],
        steps: [
            "访问 3DEXPERIENCE Edu 页面",
            "免费下载",
            "使用Edu邮箱注册账户验证后进入 software3ds",
            "选择免费下载即可，免费的有 CATIA ICEM Surf ， CATIA CATIA Magic/No Magic， SIMULIA SIMULIA Abaqus， SIMULIA SIMULIA CST"
        ],
        verify: ["有效的 edu 邮箱地址（如果通过学校申请）", "或者上传有效的学生证照片或在读证明，用于试用版本申请"],
        link: "https://www.3ds.com/edu/education/students/solutions/cst-le"
    },
    {
        id: 35,
        title: "Google One AI Premium",
        category: "AI工具",
        benefits: [
            "提供 Google Gemini Advanced 等权益"
        ],
        steps: [
            "访问 Google Gemini 页面",
            "验证邮箱后绑卡"
        ],
        verify: ["有效的 edu 邮箱", "有效的银行卡"],
        link: "https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65"
    }
];

// 全局变量
let filteredData = [...welfareData];
let currentPage = 1;
const itemsPerPage = 10;
let currentFilters = {
    category: [],
    verify: [],
    search: ''
};

// DOM元素
const welfareContainer = document.getElementById('welfareContainer');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const clearFilter = document.getElementById('clearFilter');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const totalCount = document.getElementById('totalCount');
const detailModal = document.getElementById('detailModal');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderWelfareCards();
    setupEventListeners();
    updateTotalCount();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    
    // 筛选功能
    filterBtn.addEventListener('click', toggleFilterPanel);
    
    // 筛选标签点击
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', handleFilterClick);
    });
    
    // 清除筛选
    clearFilter.addEventListener('click', clearFilters);
    
    // 加载更多
    loadMoreBtn.addEventListener('click', loadMore);
    
    // 模态框关闭
    document.querySelector('.close-btn').addEventListener('click', closeDetailModal);
    detailModal.addEventListener('click', function(e) {
        if (e.target === detailModal) {
            closeDetailModal();
        }
    });
    
    // 键盘事件
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDetailModal();
            hideFilterPanel();
        }
    });
}

// 渲染福利卡片
function renderWelfareCards() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    
    if (currentPage === 1) {
        welfareContainer.innerHTML = '';
    }
    
    if (paginatedData.length === 0) {
        welfareContainer.innerHTML = createEmptyState();
        loadMoreBtn.style.display = 'none';
        return;
    }
    
    paginatedData.forEach((item, index) => {
        const card = createWelfareCard(item, index);
        welfareContainer.appendChild(card);
        
        // 添加动画延迟
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
    
    // 更新加载更多按钮状态
    loadMoreBtn.style.display = endIndex < filteredData.length ? 'block' : 'none';
}

// 创建福利卡片
function createWelfareCard(item, index) {
    const card = document.createElement('div');
    card.className = `welfare-card category-${getCategorySlug(item.category)}`;
    card.innerHTML = `
        <div class="card-header">
            <div class="card-number">${item.id}</div>
            <h3 class="card-title">${item.title}</h3>
            <span class="card-badge">${item.category}</span>
        </div>
        <div class="card-content">
            <ul class="card-benefits">
                ${item.benefits.slice(0, 2).map(benefit => `<li>${benefit}</li>`).join('')}
                ${item.benefits.length > 2 ? `<li>... 还有 ${item.benefits.length - 2} 项福利</li>` : ''}
            </ul>
            <div class="card-steps">
                <h4>申请步骤</h4>
                <ul>
                    ${item.steps.slice(0, 2).map(step => `<li>${step}</li>`).join('')}
                    ${item.steps.length > 2 ? `<li>... 还有 ${item.steps.length - 2} 步</li>` : ''}
                </ul>
            </div>
        </div>
        <div class="card-verify">
            ${item.verify.slice(0, 2).map(verify => `<span class="verify-tag">${verify}</span>`).join('')}
        </div>
    `;
    
    card.addEventListener('click', () => showDetailModal(item));
    
    return card;
}

// 创建空状态
function createEmptyState() {
    return `
        <div class="empty-state">
            <h3>🔍 没有找到匹配的福利</h3>
            <p>尝试调整筛选条件或搜索关键词</p>
        </div>
    `;
}

// 显示详情模态框
function showDetailModal(item) {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="card-header">
                <div class="card-number">${item.id}</div>
                <h2 class="card-title">${item.title}</h2>
                <span class="card-badge">${item.category}</span>
            </div>
            
            <div class="modal-content-section">
                <h4>🎯 福利详情</h4>
                <ul class="card-benefits">
                    ${item.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-content-section">
                <h4>📋 申请步骤</h4>
                <div class="card-steps">
                    <ul>
                        ${item.steps.map(step => `<li>${step}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="modal-content-section">
                <h4>✅ 验证要求</h4>
                <div class="card-verify">
                    ${item.verify.map(verify => `<span class="verify-tag">${verify}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <a href="${item.link}" target="_blank" class="btn-primary">访问官网</a>
                <button onclick="closeDetailModal()" class="btn-secondary">关闭</button>
            </div>
        </div>
    `;
    
    detailModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

// 关闭详情模态框
function closeDetailModal() {
    detailModal.classList.remove('show');
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 搜索功能
function handleSearch(e) {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
}

// 切换筛选面板
function toggleFilterPanel() {
    filterPanel.classList.toggle('show');
}

// 隐藏筛选面板
function hideFilterPanel() {
    filterPanel.classList.remove('show');
}

// 筛选标签点击
function handleFilterClick(e) {
    const tag = e.target;
    const category = tag.getAttribute('data-category');
    const verify = tag.getAttribute('data-verify');
    
    if (category) {
        toggleFilter('category', category, tag);
    } else if (verify) {
        toggleFilter('verify', verify, tag);
    }
    
    applyFilters();
}

// 切换筛选条件
function toggleFilter(type, value, element) {
    const filters = currentFilters[type];
    const index = filters.indexOf(value);
    
    if (index > -1) {
        filters.splice(index, 1);
        element.classList.remove('active');
    } else {
        filters.push(value);
        element.classList.add('active');
    }
}

// 应用筛选
function applyFilters() {
    filteredData = welfareData.filter(item => {
        // 搜索过滤
        if (currentFilters.search) {
            const searchTerms = [item.title, item.category, ...item.benefits, ...item.steps, ...item.verify];
            const searchContent = searchTerms.join(' ').toLowerCase();
            if (!searchContent.includes(currentFilters.search)) {
                return false;
            }
        }
        
        // 分类过滤
        if (currentFilters.category.length > 0 && !currentFilters.category.includes(item.category)) {
            return false;
        }
        
        // 验证方式过滤
        if (currentFilters.verify.length > 0) {
            const hasMatchingVerify = currentFilters.verify.some(filter => 
                item.verify.some(verify => verify.toLowerCase().includes(filter.toLowerCase()))
            );
            if (!hasMatchingVerify) {
                return false;
            }
        }
        
        return true;
    });
    
    currentPage = 1;
    welfareContainer.innerHTML = '';
    renderWelfareCards();
    updateTotalCount();
}

// 清除筛选
function clearFilters() {
    currentFilters = {
        category: [],
        verify: [],
        search: ''
    };
    
    // 重置UI
    document.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
    searchInput.value = '';
    
    filteredData = [...welfareData];
    currentPage = 1;
    welfareContainer.innerHTML = '';
    renderWelfareCards();
    updateTotalCount();
    hideFilterPanel();
}

// 加载更多
function loadMore() {
    currentPage++;
    renderWelfareCards();
    
    // 滚动到新加载的内容
    const newCards = welfareContainer.querySelectorAll('.welfare-card');
    const lastCard = newCards[newCards.length - 1];
    lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 更新总数显示
function updateTotalCount() {
    totalCount.textContent = filteredData.length;
}

// 获取分类slug
function getCategorySlug(category) {
    const slugs = {
        '开发工具': 'dev',
        '云服务': 'cloud',
        '设计工具': 'design',
        '学习平台': 'learn',
        'AI工具': 'ai',
        '其他优惠': 'other'
    };
    return slugs[category] || 'other';
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 性能优化：防抖搜索
const debouncedSearch = debounce(handleSearch, 300);

// 添加到搜索输入框
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);
