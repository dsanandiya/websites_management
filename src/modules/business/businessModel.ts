import { IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator";
import { Model } from "../../model";

export class CreateBusinessModel extends Model {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  public website_id: number;

  @IsString()
  @IsNotEmpty()
  public address: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  constructor(body: any) {
    super();
    const { name, website_id, address, email, phone } = body;
    this.website_id = website_id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}

export class CreateBusinessInfoModel extends Model {
  @IsNumber()
  @IsNotEmpty()
  public business_id: number;

  @IsNumber()
  @IsNotEmpty()
  public revenue: number;

  constructor(body: any) {
    super();
    const { business_id, revenue } = body;
    this.business_id = business_id;
    this.revenue = revenue;
  }
}
