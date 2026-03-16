/**
 * 文章数据配置文件
 * 
 * 使用说明：
 * 1. 每次发布新文章后，在对应分类数组中添加一条记录
 * 2. 复制微信公众号文章链接填入 url 字段
 * 3. 文章会按日期倒序显示（最新的在前面）
 * 
 * 分类说明：
 * - thoughts: 随想杂谈
 * - literature: 文学常识
 * - present: 活在当下
 */

const articles = {
  // 随想杂谈
  thoughts: [
    {
      id: 1,
      title: "生活中的小确幸",
      summary: "记录那些平凡日子里的温暖瞬间...",
      date: "2026-03-15",
      url: "https://mp.weixin.qq.com/s/xxxxx1"
    },
    {
      id: 2,
      title: "深夜随笔：关于时间的思考",
      summary: "时间是最公平的，每个人每天都只有24小时...",
      date: "2026-03-10",
      url: "https://mp.weixin.qq.com/s/xxxxx2"
    },
    {
      id: 3,
      title: "周末碎碎念",
      summary: "难得的周末，却不知道该做些什么...",
      date: "2026-03-08",
      url: "https://mp.weixin.qq.com/s/xxxxx3"
    }
  ],

  // 文学常识
  literature: [
    {
      id: 1,
      title: "唐诗三百首精选：春夜喜雨",
      summary: "杜甫的这首诗写出了春雨的特点和诗人的喜悦...",
      date: "2026-03-14",
      url: "https://mp.weixin.qq.com/s/xxxxx4"
    },
    {
      id: 2,
      title: "红楼梦中的诗词鉴赏",
      summary: "品读金陵十二钗的判词，领悟人生百态...",
      date: "2026-03-09",
      url: "https://mp.weixin.qq.com/s/xxxxx5"
    },
    {
      id: 3,
      title: "古文观止：滕王阁序赏析",
      summary: "王勃的千古名篇，骈文的巅峰之作...",
      date: "2026-03-05",
      url: "https://mp.weixin.qq.com/s/xxxxx6"
    }
  ],

  // 活在当下
  present: [
    {
      id: 1,
      title: "正念冥想入门指南",
      summary: "如何通过冥想找回内心的平静...",
      date: "2026-03-13",
      url: "https://mp.weixin.qq.com/s/xxxxx7"
    },
    {
      id: 2,
      title: "断舍离：清理生活的艺术",
      summary: "学会放下，才能更好地拥有...",
      date: "2026-03-07",
      url: "https://mp.weixin.qq.com/s/xxxxx8"
    },
    {
      id: 3,
      title: "慢生活的100种方式",
      summary: "在快节奏的时代，我们如何慢下来...",
      date: "2026-03-01",
      url: "https://mp.weixin.qq.com/s/xxxxx9"
    }
  ]
};

export default articles;
