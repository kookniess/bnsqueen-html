// 临时维护页：所有请求返回 503。恢复网站时删除本文件（git revert）或在 Cloudflare Pages 回滚部署。
const HTML = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>网站维护中</title>
<style>
html,body{margin:0;height:100%}
body{display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;background:#faf9f7;color:#37352f;padding:16px;box-sizing:border-box}
.box{text-align:center;max-width:420px}
h1{font-size:24px;margin:0 0 12px}
p{font-size:16px;line-height:1.7;color:#6b6a66;margin:0}
@media (prefers-color-scheme:dark){body{background:#191919;color:#e6e6e4}p{color:#a5a5a2}}
</style></head>
<body><div class="box"><h1>网站维护中</h1><p>我们正在进行短暂维护，预计 1–2 小时后恢复。<br>请稍后再来，感谢理解。</p></div></body></html>`;

export default {
  async fetch() {
    return new Response(HTML, {
      status: 503,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "retry-after": "7200",
      },
    });
  },
};
