import { AfterViewInit, Component } from '@angular/core';
// import bootstrap from '../../../main.server';
declare var bootstrap: any;
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements AfterViewInit {
    // bootstrap: any;
  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('myCarousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // الوقت بين الشرائح (بالميلي ثانية)
      wrap: true // إعادة التشغيل التلقائي
    });

    // مثال على التحكم بالكاروسل برمجيًا
    setTimeout(() => {
      carousel.next(); // الانتقال إلى الشريحة التالية
    }, 300);
  }

}
