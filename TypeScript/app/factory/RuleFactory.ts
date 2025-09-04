import { IUpdateRule } from "@/core/IUpdateRule";
import { Item } from "@/domain/Item";
import { LegacyRule } from "@/rules/LegacyRule";

export class RuleFactory {
  static for(_item: Item): IUpdateRule {
    return new LegacyRule();
  }
}
