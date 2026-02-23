import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Compound } from '../../domain/compound.model';
import { getAllCompounds } from '../../data/compounds.api';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './compounds-list.html',
  styleUrl: './compounds-list.css'
})
export class CompoundsList implements OnInit {

  compounds: Compound[] = [];
  loading = true;

  async ngOnInit() {
    this.compounds = await getAllCompounds();
    this.loading = false;
  }

}