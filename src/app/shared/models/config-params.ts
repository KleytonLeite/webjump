import { GenericField } from './generic-field';

export interface ConfigParams {
  page?: number;
  limite?: number;
  search?: string;
  field?: GenericField;
  color?: string;
  gender?: string;
}
