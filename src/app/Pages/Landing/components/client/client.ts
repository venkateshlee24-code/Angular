import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {
 trustedBy = 'TRUSTED BY 500+ ENTERPRISES WORLDWIDE';
  clients = [
    'ACME CORPORATION',
    'Globex',
    'Initech',
    'Umbrella Corporation',
    'Soylent Corp',
    'Stark Industries'
  ];
}
