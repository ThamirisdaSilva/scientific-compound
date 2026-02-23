import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Compound } from '../../domain/compound.model';
import { CompoundsService } from '../../data/compounds.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './compound-detail.html',
  styleUrl: './compound-detail.css'
})
export class CompoundDetail implements OnInit {

  compound?: Compound;
  loading = true;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private compoundsService: CompoundsService
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    const result = await this.compoundsService.getBySlug(slug);

    this.compound = result;
    this.notFound = !result;
    this.loading = false;
  }
}