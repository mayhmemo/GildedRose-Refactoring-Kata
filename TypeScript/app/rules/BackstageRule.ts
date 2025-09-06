import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";

export class BackstageRule implements IUpdateRule {
  update(item: Item) {
    this.increaseQuality(item, 1);

    if (item.sellIn <= 10) {
      this.increaseQuality(item, 1);
    }
    if (item.sellIn <= 5) {
      this.increaseQuality(item, 1);
    }

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  private increaseQuality(item: Item, amount: number) {
    item.quality = Math.min(50, item.quality + amount);
  }
}
