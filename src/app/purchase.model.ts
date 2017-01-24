export class Purchase {
  private id: string;
  private customerName : string;
  private customerAddress : string;
  private customerEmail : string;
  private customerPhone : string;
  private productId : string;
  private purchaseDate : string;

  constructor(id: string,
              customerName: string,
              customerAddress: string,
              customerEmailAddress : string,
              productId: string,
              purchaseDate : string) {
    this.id = id;
    this.customerName = customerName;
    this.productId = productId;
    this.purchaseDate = purchaseDate;
    this.customerAddress = customerAddress;
    this.customerEmail = customerEmailAddress;

  }

  //Getters and Setters

  public getId(): string{
    return this.id;
  }

  public setId(value: string){
    this.id = value;
  }

  public getCustomerName(): string{
    return this.customerName;
  }

  public setCustomerName(value: string){
    this.customerName = value;
  }

  public getProductId(): string{
    return this.productId;
  }

  public setProductId(value: string){
    this.productId = value;
  }

  public getPurchaseDate(): string{
    return this.purchaseDate;
  }

  public setPurchaseDate(value: string){
    this.purchaseDate = value;
  }

  public getCustomerAddress(){
    return this.customerAddress;
  }

  public setCustomerAddress(value: string){
    this.customerAddress = value;
  }

  public getCustomerEmail(){
    return this.customerEmail;
  }

  public setCustomerEmail(value: string){
    this.customerEmail = value;
  }

  public getCustomerPhone(){
    return this.customerPhone;
  }

  public setCustomerPhone(value: string){
    this.customerPhone = value;
  }
}
