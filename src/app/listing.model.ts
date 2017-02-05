export class Listing {
  public id: string;
  public productTitle : string;
  public productSubTitle : string;
  public productType : string;
  public productPrice : number;
  public productDescription : string;
  public productCondition : string;
  public sku : string;
  public location : string;
  public image1Path : string;
  public sold : boolean;

  constructor(productTitle : string,
              productSubTitle : string,
              productType: string,
              productPrice : number,
              productDescription : string,
              productCondition : string,
              sku : string,
              location : string,
              image_1_path : string){

    this.id = "test";
    this.productTitle = productTitle;
    this.productSubTitle = productSubTitle;
    this.productType = productType;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.productCondition = productCondition;
    this.sku = sku;
    this.location = location;
    this.image1Path = image_1_path;
    this.sold = false;

  }

  //Getters And Setters

  public getProductTitle(): string {
    return this.productTitle;
  }

  public setProductTitle(value: string) {
    this.productTitle = value;
  }


  public getID(): string {
    return this.id;
  }

  public setID(value: string) {
    this.id = value;
  }

  public getProductSubTitle(): string {
    return this.productSubTitle;
  }

  public setProductSubTitle(value: string) {
    this.productSubTitle = value;
  }

  public getProductType(): string {
    return this.productType;
  }

  public setProductType(value: string) {
    this.productType = value;
  }

  public getProductPrice(): number {
    return this.productPrice;
  }

  public setProductPrice(value: number) {
    this.productPrice = value;
  }

  public getSKU(): string {
    return this.sku;
  }

  public setSKU(value: string) {
    this.sku = value;
  }

  public getProductDescription(): string {
    return this.productDescription;
  }

  public setProductDescription(value: string) {
    this.productDescription = value;
  }

  public getProductCondition(): string {
    return this.productCondition;
  }

  public setProductCondition(value: string) {
    this.productCondition = value;
  }

  public getLocation(): string {
    return this.location;
  }

  public setLocation(value: string) {
    this.location = value;
  }

  public hasSold(): boolean {
    return this.sold;
  }

  public getFormattedPrice(): string {
    var price = this.productPrice.toString();
    price = "$" + price + ".00";
    return price;
  }

  public getImage1Path() : string{
    return this.image1Path;
  }

  public setImage1Path(value: string){
    this.image1Path = value;
  }
}
