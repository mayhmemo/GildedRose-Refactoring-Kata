import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class NormalRule implements IUpdateRule {
  update(item: Item) {
    if (item.quality > 0) {
      if (item.sellIn > 0) {
        item.quality = item.quality - 1;
      } else {
        item.quality = item.quality - 2;
      }
    }

    item.sellIn = item.sellIn - 1;
  }
}
