import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Books } from '../model/book.model';
import { Character } from '../model/character.model';
import { House } from '../model/house.model';


@Injectable({
  providedIn: 'root'
})
export class GotService {

  public allBooks = [];
  public allChar = [];
  public allHouse = [];

  baseUrl: string = 'https://anapioficeandfire.com/api';
  booksApi = "https://anapioficeandfire.com/api/books";
  charApi = "https://anapioficeandfire.com/api/characters";
  houseApi = "https://anapioficeandfire.com/api/houses";

  constructor(
    private http: HttpClient
  ) { }

  //method for all book
  viewAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.booksApi);
  }
  //method to get current book
  getCurrentBookById(id: number): Observable<Books> {
    return this.http.get<Books>(this.booksApi + '/' + id);
  }

  //method for all character
  viewAllChar(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charApi);
  }

  //method get current charcter
  getCurrentCharById(id: number): Observable<Character> {
    return this.http.get<Character>(this.charApi + '/' + id)
  }

  //method for all house
  viewAllHouse(): Observable<House[]> {
    return this.http.get<House[]>(this.houseApi);
  }

  //method to get currnt house
  getCurrentHouseById(id: number): Observable<House> {
    return this.http.get<House>(this.houseApi + '/' + id)
  }

}
