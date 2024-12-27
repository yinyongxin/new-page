export const BgImageList = [
  "https://img.win3000.com/m00/88/f4/4bfb021fbd4c86f1b563f9d837297897.jpg",
];

export const BackgroundClassNameList = [
  "background-circle",
  "background-blue-line",
] as const;

export type BackgroundClassName = (typeof BackgroundClassNameList)[number];
