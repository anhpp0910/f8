const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $(".tabs .line");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});
