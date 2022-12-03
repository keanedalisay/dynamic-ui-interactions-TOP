class SliderTemp {
  constructor() {
    this.imgWidth = 0;
    this.totalImgCount = 0;
    this.totalImgWidth = 0;
  }

  getImgWidth(img) {
    this.imgWidth = img.clientWidth;
  }

  getTotalImgCount(imgs) {
    let totalImgCount = 0;
    imgs.forEach((img) => {
      this.getImgWidth(img);
      totalImgCount += 1;
    });
    this.totalImgCount = totalImgCount;
  }
}

export default SliderTemp;
