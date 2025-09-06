import { GildedRose } from '@/gilded-rose';
import { Item } from "@/domain/Item";

const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const BRIE = 'Aged Brie';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

describe('Gilded Rose — characterization', () => {
  it('sould have items', () => {
    const items = [
      new Item('Normal', 10, 20),
      new Item('Aged Brie', 0, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    ];

    const rose = new GildedRose(items);
    expect(rose.items).toEqual(items);
  });

  it('should have no items', () => {
    const rose = new GildedRose([]);
    expect(rose.items).toEqual([]);
  });

  describe('Normal Item', () => {
    it('degradates quality by -1 per day before expiration', () => {
      const rose = new GildedRose([new Item('Normal', 10, 20)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(9);
      expect(rose.items[0].quality).toBe(19);
    });

    it('degradates quality by -2 per day before expiration', () => {
      const rose = new GildedRose([new Item('Normal', 0, 20)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(-1);
      expect(rose.items[0].quality).toBe(18);
    });

    it('quality never becomes negative', () => {
      const rose = new GildedRose([new Item('Normal', 5, 0)]);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('increases quality by +1 per day before expiration', () => {
      const rose = new GildedRose([new Item(BRIE, 2, 0)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(1);
      expect(rose.items[0].quality).toBe(1);
    });

    it('increases quality by +2 per day after expiration', () => {
      const rose = new GildedRose([new Item(BRIE, 0, 10)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(-1);
      expect(rose.items[0].quality).toBe(12);
    });

    it('quality never passes 50', () => {
      const rose = new GildedRose([new Item(BRIE, 5, 49)]);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(50);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(50);
    });
  });

  describe('Backstage', () => {
    it('increases quality by +1 when sellIn > 10 [10-]', () => {
      const rose = new GildedRose([new Item(BACKSTAGE, 15, 20)]);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(21);
    });

    it('increases quality by +2 when 10 >= sellIn > 5 [6-10]', () => {
      const rose = new GildedRose([new Item(BACKSTAGE, 10, 20)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(9);
      expect(rose.items[0].quality).toBe(22);
    });

    it('increases quality by +3 when 5 >= sellIn >= 1 [1-5]', () => {
      const rose = new GildedRose([new Item(BACKSTAGE, 5, 20)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(4);
      expect(rose.items[0].quality).toBe(23);
    });

    it('becomes 0 in the day next to the show (after selled)', () => {
      const rose = new GildedRose([new Item(BACKSTAGE, 0, 20)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(-1);
      expect(rose.items[0].quality).toBe(0);
    });

    it('quality never passes 50', () => {
      const rose = new GildedRose([new Item(BACKSTAGE, 6, 49)]);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('sellIn and quality never changes', () => {
      const rose = new GildedRose([new Item(SULFURAS, 0, 80)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(0);
      expect(rose.items[0].quality).toBe(80);
    });
  });

  
  describe('Conjured', () => {
    it('decreases quality by -2 per day before the expiration', () => {
      const rose = new GildedRose([new Item('Conjured', 3, 10)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(2);
      expect(rose.items[0].quality).toBe(8);
    });

    it('decreases quality by -4 per day before the expiration', () => {
      const rose = new GildedRose([new Item('Conjured', 0, 10)]);
      rose.updateQuality();
      expect(rose.items[0].sellIn).toBe(-1);
      expect(rose.items[0].quality).toBe(6);
    });

    it('quality never becomes negative', () => {
      const rose = new GildedRose([new Item('Conjured', 1, 1)]);
      rose.updateQuality();
      expect(rose.items[0].quality).toBe(0);
    });
  });
});
