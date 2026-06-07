import saltAirDetail from "../assets/scents/salt-air-detail.svg";
import morningCrustDetail from "../assets/scents/morning-crust-detail.svg";
import midnightBalconyDetail from "../assets/scents/midnight-balcony-detail.svg";

// sağ panel (Added To Cart)
import saltAirAddedCart from "../assets/scents/salt-air-added-cart.svg";
import morningCrustAddedCart from "../assets/scents/morning-crust-added-cart.svg";
import midnightBalconyAddedCart from "../assets/scents/midnight-balcony-added-cart.svg";

// cart sayfası
import saltAirCart from "../assets/cart/salt-air-cart.svg";
import morningCrustCart from "../assets/cart/morning-crust-cart.svg";
import midnightBalconyCart from "../assets/cart/midnight-balcony-cart.svg";

export const scents = {
  "salt-air": {
    id: "salt-air",

    title: "Salt Air Perfume",

    price: 95,

    detailImage: saltAirDetail,

    addedCartImage: saltAirAddedCart,

    cartImage: saltAirCart,

    notes: {
      top: ["Blue anemone", "Ambroxan", "Sea salt", "Neroli"],
      heart: ["Rose", "Jasmine", "Peony", "Watermelon"],
      base: ["Mimosa", "Orris root", "Talc accord"],
    },

    description:
      "During my childhood, one summer afternoon, I went to the seaside with my best friend. We were sitting on the sand and talking while the wind came from the sea. Then we started running near the water and laughing together. The sun was very warm and everything felt bright and calm. I remember the sound of the waves, the salty air and her laugh. It is one of the happiest memories from my childhood because, for a moment, I felt completely free.",
  },

  "morning-crust": {
    id: "morning-crust",

    title: "Morning Crust Perfume",

    price: 95,

    detailImage: morningCrustDetail,

    addedCartImage: morningCrustAddedCart,

    cartImage: morningCrustCart,
  },

  "midnight-balcony": {
    id: "midnight-balcony",

    title: "Midnight Balcony Perfume",

    price: 95,

    detailImage: midnightBalconyDetail,

    addedCartImage: midnightBalconyAddedCart,

    cartImage: midnightBalconyCart,
  },
};