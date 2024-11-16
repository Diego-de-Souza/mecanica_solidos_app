import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  videoTitles: { [key: string]: string } = {
    'https://www.youtube.com/watch?v=EjKgxPXe51g&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=1': 'Título do Vídeo 1',
    'https://www.youtube.com/watch?v=C25yXbDwgkg&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=2': 'Título do Vídeo 2',
    'https://www.youtube.com/watch?v=7JxUnPy45CY&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=3': 'Título do Vídeo 3',
    'https://www.youtube.com/watch?v=EXImOcrK-kQ&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=4': 'Título do Vídeo 4',
    'https://www.youtube.com/watch?v=ulqXtID10Zs&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=5': 'Título do Vídeo 5',
    'https://www.youtube.com/watch?v=Z8K5AG-yN6E&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=6': 'Título do Vídeo 6',
    'https://www.youtube.com/watch?v=5Ul7ITTUAis&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=7': 'Título do Vídeo 7',
    'https://www.youtube.com/watch?v=YpHD81fBHD0&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=8': 'Título do Vídeo 8',
    'https://www.youtube.com/watch?v=DoXG5dh2IPw&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=9': 'Título do Vídeo 9',
    'https://www.youtube.com/watch?v=DIE2CMVGhP8&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=10': 'Título do Vídeo 10',
    'https://www.youtube.com/watch?v=g2X1MtnR2jE&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=11': 'Título do Vídeo 11',
    'https://www.youtube.com/watch?v=wHEjDJkJ7SE&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=12': 'Título do Vídeo 12',
    'https://www.youtube.com/watch?v=HH0xigJ8C4s&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=13':'Título do Vídeo 13',
    'https://www.youtube.com/watch?v=X9g8VHwMlCA&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=14': 'Título do Vídeo 14',
    'https://www.youtube.com/watch?v=429DkLlIc_0&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=15': 'Título do Vídeo 15',
    'https://www.youtube.com/watch?v=t516KmBJ0Mo&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=16': 'Título do Vídeo 16',
    'https://www.youtube.com/watch?v=G1MvjgeABy0&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=17': 'Título do Vídeo 17',
    'https://www.youtube.com/watch?v=SN7gFMoSGSw&list=PLqdVzuKx0OZDd54mTq5Rq3zyl7ndCVA9l&index=18':'Título do Vídeo 18'
  };

  // Array de vídeos com URLs seguras para o iframe
  videos: { url: string, safeUrl: SafeResourceUrl }[] = [];

  constructor(private sanitizer: DomSanitizer) {
    const rawVideos = Object.keys(this.videoTitles);
    this.videos = rawVideos.map((url) => ({
      url,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(this.convertToEmbedUrl(url))
    }));
  }

  // Função para converter a URL normal para o formato embed do YouTube
  private convertToEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}
