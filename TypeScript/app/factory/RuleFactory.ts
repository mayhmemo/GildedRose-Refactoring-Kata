import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";
import { AgedBrieRule, BackstageRule, NormalRule, SulfurasRule, ConjuredRule } from "@/rules";

type RuleConstructor = new () => IUpdateRule;

const exactItemRuleMap = new Map<string, RuleConstructor>([
  ['Aged Brie', AgedBrieRule],
  ['Backstage passes to a TAFKAL80ETC concert', BackstageRule],
  ['Sulfuras, Hand of Ragnaros', SulfurasRule],
  ['Conjured', ConjuredRule]
]);

export class RuleFactory {
  static for(item: Item): IUpdateRule {
    const ruleConstructor = exactItemRuleMap.get(item.name);
    if (ruleConstructor) return new ruleConstructor();

    return new NormalRule();
  }
}
