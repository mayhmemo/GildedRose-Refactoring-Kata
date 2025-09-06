import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class AgedBrieRule implements IUpdateRule {
  update(item: Item) {
    this.increaseQuality(item, 1);

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      this.increaseQuality(item, 1);
    }
  }

  private increaseQuality(item: Item, amount: number) {
    item.quality = Math.min(50, item.quality + amount);
  }
}
