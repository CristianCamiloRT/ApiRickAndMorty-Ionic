import { Component, OnInit } from '@angular/core';
import { RickAndMortyApiService } from '../../services/rickandmortyapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  page = 1;
  characters: any[] = [];
  totalPages = 1;

  constructor(private characterService: RickAndMortyApiService) {}

  ngOnInit() {
    this.getCharacters(this.page);
  }

  getCharacters(page: number = 1) {
    this.characterService.getCharacters(page).subscribe((data: any) => {
      this.characters = data.results;
      this.totalPages = data.info.pages;
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getCharacters(this.page);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getCharacters(this.page);
    }
  }
}
