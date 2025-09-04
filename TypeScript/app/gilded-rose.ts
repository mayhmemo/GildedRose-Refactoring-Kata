import { Item } from "@/domain/Item";
import { RuleFactory } from "@/factory/RuleFactory";

export class GildedRose {
  constructor(public items: Array<Item> = []) {}

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      const rule = RuleFactory.for(item);
      rule.update(item);
    }
    return this.items;
  }
}
