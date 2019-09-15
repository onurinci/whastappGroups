import { HttpParams } from "@angular/common/http";

declare var $: any;
declare var jQuery: any;

export class Helpers {

	

	public static JsInit(url: string) {

		let node = document.createElement('script');
		node.src = url;
		node.type = 'text/javascript';
		node.async = false;
		node.charset = 'utf-8';
		document.getElementsByTagName('head')[0].appendChild(node);
	}

	public static TextSubstring(val: string, length: number): string {

		if (val.length > length)
			val = val.substring(0, length);

		return val;

	}

	public static YoutubeVideoThumbImage(uri: string) {
		if (uri == null || uri == "" || uri == undefined)
			return "";

		let paramValue = null;
		if (uri.includes('?')) {
			const httpParams = new HttpParams({ fromString: uri.split('?')[1] });
			paramValue = httpParams.get("v");
		}
		return "https://img.youtube.com/vi/" + paramValue + "/0.jpg";
	}




	/// OTHER

	

}