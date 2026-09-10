/* ============================================================
 * 政OK 作品集 v4 · 交互脚本
 * 职责：渲染精选/系列轨道/影像 → 开场幕布 → 滚动进场
 *       → 卡片辉光跟随鼠标 → 轨道拖拽滑动
 * ============================================================ */

(function () {
  "use strict";
  var W = window.WORKS || {};
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- 渲染：精选项目 ---------- */
  function renderFeatured() {
    var box = $("#featList");
    if (!box || !W.featured) return;
    box.innerHTML = W.featured.map(function (it) {
      return '' +
        '<article class="feat-card stagger">' +
          '<div class="feat-media">' +
            '<span class="feat-num">' + esc(it.num) + '</span>' +
            '<img loading="lazy" src="' + esc(it.img) + '" alt="' + esc(it.title) + '">' +
          '</div>' +
          '<div class="feat-body">' +
            '<p class="feat-en">' + esc(it.en) + '</p>' +
            '<h3 class="feat-title">' + esc(it.title) + '</h3>' +
            '<p class="feat-desc">' + esc(it.desc) + '</p>' +
            '<a class="feat-link" href="' + esc(it.jump || "#works") + '">进入相关系列 →</a>' +
          '</div>' +
        '</article>';
    }).join("");
  }

  /* ---------- 渲染：作品系列横向轨道 ---------- */
  function renderRails() {
    var box = $("#railList");
    if (!box || !W.series) return;
    box.innerHTML = W.series.map(function (s) {
      var cards = s.items.map(function (it) {
        return '' +
          '<figure class="work-card">' +
            '<img loading="lazy" src="' + esc(it.f) + '" alt="' + esc(it.name) + '">' +
            '<figcaption class="work-meta">' +
              '<span class="work-name">' + esc(it.name) + '</span>' +
              '<span class="work-tag">' + esc(it.tag) + '</span>' +
            '</figcaption>' +
          '</figure>';
      }).join("");
      return '' +
        '<div class="rail" id="' + esc(s.id) + '">' +
          '<div class="rail-head">' +
            '<h3 class="rail-cn">' + esc(s.cn) + '</h3>' +
            '<span class="rail-en">' + esc(s.en) + '</span>' +
            '<span class="rail-count">' + s.items.length + ' 件</span>' +
            '<span class="rail-note">' + esc(s.note) + '</span>' +
          '</div>' +
          '<div class="rail-track">' + cards + '</div>' +
        '</div>';
    }).join("");
  }

  /* ---------- 渲染：影像 ---------- */
  function filmCardHTML(v, lead) {
    var frame = lead ? "film-frame" : "film-frame-mini";
    var play = lead ? "film-play" : "mini-play";
    var btn = lead ? "film-play-btn" : "mini-play-btn";
    return '' +
      '<div class="' + frame + '">' +
        '<video preload="none" playsinline controls ' +
          'poster="' + esc(v.poster) + '" src="' + esc(v.f) + '"></video>' +
        '<button class="' + play + '" aria-label="播放 ' + esc(v.name) + '">' +
          '<span class="' + btn + '"></span>' +
        '</button>' +
      '</div>';
  }

  function renderFilms() {
    var box = $("#filmBox");
    if (!box || !W.films) return;
    var lead = null, rest = [];
    W.films.forEach(function (v) { (v.lead && !lead ? lead = v : rest.push(v)); });

    var html = "";
    if (lead) {
      html += '<div class="film-lead stagger">' +
        filmCardHTML(lead, true) +
        '<div class="film-lead-cap">' +
          '<span class="film-name">' + esc(lead.name) + '</span>' +
          '<span class="film-dur">' + esc(lead.dur) + '</span>' +
          '<span class="film-lead-tag">主打 · LEAD FILM</span>' +
        '</div></div>';
    }
    html += '<div class="film-grid">' + rest.map(function (v) {
      return '<div class="film-card stagger">' +
        filmCardHTML(v, false) +
        '<div class="film-card-cap">' +
          '<span class="film-name">' + esc(v.name) + '</span>' +
          '<span class="film-dur">' + esc(v.dur) + '</span>' +
        '</div></div>';
    }).join("") + "</div>";
    box.innerHTML = html;
  }

  /* ---------- 视频播放（点封面起播，同一时间只播一支）---------- */
  function bindFilms() {
    var all = $$("video");
    $$(".film-frame, .film-card").forEach(function (card) {
      var video = $("video", card);
      var cover = $(".film-play, .mini-play", card);
      if (!video || !cover) return;
      cover.addEventListener("click", function () {
        all.forEach(function (v) { if (v !== video) { v.pause(); } });
        $$(".film-frame, .film-card").forEach(function (c) { if (c !== card) c.classList.remove("playing"); });
        video.play();
        card.classList.add("playing");
      });
      video.addEventListener("pause", function () { card.classList.remove("playing"); });
    });
  }

  /* ---------- 开场幕布 ---------- */
  function curtain() {
    var c = $("#curtain");
    if (!c) { document.body.classList.add("loaded"); return; }
    window.setTimeout(function () {
      c.classList.add("open");
      document.body.classList.add("loaded");
      window.setTimeout(function () { c.style.display = "none"; }, 1500);
    }, 750);
  }

  /* ---------- 滚动进场（模块标题 + 卡片 stagger）---------- */
  function observe() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".sec, .rail").forEach(function (el) { io.observe(el); });
  }

  /* ---------- 卡片辉光跟随鼠标 ---------- */
  function spotlight() {
    $$(".feat-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ---------- 轨道拖拽滑动 ---------- */
  function dragRails() {
    $$(".rail-track").forEach(function (track) {
      var down = false, startX = 0, startLeft = 0, moved = false;
      track.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "touch") return; /* 触屏用原生滑动 */
        down = true; moved = false;
        startX = e.clientX; startLeft = track.scrollLeft;
        track.classList.add("dragging");
      });
      window.addEventListener("pointermove", function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        track.scrollLeft = startLeft - dx;
      });
      window.addEventListener("pointerup", function () {
        down = false; track.classList.remove("dragging");
      });
      track.addEventListener("click", function (e) { if (moved) e.preventDefault(); }, true);
    });
  }

  /* ---------- 启动 ---------- */
  function init() {
    renderFeatured();
    renderRails();
    renderFilms();
    bindFilms();
    observe();
    spotlight();
    dragRails();
    curtain();
    /* 校验：作品数量写进 console，防漏图 */
    var n = 0;
    (W.series || []).forEach(function (s) { n += s.items.length; });
    console.log("[政OK] 系列 " + (W.series || []).length + " 个，作品 " + n + " 件，影像 " + (W.films || []).length + " 支");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
