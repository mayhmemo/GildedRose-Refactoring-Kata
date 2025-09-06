import { Item } from "@/domain/Item";
import { IUpdateRule } from "./IUpdateRule";

export abstract class RuleBase implements IUpdateRule {
  abstract update(item: Item): void;

  protected increaseQuality(item: Item, amount = 1) {
    item.quality = Math.min(50, item.quality + amount);
  }

  protected decreaseQuality(item: Item, amount = 1) {
    item.quality = Math.max(0, item.quality - amount);
  }

  protected tickSellIn(item: Item, days = 1) {
    item.sellIn -= days;
  }
}
