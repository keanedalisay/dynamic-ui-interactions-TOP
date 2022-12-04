class SliderTemp {
  constructor() {
    this.imgWidth = 0;
    this.totalImgCount = 0;
    this.totalImgWidth = 0;
    this.currentImgIndex = 1;
    this.currentLeftMargin = 0;

    this.sliderTimeout = 0;
    this.sliderInterval = 0;
  }

  getImgWidth(img) {
    this.imgWidth = img.clientWidth;
  }

  getTotalImgWidth() {
    this.totalImgWidth = this.imgWidth * this.totalImgCount;
  }

  getTotalImgCount(imgs) {
    let totalImgCount = 0;
    imgs.forEach((img) => {
      this.getImgWidth(img);
      totalImgCount += 1;
    });
    this.totalImgCount = totalImgCount;
  }

  getCurrentImgIndex(imgs) {
    let imgIndex = 0;
    imgs.forEach((img) => {
      if (img.dataset.imgactive) {
        this.currentImgIndex = imgIndex;
        return;
      }
      imgIndex += 1;
    });
  }

  getCurrentLeftMargin() {
    this.currentLeftMargin = this.imgWidth * this.currentImgIndex;
  }

  clearSliderTimeout() {
    clearTimeout(this.sliderTimeout);
  }

  setSliderInterval(func, interval) {
    this.sliderInterval = setInterval(func, interval);
  }

  clearSliderInterval() {
    clearInterval(this.sliderInterval);
  }
}
export default SliderTemp;
