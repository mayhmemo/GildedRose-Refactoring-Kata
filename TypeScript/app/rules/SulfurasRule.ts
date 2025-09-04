import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class SulfurasRule implements IUpdateRule {
  update(_item: Item) {}
}
