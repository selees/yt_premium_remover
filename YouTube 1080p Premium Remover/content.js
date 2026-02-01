const removePremiumOption = () => {
  // 유튜브 설정 메뉴 아이템들을 모두 가져옵니다.
  const menuItems = document.querySelectorAll('.ytp-menuitem');
  
  menuItems.forEach(item => {
    const text = item.textContent || "";
    // 'Premium' 또는 '프리미엄' 단어가 포함된 화질 옵션을 찾아 숨깁니다.
    if (text.includes("Premium") || text.includes("프리미엄")) {
      item.style.display = 'none';
    }
  });
};

// 페이지 변화를 감지하여 메뉴가 열릴 때마다 실행
const observer = new MutationObserver((mutations) => {
  removePremiumOption();
});

// body 요소의 변화를 관찰
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 초기 실행
removePremiumOption();