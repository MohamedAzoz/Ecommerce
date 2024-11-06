import { Component, Input, OnInit } from '@angular/core';
import { Interface } from '../../modul/interface';
import { NgClass, CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodicute',
  standalone: true,
  imports: [NgClass,CommonModule],
  templateUrl: './prodicute.component.html',
  styleUrl: './prodicute.component.css'
})
export class ProdicuteComponent implements OnInit {
  prudect!:Interface[];
  show:boolean=true;
  constructor(){
  }
  ngOnInit(): void {
    this.prudect=[
      {
        pname:"Honor",
        pquantity:0,
        pid:1,
        psarly:13300.00,
        pImg:"https://f.nooncdn.com/p/pnsku/N70019228V/45/_/1707819931/bf7f0896-3636-4862-b672-418bbfed975c.jpg?format=avif&width=240",
        pcateogryName:"X9b Dual SIM 5G Sunrise Orange 12GB RAM 256GB - Middle East Version",
        show:false
    },
    {
      pname:"16 Apple",
      pquantity:10,
      pid:2,
      psarly:75617.95,
      pImg:"https://f.nooncdn.com/p/pnsku/N70105590V/45/_/1726043608/b96466e2-9d2c-4cf5-b6a8-e589883e94c3.jpg?format=avif&width=240",
      pcateogryName:"آيفون 16 برو ماكس 256 جيجا بايت تيتانيوم طبيعي 5G مع فيس تايم - نسخة الشرق الأوسط",
      show:false
    },
    {
      pname:"Samsung",
      pquantity:41,
      pid:3,
      psarly:46028.45,
      pImg:"https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240",
      pcateogryName:"Galaxy A15 Dual Sim Blue Black 8GB RAM 256GB 4G - Middle East Version",
      show:false
  },{
    pname:"Samsung",
    pquantity:20,
    pid:4,
    psarly:6250.00,
    pImg:"https://f.nooncdn.com/p/pnsku/N70029832V/45/_/1706601417/c68be273-1532-4459-a8fc-19392b1b3521.jpg?format=avif&width=240",
    pcateogryName:"جالاكسي A15 ثنائي الشريحة، أزرق أسود، 4 جيجابايت رام، 128 جيجابايت، 4G - إصدار الشرق الأوسط",
    show:false
},{
  pname:"Oraimo",
  pquantity:16,
  pid:5,
  psarly:1099.00,
  pImg:"https://f.nooncdn.com/p/pnsku/N70106538V/45/_/1725872579/2d1561f2-ba2a-435e-ab2f-8f9fb8965178.jpg?format=avif&width=240",
  pcateogryName:"ساعة ذكية 5 مكالمة بلوتوث ساعة لياقة بدنية بشاشة عالية الدقة 2.01 بوصة، مقاومة للخدش وشاشة زجاجية مقواة مضادة للانفجار مع أكثر من 100 وضع رياضي وجهاز مراقبة الأكسجين في الدم ومعدل ضربات القلب، مقاومة للماء",
  show:false

},{
  pname:"HUAWEI",
  pquantity:7,
  pid:6,
  psarly:15000.00,
  pImg:"https://f.nooncdn.com/p/pnsku/N70115766V/45/_/1727680613/d95f649a-116b-4a99-9947-feaa119a922e.jpg?format=avif&width=240",
  pcateogryName:"ساعة GT5 الذكية مقاس 46 مم باللون الأزرق (مع سماعات Freebuds 5i باللون الأزرق)",
  show:false
},{
  pname:"Oraimo",
  pquantity:1,
  pid:7,
  psarly:1443.95,
  pImg:"https://f.nooncdn.com/p/pnsku/N70033897V/45/_/1708604497/a25a0310-829a-4f3d-b0b1-7d23f03c7981.jpg?format=avif&width=240",
  pcateogryName:"ساعة ذكية Watch 4 Plus مع مكالمات لاسلكية، شاشة عرض بدقة HD بمقاس 2.01 بوصة، تتبع للياقة البدنية مع مراقبة معدل ضربات القلب والنوم وعداد الخطوات، مقاومة للماء بتصنيف IP68، أسود",
  show:false
},{
  pname:"Shinecon",
  pquantity:29,
  pid:8,
  psarly:405.00,
  pImg:"https://f.nooncdn.com/p/pzsku/Z400507AB85D6B63F6761Z/45/_/1700222724/102daae2-3ec1-4597-8deb-38e14a9f22fb.jpg?format=avif&width=240",
  pcateogryName:"نظارات الواقع الافتراضي VR نظارات ثلاثية الأبعاد وخوذات نظارات الواقع الافتراضي للتلفزيون والأفلام وألعاب الفيديو المتوافقة مع iOS وAndroid ودعم 3.5-7.2 بوصة",
  show:false
}

    ]
    this.prudectfilt=this.prudect;
  }

   toggel(v:number){
    for(let i=0;i<this.prudect.length;i++){
      if(this.prudect[i].pid==v){
        this.prudect[i].show = !this.prudect[i].show;
        break;
      }
      }
   }

   prudectfilt: Interface[] = [];

 @Input()  set doserche(v: string) {
  this.prudectfilt = this.prudectfilttar(v);
}

v!: Interface[] | [];

prudectfilttar(pr: string): Interface[] {
  pr = pr.toLowerCase();

  if (pr !== "") {
    this.v = this.prudect.filter((onepr: Interface) =>
      onepr.pname.toLowerCase().includes(pr)
    );
  } else {
    this.v = []; // Return an empty array if the input is empty
  }

  return this.v;
}


}
