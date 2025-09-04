import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class BackstageRule implements IUpdateRule {
  update(item: Item) {
    if (item.sellIn > 0) {
      let finalQuality: number;

      if (item.sellIn > 10) {
        finalQuality = item.quality + 1;

        item.quality = finalQuality > 50 ? 50 : finalQuality;
      } else if (item.sellIn > 5 && item.sellIn <= 10) {
        finalQuality = item.quality + 2;

        item.quality = finalQuality > 50 ? 50 : finalQuality;
      } else if (item.sellIn <= 5 && item.sellIn >= 1) {
        finalQuality = item.quality + 3;

        item.quality = finalQuality > 50 ? 50 : finalQuality;
      }
    } else {
      item.quality = 0;
    }

    item.sellIn = item.sellIn - 1;
  }
}
