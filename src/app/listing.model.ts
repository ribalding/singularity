export class Listing {
  private id: string;
  private productTitle : string;
  private productSubTitle : string;
  private productType : string;
  private productPrice : number;
  private productDescription : string;
  private productCondition : string;
  private sku : string;
  private location : string;
  private sold : boolean;

  constructor(id: string,
              productTitle: string,
              productSubTitle: string,
              productType: string,
              productPrice : number,
              productDescription: string,
              productCondition : string,
              sku : string,
              location : string){

    this.id = id;
    this.productTitle = productTitle;
    this.productSubTitle = productSubTitle;
    this.productType = productType;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.productCondition = productCondition;
    this.sku = sku;
    this.location = location;
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

  public setP0roductSubTitle(value: string) {
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
}
