import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class ConjuredRule implements IUpdateRule {
  update(item: Item) {
    this.decreaseQuality(item, 2);

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      this.decreaseQuality(item, 2);
    }
  }

  private decreaseQuality(item: Item, amount: number) {
    item.quality = Math.max(0, item.quality - amount);
  }
}
