import { Item } from "@/domain/Item";

export interface IUpdateRule {
  update(item: Item): void;
}
