import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(displayedText: string | undefined, searchText: string): string | SafeHtml {

    // Match in a case insensitive maneer
    const re = new RegExp(searchText, 'gi');
    const match: string[] | null | undefined = displayedText?.match(re);

    if (!match || !searchText) {
      return displayedText ?? '';
    }

    const replacedValue: string | undefined = displayedText?.replace(re, "<label class='highlight'>" + match[0] + "</label>");
    return this.sanitizer.bypassSecurityTrustHtml(replacedValue ?? '');
  }

}
