import { IsString, IsNumber } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  public name: string;

  @IsNumber()
  public amount: number;

  @IsString()
  public attribute: string;
}
