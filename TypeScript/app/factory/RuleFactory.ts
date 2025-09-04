import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";
import { AgedBrieRule, BackstageRule, NormalRule, SulfurasRule } from "@/rules";

export class RuleFactory {
  static for(item: Item): IUpdateRule {
    switch (item.name) {
      case 'Aged Brie':
        return new AgedBrieRule();
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstageRule();
      case 'Sulfuras, Hand of Ragnaros':
        return new SulfurasRule();
      default:
        return new NormalRule();
    }
  }
}
