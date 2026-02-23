import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Compound } from '../domain/compound.model';
import { getCompoundBySlug } from '../api/compounds.api';

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

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('name') ?? '';
    const result = await getCompoundBySlug(slug);

    if (!result) {
      this.notFound = true;
    } else {
      this.compound = result;
    }

    this.loading = false;
  }

}