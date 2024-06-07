import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  kids: any[] = [
    { image: 'assets/images/kids/download1.png', title: 'Cotton tracksuits', description: 'R260', type: 'clothes' },
    { image: 'assets/images/kids/download2.png', title: 'Coloured Jackets', description: 'R500', type: 'clothes' },
    { image: 'assets/images/kids/download3.png', title: 'Knee length Jacket', description: 'R340', type: 'new' },
    { image: 'assets/images/kids/download4.png', title: 'Winter Jacket', description: 'R400', type: 'clothes' },
    { image: 'assets/images/kids/download5.png', title: 'K-way Slamber', description: 'R1000', type: 'clothes' },
    { image: 'assets/images/kids/download6.png', title: 'Bomber Jacket', description: 'R1000', type: 'new' },
    { image: 'assets/images/kids/download7.png', title: 'Rebbit ear jacket', description: 'R640', type: 'clothes' },
    { image: 'assets/images/kids/download8.png', title: 'T-shirts', description: 'R100', type: 'clothes' },
    { image: 'assets/images/kids/download.png', title: 'Basseball Jacket', description: 'R700', type: 'new' },
    { image: 'assets/images/kids/download9.png', title: 'Two color Jacket', description: 'R570', type: 'clothes' },
    { image: 'assets/images/kids/download10.png', title: 'Two-piece Shorts- T-shirt', description: 'R340', type: 'clothes' },
    { image: 'assets/images/kids/download11.png', title: 'Slamber', description: 'R350', type: 'new' },
    { image: 'assets/images/kids/downloads.png', title: 'Bomber Basseball Jacket', description: 'Description 3', type: 'clothes' },

  ];
  men:  any[] = [
    { image: 'assets/images/man/12.png', title : 'Card holder' , description: 'R80', type: 'accesories'},
    { image: 'assets/images/man/b.png', title : 'Boxer' , description: 'R100', type: 'undergarments'},
    { image: 'assets/images/man/dmdm.png', title : 'Iner-Fleese Jacket' , description: 'R1000', type: 'clothes'},
    { image: 'assets/images/man/ddd1.png', title : 'Wool jearsy' , description: 'R750', type: 'clothes'},
    { image: 'assets/images/man/download.png', title : 'Multi-Wallet (cash and card)' , description: 'R300', type: 'accesories'},
    { image: 'assets/images/man/download1.png', title : 'Leather Waltet' , description: 'R150', type: 'accesories'},
    { image: 'assets/images/man/ggg.png', title :'Jacket' , description: 'R600', type: 'clothes'},
    { image: 'assets/images/man/ms.png', title : 'Pack Cotton Boxer' , description: 'R450', type: 'undergarments'},
    { image: 'assets/images/man/mvs.png', title : 'Cotton boxer' , description: 'R200', type: 'undergarments'},
    { image: 'assets/images/man/shop.png', title : 'Winter Jacket' , description: 'R600', type: 'clothes'},
    { image: 'assets/images/man/under.png', title : 'Pack Box' , description: 'R300', type: 'undergarments'},
    { image: 'assets/images/man/go.png', title : 'Bomber Jacket' , description: 'R900', type: 'clothes'}
        ];
  women:any[] = [

    { image : 'assets/images/ladies/boots.png' , title: 'Heel Boote', description : 'R650', type :'shoes'},
    { image : 'assets/images/ladies/download (1).jpg' , title: 'Jeanes', description : 'R300', type :'new'},
    { image : 'assets/images/ladies/download (01).png' , title: 'Black Jeans', description : 'R200', type :'clothes'},
    { image : 'assets/images/ladies/download (2).jpg' , title: 'Blue Redbet', description : 'R450', type :'new'},
    { image : 'assets/images/ladies/download (3).png' , title: '6 pocket jean', description : 'R500', type :'clothes'},
    { image : 'assets/images/ladies/download (4).png' , title: 'High weist', description : 'R399', type :'clothes'},
    { image : 'assets/images/ladies/download (5).png' , title: 'one botton', description : 'R200', type :'clothes'},
    { image : 'assets/images/ladies/download (6).png' , title: 'Tan Bag', description : 'R250', type :'accesories'},
    { image : 'assets/images/ladies/download (7).png' , title: 'skinny jean', description : 'R450', type :'new'},
    { image : 'assets/images/ladies/download (8).png' , title: 'light jean', description : 'R400', type :'new'},
    { image : 'assets/images/ladies/download (10).png' , title: 'high weisted jean', description : 'R600', type :'R600'},
    { image : 'assets/images/ladies/download (11).png' , title: 'jean', description : 'R300', type :'clothes'},
    { image : 'assets/images/ladies/download (11).png' , title: 'leather jean', description : 'R400', type :'shoes'},
    { image : 'assets/images/ladies/download (12).png' , title: 'Relay Shoes', description : 'R700', type :'shoes'},
    { image : 'assets/images/ladies/download (13).png' , title: 'Air force 1', description : 'R1200', type :'shoes'},
    { image : 'assets/images/ladies/download (14).png' , title: 'Training shoes', description : 'R2000', type :'shoes'},
    { image : 'assets/images/ladies/download (15).png' , title: 'new balance', description : 'R2500', type :'shoes'}
      ];

  constructor() { }
  getKidsItems(): any[] {
    return this.kids;
  }

  getMenItems(): any[] {
    return this.men;
  }

  getWomenItems(): any[] {
    return this.women;
  }

}
