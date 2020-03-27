class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
    div.style.cssText = param;
    // div.style.height = this.height + 'px';
    // div.style.width = this.width + 'px';
    // div.style.backgroundColor = this.bg;
    // div.style.fontSize = this.fontSize + 'px';
    // div.style.textAlign = this.textAlign;
  }
}

const newDiv = new Options(50, 100, 'red', 25, 'center');
newDiv.createDiv();