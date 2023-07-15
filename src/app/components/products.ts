export interface IProduct {
  id: number;
  type: "prebuilt" | "customize";
  img: string;
  title: string;
  description: string[];
  save: string;
  OriginalPrice: string;
  DiscountedPrice: string;
  affiram: string;
  shipping: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    type: "prebuilt",
    img: "/pc/CreatorRDYY40BG201.webp",
    title: "Creator RDY Y40BG201",
    description: [
      "Windows 11 Pro",
      "Intel® Core™ i9-13900KF CPU",
      "GeForce RTX 4090 - 24GB",
      "2TB M.2 NVMe GEN4 SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    save: "450",
    OriginalPrice: "3,999",
    DiscountedPrice: "3,549",
    affiram: "172/mo",
    shipping: "Delivery By Wednesday, Jul 19",
  },
  {
    id: 2,
    type: "prebuilt",
    img: "/pc/GamingRDYSLMRG211.webp",
    title: "Gaming RDY SLMRG211",
    description: [
      "Windows 11 Home",
      "AMD Ryzen 7 7700X CPU",
      "GeForce RTX 4070 - 12GB",
      "1TB M.2 NVMe SSD",
      "32GB DDR5-5600MHz RGB RAM",
    ],
    save: "150",
    OriginalPrice: "1,949",
    DiscountedPrice: "1,799",
    affiram: "87/mo",
    shipping: "Delivery By Wednesday, Jul 19",
  },
  {
    id: 3,
    type: "customize",
    img: "/pc/IntelGamingPCDDR5Configurator3.webp",
    title: "Intel Gaming PC DDR5 Configurator 3",
    description: [
      "Windows 11 Home",
      "Intel® Core™ i7-13700KF CPU",
      "GeForce RTX 4070 - 12GB",
      "1TB WD SN570 M.2 NVMe SSD",
      "32GB DDR5-6000MHz ADATA RGB RAM",
    ],
    save: "200",
    OriginalPrice: "2,189",
    DiscountedPrice: "1,989",
    affiram: "96/mo",
    shipping: "Estimate Ship By 07/21/2023",
  },
  {
    id: 4,
    type: "customize",
    img: "/pc/Intel13thGenExtremeGamingPC.webp",
    title: "Intel 13th Gen Extreme Gaming PC",
    description: [
      "Windows 11 Home",
      "Intel® Core™ i9-13900KF CPU",
      "GeForce RTX 4090 - 24GB",
      "2TB Intel 670p M.2 NVMe SSD",
      "32GB DDR5-6000MHz ADATA RGB RAM",
    ],
    save: "200",
    OriginalPrice: "3,619",
    DiscountedPrice: "3,419",
    affiram: "166/mo",
    shipping: "Estimate Ship By 07/21/2023",
  },
  {
    id: 5,
    type: "prebuilt",
    img: "/pc/GamingRDYSLHRG223.webp",
    title: "Gaming RDY SLHRG223",
    description: [
      "Windows 11 Home",
      "AMD Ryzen 5 5600 CPU",
      "GeForce RTX 4060 Ti - 8GB",
      "1TB M.2 NVMe SSD",
      "16GB DDR4-3200 RGB RAM",
    ],
    save: "100",
    OriginalPrice: "1,349",
    DiscountedPrice: "1,249",
    affiram: "78/mo",
    shipping: "Delivery By Wednesday, Jul 19",
  },
  {
    id: 6,
    type: "prebuilt",
    img: "/pc/GamingRDYEMRRG213.webp",
    title: "Gaming RDY EMRRG213",
    description: [
      "Windows 11 Home",
      "AMD Ryzen 5 7600 CPU",
      "GeForce RTX 4060 Ti - 8GB",
      "1TB M.2 NVMe SSD",
      "16GB DDR5-5200 RAM",
    ],
    save: "190",
    OriginalPrice: "1,539",
    DiscountedPrice: "1,349",
    affiram: "84/mo",
    shipping: "Delivery By Wednesday, Jul 19",
  },
  {
    id: 7,
    type: "customize",
    img: "/pc/AMDRyzen9SupremeDailyDeal.webp",
    title: "AMD Ryzen 9 Supreme Daily Deal",
    description: [
      "Windows 11 Home",
      "AMD Ryzen™ 9 7900X CPU",
      "AMD Radeon RX 6950 XT - 16GB",
      "1TB WD SN570 M.2 NVMe SSD",
      "32GB DDR5-5600MHz ADATA RGB RAM",
    ],
    save: "200",
    OriginalPrice: "2,491",
    DiscountedPrice: "2,291",
    affiram: "108/mo",
    shipping: "Estimate Ship By 07/21/2023",
  },
  {
    id: 8,
    type: "customize",
    img: "/pc/AMDGamingPCConfigurator1.webp",
    title: "AMD Gaming PC Configurator 1",
    description: [
      "Windows 11 Home",
      "AMD Ryzen™ 5 5600 CPU",
      "GeForce RTX 3050 - 8GB",
      "500GB WD SN570 M.2 NVMe SSD",
      "32GB DDR4-3600MHz RGB RAM",
    ],
    save: "150",
    OriginalPrice: "1,369",
    DiscountedPrice: "1,219",
    affiram: "76/mo",
    shipping: "Estimate Ship By 07/21/2023",
  },
];
