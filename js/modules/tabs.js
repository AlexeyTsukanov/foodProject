
function tabs(tabsSelector, tabsPerrent, tabItems, TabActiveClass){
/**
   * 
   * ----------- Tabs ------------------------
   */
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsPerrent),
        tabsParent = document.querySelector(tabItems);

  function hideTubContent() {
    tabsContent.forEach(item => {
      item.classList.remove('show');
      item.classList.add('hide');
    });
    tabs.forEach(tab => {
      tab.classList.remove(TabActiveClass);
    });
  }

  function showTubContent(i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(TabActiveClass);
  }

  hideTubContent();
  showTubContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTubContent();
          showTubContent(i);
        }
      });
    }
  });
}

export default tabs;


