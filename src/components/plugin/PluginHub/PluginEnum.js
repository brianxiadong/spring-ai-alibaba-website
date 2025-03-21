export const pluginEmums = [
  {
    img: "https://img.alicdn.com/imgextra/i1/O1CN01C4NLUr1qSJ1GED2kW_!!6000000005494-55-tps-48-48.svg",
    class: "Example",
    childrenClass: "Playground",
    title: "Spring AI Alibaba Playground",
    desc: "一个包含互动对话 UI 的综合示例，体验对话记忆、工具调用、图片生成等。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-baidusearch",
    example: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-baidusearch",
    rely: "none",
  },
  {
    img: "https://img.alicdn.com/imgextra/i1/O1CN01C4NLUr1qSJ1GED2kW_!!6000000005494-55-tps-48-48.svg",
    class: "Tool Calling",
    childrenClass: "搜索",
    title: "百度搜索",
    desc: "网页搜索及获取搜索结果。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-baidusearch",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-baidusearch</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "搜索",
    title: "微软Bing搜索",
    desc: "网页搜索及获取搜索结果。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-bingsearch",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-bingsearch</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "搜索",
    title: "SERP API",
    desc: "搜索引擎结果页面（SERP）的抓取与分析。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-serpapi",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-serpapi</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "阿里翻译",
    desc: "阿里巴巴翻译服务，支持多语言互译。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-alitranslate",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-alitranslate</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "谷歌翻译",
    desc: "Google Translate API，提供高质量的翻译服务。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-googletranslate",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-googletranslate</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "微软翻译",
    desc: "调用微软翻译API，支持多语言翻译服务。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-googletranslate",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-googletranslate</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "百度翻译",
    desc: "提供中文及其他语言之间的翻译功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-baidutranslate",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-baidutranslate</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "有道翻译",
    desc: "支持多语言之间的翻译服务。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-youdaotranslate",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-youdaotranslate</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "飞书",
    desc: "Lark办公套件，进行消息发送、文件管理等操作。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-larksuite",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-larksuite</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "语雀",
    desc: "支持文档创建、管理等操作。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-yuque",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-yuque</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "钉钉",
    desc: "支持消息发送、企业内部通讯等功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-dingtalk",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-dingtalk</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生产效率",
    title: "github",
    desc: "集成 GitHub API，支持代码仓库查询、问题跟踪等功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-githubtoolkit",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-githubtoolkit</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "网页浏览",
    title: "Crawler爬虫",
    desc: "爬虫工具，支持网页内容抓取和数据采集。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-crawler",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-crawler</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "网页浏览",
    title: "新浪新闻",
    desc: "新闻搜索、获取最新新闻等功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-sinanews",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-sinanews</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "网页浏览",
    title: "今日头条",
    desc: "获取新闻数据和内容。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-toutiaonews",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-toutiaonews</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生活服务",
    title: "高德地图",
    desc: "地理位置查询、路线规划等功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-amap",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-amap</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生活服务",
    title: "百度地图",
    desc: "地理位置查询、路线规划等功能。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-baidumap",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-baidumap</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "生活服务",
    title: "天气预报",
    desc: "天气查询功能，获取实时天气预报信息。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-weather",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-weather</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "其他",
    title: "正则表达式",
    desc: "用于文本模式匹配和数据提取。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-regex",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-regex</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "其他",
    title: "时间工具",
    desc: "提供当前时间和日期的获取功能，支持多种格式。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-time",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-time</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Tool Calling",
    childrenClass: "其他",
    title: "JSON解析",
    desc: "提供JSON数据处理功能，用于JSON数据的解析、修改等操作。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/tool-calls/spring-ai-alibaba-starter-tool-calling-jsonprocessor",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-starter-tool-calling-jsonprocessor</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "Tair",
    desc: "阿里云内存数据结构存储，支持高效的向量存储与查询。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-alibaba-tair-store",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-tair-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "AnalyticDB",
    desc: "阿里云AnalyticDB提供面向结构化数据、向量、全文、图片/视频统一的存储与处理引擎，可实现多模态的检索与分析。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-alibaba-analyticdb-store",
    example: "",
    rely: "<dependency>\n  <groupId>com.alibaba.cloud.ai</groupId>\n  <artifactId>spring-ai-alibaba-analyticdb-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "OpenSearch",
    desc: "阿里云搜索和分析引擎，支持全文搜索和实时分析。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-opensearch-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-opensearch-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "Redis",
    desc: "内存数据结构存储，支持高效的向量存储与查询。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-redis-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-redis-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "ElasticSearch",
    desc: "分布式搜索和分析引擎，专注于全文搜索和数据索引。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-elasticsearch-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-elasticsearch-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "mongodb-atlas",
    desc: "文档存储，支持多维数据和灵活查询。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-mongodb-atlas-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-mongodb-atlas-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "neo4j",
    desc: "图数据库，支持复杂的关系查询和图形数据建模。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-neo4j-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-neo4j-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "cassandra",
    desc: "可用性、分布式数据库，适用于大规模数据存储。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-cassandra-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-cassandra-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "chroma",
    desc: "开源向量数据库，支持高效向量存储与查询。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-chroma-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-chroma-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "oracle",
    desc: "强大的关系型数据库，适合事务性和分析型应用。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-oracle-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-oracle-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "coherence",
    desc: "内存数据网格，优化分布式数据处理和缓存。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-coherence-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-coherence-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "pgvector",
    desc: "PostgreSQL 插件，支持向量数据的存储和操作。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-pgvector-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-pgvector-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "pinecone",
    desc: "PostgreSQL 向量数据库，提供高效的向量检索和存储能力。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-pinecone-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-pinecone-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "gemfire",
    desc: "高性能数据缓存与存储，适用于实时分析应用。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-gemfire-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-gemfire-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "milvus",
    desc: "开源向量数据库，针对高效的向量相似度搜索。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-milvus-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-milvus-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "qdrant",
    desc: "专注于高效的向量搜索，适用于AI和机器学习。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-qdrant-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-qdrant-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "hanadb",
    desc: "高性能的内存数据库，专为实时数据访问设计。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-hanadb-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-hanadb-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "mariadb",
    desc: "开源关系型数据库，轻量且易于扩展。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-mariadb-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-mariadb-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
  {
    class: "Vectore Store",
    childrenClass: "全部",
    title: "weaviate",
    desc: "支持自动化的数据建模，专为AI应用优化。",
    link: "https://github.com/alibaba/spring-ai-alibaba/tree/main/community/vector-stores/spring-ai-weaviate-store",
    example: "",
    rely: "<dependency>\n  <groupId>org.springframework.ai</groupId>\n  <artifactId>spring-ai-weaviate-store</artifactId>\n  <version>${version}</version>\n</dependency>",
  },
];


