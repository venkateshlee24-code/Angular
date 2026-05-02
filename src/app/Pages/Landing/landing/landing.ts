import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../components/hero/hero';
import { Client } from '../components/client/client';
import { Features } from '../components/features/features';
import { Stats } from '../components/stats/stats';
import { HowItWorks } from '../components/how-it-works/how-it-works';
import { Testimonials } from '../components/testimonials/testimonials';
import { Cta } from '../components/cta/cta';
import { Footer } from '../../../Layout/footer/footer';
import { Header } from '../components/header/header';
import { Landfooter } from '../components/landfooter/landfooter';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Hero, Client, Features, Stats, HowItWorks, Testimonials, Cta,Header,Landfooter],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
