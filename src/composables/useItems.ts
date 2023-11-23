import { onBeforeMount, ref } from "vue";

type Item = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  points: {
    asis: string;
    tobe: string;
  };
};

const imageSrcs = ["/vite.svg", "/vue.svg"];
const titles = ["短いタイトル", "ほんのちょっとだけ長いタイトル", "たぶんおそらくきっとそれなりにとっても長ーーーーーいタイトル"];
const descriptions = [
  "短い説明。短い説明。短い説明。",
  "ほんのちょっとだけ長い説明。ほんのちょっとだけ長い。ほんのちょっとだけ長い。",
  "たぶんおそらくきっとそれなりにとっても長ーーーーーい説明。たぶんおそらくきっとそれなりにとっても長ーーーーーい説明。たぶんおそらくきっとそれなりにとっても長ーーーーーい説明。",
];

export function useItems() {
  const items = ref<Item[]>([]);

  function generateId(length: number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  function getRandomOption(options: string[]) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function generateItem() {
    return {
      id: generateId(16),
      imageSrc: getRandomOption(imageSrcs),
      title: getRandomOption(titles),
      description: getRandomOption(descriptions),
      points: {
        asis: (Math.random() * 4 + 1).toFixed(1),
        tobe: (Math.random() * 4 + 1).toFixed(1),
      },
    };
  }

  function updateItems() {
    items.value = [generateItem(), generateItem(), generateItem()];
  }

  onBeforeMount(() => {
    updateItems();
  });

  return { items, updateItems };
}
