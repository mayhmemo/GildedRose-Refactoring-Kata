import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class AgedBrieRule implements IUpdateRule {
  update(item: Item) {
    let finalQuality: number;

    if (item.sellIn > 0) {
      finalQuality = item.quality + 1;

      item.quality = finalQuality > 50 ? 50 : finalQuality;
    } else {
      finalQuality = item.quality + 2;

      item.quality = finalQuality > 50 ? 50 : finalQuality;
    }

    item.sellIn = item.sellIn - 1;
  }
}
