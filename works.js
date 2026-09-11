/* ============================================================
 * 政OK 作品集 · 作品数据（v4）
 * ------------------------------------------------------------
 * 怎么加新作品（不用碰 HTML）：
 * 1) 图片放进 assets/img/，视频放进 assets/video/
 * 2) 在对应系列里抄一行：
 *      { f: "assets/img/文件名.jpg", name: "作品名", tag: "标签" }
 * 3) 保存，刷新页面就有了。
 * ============================================================ */

window.WORKS = {

  /* ---- 精选项目（首页大卡，01/02/03）----
   * img  大卡配图   num 编号   title 名称   en 英文注   desc 一句话介绍   jump 跳转到哪个系列 */
  featured: [
    {
      num: "01", title: "巨月 · 东方奇幻", en: "ORIENTAL FANTASY",
      img: "assets/img/hero-moon.jpg",
      desc: "云海之上，巨月当空。东方奇幻世界观的场景概念——白衣人立于城头，望一整座云中之城。",
      jump: "#s-stills"
    },
    {
      num: "02", title: "雨夜盘山赛道", en: "NEON RACING",
      img: "assets/img/scene-raintrack.jpg",
      desc: "霓虹雨夜里的赛博竞速世界观：盘山赛道、终点计时塔、小舰艇内景，一整套场景概念。",
      jump: "#s-scenes"
    },
    {
      num: "03", title: "空间站设定集", en: "SPACE STATION",
      img: "assets/img/arch-spacestation.jpg",
      desc: "硬科幻空间站的完整视觉设定：外观、内部结构、逐层空间，一共十一张设定图。",
      jump: "#s-arch"
    }
  ],

  /* ---- 作品系列（横向轨道，全部作品都在这里）---- */
  series: [

    /* 1 · 人物剧照（含「人物×环境」合成的静夜故梦）*/
    { id: "s-stills", cn: "人物剧照", en: "CHARACTER STILLS", note: "电影感实拍系 · 定妆与剧照", items: [
      { f: "assets/img/still-linwan.jpg",  name: "林晚 · 青蓝科幻舱内", tag: "主打" },
      { f: "assets/img/still-suye.jpg",    name: "苏野定妆照",          tag: "剧照" },
      { f: "assets/img/still-k.jpg",       name: "K · 苏野对手",        tag: "剧照" },
      { f: "assets/img/still-01.jpg",      name: "人物剧照 01",         tag: "剧照" },
      { f: "assets/img/still-02.jpg",      name: "人物剧照 02",         tag: "剧照" },
      { f: "assets/img/still-03.jpg",      name: "人物剧照 03",         tag: "剧照" },
      { f: "assets/img/still-04b.jpg",     name: "人物剧照 04",         tag: "剧照" },
      { f: "assets/img/hero-moon.jpg",     name: "静夜故梦",            tag: "人物×环境" }
    ]},

    /* 2 · CG 角色 · 潮玩（写实 3D 渲染 · 机能潮玩 · 广告素材）*/
    { id: "s-cg", cn: "CG 角色 · 潮玩", en: "CG & ART TOY", note: "写实 3D 渲染 · 机能潮玩 · 赛博机能", items: [
      { f: "assets/img/cg-toy-01.jpg",     name: "机能少女 · 红色潮玩",   tag: "潮玩" },
      { f: "assets/img/cg-toy-02.jpg",     name: "银发少年 · 红花装饰",   tag: "潮玩" },
      { f: "assets/img/cg-still-01.jpg",   name: "写实少女 · 米色卫衣",   tag: "CG角色" },
      { f: "assets/img/still-zhouzhou.jpg",name: "舟舟 · 赛博都市夜景",   tag: "剧照" }
    ]},

    /* 3 · 人物设计 */
    { id: "s-chars", cn: "人物设计", en: "CHARACTER DESIGN", note: "角色设定 · 三视图 · 表情", items: [
      { f: "assets/img/char-vovo.jpg",         name: "女角色 vovo",        tag: "角色设计" },
      { f: "assets/img/char-vovo-3view.jpg",   name: "VOVO · 三视图",      tag: "三视图" },
      { f: "assets/img/char-hoho.jpg",         name: "男角色 HOHO",        tag: "角色设计" },
      { f: "assets/img/char-hoho-3view.jpg",   name: "HOHO · 三视图",      tag: "三视图" },
      { f: "assets/img/char-expressions.jpg",  name: "林晚 · 表情九宫格",  tag: "表情" },
      { f: "assets/img/char-sheet.jpg",        name: "多角色设定图",       tag: "设定集" },
      { f: "assets/img/char-zhoushenxing.jpg", name: "周慎行",             tag: "角色设计" },
      { f: "assets/img/char-zhouchi.jpg",      name: "周迟",               tag: "角色设计" },
      { f: "assets/img/char-killer.jpg",       name: "杀手",               tag: "角色设计" },
      { f: "assets/img/char-linchen.jpg",      name: "林晨",               tag: "角色设计" },
      { f: "assets/img/char-cats.jpg",         name: "林晨 × 猫和老鼠",    tag: "破次元" },
      { f: "assets/img/char-pikachu.jpg",      name: "林晨 × 皮卡丘",      tag: "破次元" },
      { f: "assets/img/char-concept.jpg",      name: "人物概念 · 练习",    tag: "练习" }
    ]},

    /* 3 · 场景概念 */
    { id: "s-scenes", cn: "场景概念", en: "SCENE CONCEPT", note: "赛博竞速世界观", items: [
      { f: "assets/img/scene-raintrack.jpg", name: "雨夜盘山赛道",   tag: "主打" },
      { f: "assets/img/scene-tower.jpg",     name: "终点直道·计时塔", tag: "场景" },
      { f: "assets/img/scene-boat.jpg",      name: "小舰艇内景",     tag: "场景" },
      { f: "assets/img/scene-boat-top.jpg",  name: "小舰艇 · 俯视图", tag: "场景" },
      { f: "assets/img/scene-cabin.jpg",     name: "小艇舱内",       tag: "场景" },
      { f: "assets/img/scene-gen.jpg",       name: "场景概念 · 生成稿", tag: "概念稿" }
    ]},

    /* 4 · 物品设计 */
    { id: "s-props", cn: "物品设计", en: "PROP DESIGN", note: "角色视觉锚点道具", items: [
      { f: "assets/img/prop-vovo.jpg", name: "VOVO · 视觉锚点道具", tag: "道具" },
      { f: "assets/img/prop-hoho.jpg", name: "HOHO · 视觉锚点道具", tag: "道具" }
    ]},

    /* 5 · 空间建筑 */
    { id: "s-arch", cn: "空间建筑", en: "SPACE & ARCHITECTURE", note: "硬科幻空间站设定", items: [
      { f: "assets/img/arch-spacestation.jpg", name: "空间站 · 主图",          tag: "概念稿" },
      { f: "assets/img/arch-02.jpg",           name: "空间站 · 设定续",        tag: "概念稿" },
      { f: "assets/img/arch-int-002.jpg",      name: "内部多角度 · 02",        tag: "设定稿" },
      { f: "assets/img/arch-int-003.jpg",      name: "一层内部 · 03",          tag: "设定稿" },
      { f: "assets/img/arch-int-005.jpg",      name: "一层内部 · 05",          tag: "设定稿" },
      { f: "assets/img/arch-int-006.jpg",      name: "二层空间 · 06",          tag: "设定稿" },
      { f: "assets/img/arch-gen-1.jpg",        name: "空间概念 · 生成稿 01",   tag: "概念稿" },
      { f: "assets/img/arch-gen-2.jpg",        name: "空间概念 · 生成稿 02",   tag: "概念稿" },
      { f: "assets/img/arch-prev-1.jpg",       name: "空间概念 · 方案 01",     tag: "概念稿" },
      { f: "assets/img/arch-prev-2.jpg",       name: "空间概念 · 方案 02",     tag: "概念稿" },
      { f: "assets/img/arch-prev-3.jpg",       name: "空间概念 · 方案 03",     tag: "概念稿" }
    ]},

    /* 6 · 艺术插画 */
    { id: "s-art", cn: "艺术插画", en: "ART & ILLUSTRATION", note: "治愈绘本系", items: [
      { f: "assets/img/art-bunny.jpg", name: "兔耳少女 · 治愈绘本", tag: "插画" }
    ]}
  ],

  /* ---- 影像 demo ----
   * lead: true = 主打大屏；poster 是封面帧；dur 时长 */
  films: [
    { f: "assets/video/video-06.mp4", poster: "assets/img/poster-06.jpg", name: "雨夜街头 · 写实空镜短片",      dur: "00:30" },
    { f: "assets/video/video-05.mp4", poster: "assets/img/poster-05.jpg", name: "夜色取景 · REC 完整版", dur: "02:03", lead: true },
    { f: "assets/video/video-03.mp4", poster: "assets/img/poster-03.jpg", name: "剧情对话 · 写实短片", dur: "00:30" },
    { f: "assets/video/video-02.mp4", poster: "assets/img/poster-02.jpg", name: "少年与龙 · CG 奇幻",   dur: "00:30" },
    { f: "assets/video/video-04.mp4", poster: "assets/img/poster-04.jpg", name: "白昼特写 · 人物情绪", dur: "00:30" },
    { f: "assets/video/video-01.mp4", poster: "assets/img/poster-01.jpg", name: "夜色取景 · REC demo", dur: "00:16" }
  ],

  /* ---- 首屏背景视频 ---- */
  heroVideo: "assets/video/video-01.mp4"
};
