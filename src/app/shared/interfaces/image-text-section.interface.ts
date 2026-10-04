export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
}

export interface ImageTextSectionData {
  title: string;
  description: string;
  image: ResponsiveImage;
}
