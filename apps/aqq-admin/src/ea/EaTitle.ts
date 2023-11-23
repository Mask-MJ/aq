import { Ea as TEa } from "../api/ea/Ea";

export const EA_TITLE_FIELD = "id";

export const EaTitle = (record: TEa): string => {
  return record.id?.toString() || String(record.id);
};
