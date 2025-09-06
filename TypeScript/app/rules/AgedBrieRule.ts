import { RuleBase } from "@/core";
import { Item } from "@/domain/Item";

export class AgedBrieRule extends RuleBase {
  update(item: Item) {
    this.increaseQuality(item, 1);
    this.tickSellIn(item, 1);

    if (item.sellIn < 0) {
      this.increaseQuality(item, 1);
    }
  }
}
