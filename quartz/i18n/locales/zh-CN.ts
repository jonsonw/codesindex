import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "无题",
    description: "无描述",
  },
  components: {
    callout: {
      note: "规范",
      abstract: "摘要",
      info: "提示",
      todo: "待办",
      tip: "提示",
      success: "成功",
      question: "问题",
      warning: "警告",
      failure: "失败",
      danger: "危险",
      bug: "错误",
      example: "示例",
      quote: "引用",
    },
    backlinks: {
      title: "被引用",
      noBacklinksFound: "无法找到被引用的规范",
    },
    themeToggle: {
      lightMode: "亮色模式",
      darkMode: "暗色模式",
    },
    explorer: {
      title: "目录",
    },
    footer: {
      createdWith: "Created with",
    },
    graph: {
      title: "索引图(滚轮缩放，左键拖动)",
    },
    recentNotes: {
      title: "最近阅读的规范",
      seeRemainingMore: ({ remaining }) => `查看更多${remaining}的规范 →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `包含${targetSlug}`,
      linkToOriginal: "指向原始规范的引用",
    },
    search: {
      title: "搜索",
      searchBarPlaceholder: "搜索规范",
    },
    tableOfContents: {
      title: "目录",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes}分钟阅读`,
    },
  },
  pages: {
    rss: {
      recentNotes: "最近阅读的规范",
      lastFewNotes: ({ count }) => `最近的${count}条规范`,
    },
    error: {
      title: "无法找到",
      notFound: "私有内容或内容不存在。",
      home: "返回首页",
    },
    folderContent: {
      folder: "文件夹",
      itemsUnderFolder: ({ count }) => `此文件夹下有${count}条规范。`,
    },
    tagContent: {
      tag: "标签",
      tagIndex: "标签索引",
      itemsUnderTag: ({ count }) => `此标签下有${count}条规范。`,
      showingFirst: ({ count }) => `显示前${count}个标签。`,
      totalTags: ({ count }) => `总共有${count}个标签。`,
    },
  },
} as const satisfies Translation
