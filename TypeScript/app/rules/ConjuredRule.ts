import { RuleBase } from "@/core";
import { Item } from "@/domain/Item";

export class ConjuredRule extends RuleBase {
  update(item: Item) {
    this.decreaseQuality(item, 2);
    this.tickSellIn(item, 1);

    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }
}
