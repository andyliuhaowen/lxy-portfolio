class GalleryItem {
  title?: string;
  description?: string;
  image: string;

  constructor(image: string, title?: string, description?: string) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export default GalleryItem;
