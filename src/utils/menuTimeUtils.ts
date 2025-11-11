export const getCurrentMenuType = (): 'breakfast' | 'lunch' => {
  const currentHour = new Date().getHours();
  return currentHour >= 7 && currentHour < 12 ? 'breakfast' : 'lunch';
};

export const getAvailableCategories = (): string[] => {
  const currentMenuType = getCurrentMenuType();
  
  if (currentMenuType === 'breakfast') {
    return ['breakfast', 'breakfast-specials', 'breakfast-box', 'addons'];
  } else {
    return ['lunch', 'lunch-specials', 'lunch-box', 'addons'];
  }
};

export const isBreakfastTime = (): boolean => {
  return getCurrentMenuType() === 'breakfast';
};

export const isLunchTime = (): boolean => {
  return getCurrentMenuType() === 'lunch';
};