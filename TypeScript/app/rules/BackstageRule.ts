import { RuleBase } from "@/core";
import { Item } from "@/domain/Item";

export class BackstageRule extends RuleBase {
  update(item: Item) {
    this.increaseQuality(item, 1);

    if (item.sellIn <= 10) {
      this.increaseQuality(item, 1);
    }
    if (item.sellIn <= 5) {
      this.increaseQuality(item, 1);
    }

    this.tickSellIn(item, 1);

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
