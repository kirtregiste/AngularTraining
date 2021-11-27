import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    
    if (!value) return null;

    let words: string[] = value.split(" ");
    
    for (var i = 0; i<words.length; i++)
    {
      if (i > 0 && this.isPreposition(words[i]))
        words[i] = words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i]);
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions: string[] = [
      "for",
      "the",
      "of"
    ]
    return prepositions.includes(word);
  }

  private toTitleCase(word: string): string {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
