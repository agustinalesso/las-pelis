import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "safeUrl"
})
export class SafeUrlPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) { }

    transform( value:string, ...params: any[] ): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }

}