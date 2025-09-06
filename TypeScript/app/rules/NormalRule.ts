import { RuleBase } from "@/core";
import { Item } from "@/domain/Item";

export class NormalRule extends RuleBase {
  update(item: Item) {
    this.decreaseQuality(item, 1);
    this.tickSellIn(item, 1);

    if (item.sellIn < 0) {
      this.decreaseQuality(item, 1);
    }
  }
}
