import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts() {
    return [
      {
        ProductId: 1,
        ArtNo: '100',
        Provider: 'OppoProvider',
        ProviderArtNo: '1Yu',
        Brand: 'Oppo',
        Price: 7810.23,
        url_img: 'https://drive.google.com/uc?export=view&id=1_-JxDSyBxst1vyMB16fhvMAJTDNQ-jS5',
        img: 'assets/item1.png',
        big_img: 'assets/bitem1.png',
      },
      {
        ProductId: 2,
        ArtNo: '101',
        Provider: 'OppoProvider',
        ProviderArtNo: '1Yu2',
        Brand: 'Oppo',
        Price: 8710.23,
        url_img: 'https://drive.google.com/uc?export=view&id=1Jh5aH_Lh2ZYoVdsdjVpX4bH7Qh1BMcyO',
        img: 'assets/item2.png',
        big_img: 'assets/bitem2.png',
      },
      {
        ProductId: 3,
        ArtNo: '103',
        Provider: 'OppoProvider',
        ProviderArtNo: '31Yu',
        Brand: 'Oppo',
        Price: 4810.23,
        url_img: 'https://drive.google.com/uc?export=view&id=18JTuKmEneuesmwm5eIVBVpqA4Pn9AhlT',
        img:  'assets/item3.png',
        big_img: 'assets/bitem3.png',
      },
      {
        ProductId: 4,
        ArtNo: '104',
        Provider: 'OppoProvider',
        ProviderArtNo: '41Yu',
        Brand: 'Oppo',
        Price: 10810.23,
        url_img: 'https://drive.google.com/uc?export=view&id=1l3-ciu041o35TomfWXrF-mjlKyq_1M9s',
        img: 'assets/item4.png',
        big_img: 'assets/bitem4.png',
      },
    ];
  }
}
