// Fallback images in case local images are missing
export const FALLBACK_IMAGES = {
  breakfast: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400',
  lunch: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
  specials: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
  drinks: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
  default: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
};

export const getFallbackImage = (category: string): string => {
  return FALLBACK_IMAGES[category as keyof typeof FALLBACK_IMAGES] || FALLBACK_IMAGES.default;
};

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement | HTMLDivElement>, category: string) => {
  const target = event.target as HTMLImageElement | HTMLDivElement;
  
  if ('src' in target) {
    target.src = getFallbackImage(category);
  } else if (target.style.backgroundImage) {
    target.style.backgroundImage = `url(${getFallbackImage(category)})`;
  }
};