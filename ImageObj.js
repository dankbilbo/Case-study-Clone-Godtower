class image{
    constructor(src, x, y, imgWidth, imgHeight) {
        this.src = src;
        this.x = x;
        this.y = y;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
    }
    getSrc(){
        return this.src;
    }
    getX(x){
        return this.x;
    }
    getY(y){
        return this.y;
    }
    getImgWidth(width){
        return this.imgWidth;
    }
    getImgHeight(height){
        return this.imgHeight;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setImgWidth(width){
        this.imgWidth = width;
    }
    setImgHeight(height){
        this.imgHeight = height;
    }
}