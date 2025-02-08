// 获取当前页面的 URL 或类名，判断是哪一页
const currentPage = window.location.pathname;

// 默认的背景图片
const mobileBgImageUrl = "url('/img/img_5.png')";
const desktopBgImageUrl = "url('/img/img_15.png')";

// 设置背景图片，只有在特定页面才会应用
if (currentPage === "/" || currentPage === "/index.html") { // 首页
  if (window.innerWidth < 768) {
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl}; position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
  } else {
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl}; position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
  }
} else if (/\/\d{4}\/\d{2}\/\d{2}\/[^/]+/.test(currentPage)) { // 文章页
  document.querySelector('#web_bg').setAttribute('style', `background-image: url('/img/img_15.png'); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
} else if (currentPage.startsWith("/archive") || currentPage.startsWith("/archives")) { // 归档页
  document.querySelector('#web_bg').setAttribute('style', `background-image: url('/img/default.png'); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
} else if (currentPage.startsWith("/category") || currentPage.startsWith("/categories")) { // 分类页
  document.querySelector('#web_bg').setAttribute('style', `background-image: url('/img/default.png'); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
} else if (currentPage.startsWith("/tag") || currentPage.startsWith("/tags")) { // 标签页
  document.querySelector('#web_bg').setAttribute('style', `background-image: url('/img/default.png'); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
} else if (currentPage.startsWith("/about")) { // 关于页
  document.querySelector('#web_bg').setAttribute('style', `background-image: url('/img/default.png'); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
} else {
  // 其他页面使用默认背景
  if (window.innerWidth < 768) {
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${mobileBgImageUrl}; position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
  } else {
    document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl}; position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover;`);
  }
}

// 设置每个页面的 Banner 背景图
if (currentPage === "/" || currentPage === "/index.html") { // 首页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("/img/img_14.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else if (/\/\d{4}\/\d{2}\/\d{2}\/[^/]+/.test(currentPage)) { // 文章页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("/img/img_18.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else if (currentPage === "/archive" || currentPage.includes("/archives")) { // 归档页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%), url("/img/img_12.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else if (currentPage === "/category" || currentPage.includes("/categories")) { // 分类页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%), url("/img/default.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else if (currentPage === "/tag" || currentPage.includes("/tags")) { // 标签页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%), url("/img/default.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else if (currentPage === "/about") { // 关于页
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%), url("/img/default.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
} else {
  // 其他页面的 Banner 可以使用默认图
  document.querySelector("#banner").setAttribute('style', 'background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%), url("/img/default.png"); position: fixed; width: 100%; height: 100%; z-index: -1; background-size: cover; background-position: center; top: 0;');
}

// 设置 banner 的 mask 背景颜色透明
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');

// 确保页面背景和 Banner 背景在同一层级
document.querySelector('#web_bg').style.zIndex = '-1'; // 页面背景和 Banner 背景在同一层级
document.querySelector('#banner').style.zIndex = '-1'; // Banner 背景在同一层级

// 监听滚动事件，实现Banner背景渐变透明
window.addEventListener('scroll', () => {
  const banner = document.querySelector('#banner');
  const scrollPosition = window.scrollY;
  const bannerHeight = window.innerHeight; // Banner的高度为视口高度

  // 计算透明度
  let opacity = 1 - (scrollPosition / bannerHeight) * 2; // 增加透明度变化速度
  opacity = Math.max(opacity, 0); // 确保透明度不会小于0

  // 设置Banner背景的透明度
  banner.style.opacity = opacity;
});
