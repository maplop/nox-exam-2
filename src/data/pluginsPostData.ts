export interface PostProps {
  img: string;
  link: string;
  title?: string;
  text: string;
}

export const pluginsPostData: PostProps[] = [
  {
    img: "/post/plugins/img-1.png",
    link: "Pexels",
    title: "- Free Images",
    text: "Add completely free images to your designs. Images are free for both personal and commercial use.",
  },
  {
    img: "/post/plugins/img-2.png",
    link: "Unsplash",
    title: "- Free Images",
    text: "Insert beautiful images from Unsplash straight into your designs. Use freely for both commercial and personal projects.",
  },
  {
    img: "/post/plugins/img-3.png",
    link: "Icons8 Background Remover",
    title: "",
    text: "Remove background from one or many images at once. Preserves original image size and quality. No limits on the number of images.",
  },
  {
    img: "/post/plugins/img-4.png",
    link: "Content Reel",
    title: "",
    text: "Design layouts more efficiently by pulling text strings, images, and icons from one palette. Content Reel lets you create custom content.",
  },
  {
    img: "/post/plugins/img-5.png",
    link: "Lorem Ipsum",
    title: "",
    text: "Generate  ‘Lorem ipsum’ to fill you text layers with dummy text. ‘Auto-generate’ will automatically fill the selected layers.",
  },
  {
    img: "/post/plugins/img-6.png",
    link: "SkewDat",
    title: "- Free Images",
    text: "You can skew anything & everything in sight within the comfort of everyone's favorite design program, ehm ehm Figma.",
  },
];
