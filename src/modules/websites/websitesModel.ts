import { IsNotEmpty, IsString } from "class-validator";
import { Model } from "../../model";

export class CreateWebsitesModel extends Model {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public web_url: string;

  constructor(body: any) {
    super();
    const { name, web_url } = body;
    this.web_url = web_url;
    this.name = name;
  }
}


