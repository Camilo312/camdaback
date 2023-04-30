import { generalInterface } from '@/interfaces/general.interface';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class GeneralDTO implements generalInterface {
  @IsNumber()
  id: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
