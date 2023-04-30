import { generalInterface } from '@/interfaces/general.interface';
import { Type } from 'class-transformer';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { GeneralDTO } from './general.dto';

export class PetitionDTO {
  @IsString()
  public model: string;

  @IsOptional()
  public data: GeneralDTO | null;

  @IsOptional()
  public conditions: any | null;
}
