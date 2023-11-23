import { EaWhereInput } from "./EaWhereInput";
import { EaOrderByInput } from "./EaOrderByInput";

export type EaFindManyArgs = {
  where?: EaWhereInput;
  orderBy?: Array<EaOrderByInput>;
  skip?: number;
  take?: number;
};
