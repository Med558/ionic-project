import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()

export class PubProvider{
header : HttpHeaders;
constructor (public http: HttpClient){
this.header=new HttpHeaders();
this.header=this.header.append('Content-Type','application/json');
this.header=this.header.append('Accept','application/json');

}
all(){
return this.http.get( '/bdpub/pub/_search',{headers:this.header});
}
addpub(pub){
	let url= '/bdpub/pub/';
	return this.http.post(url,{"userLogin":localStorage.getItem('login'),"publication":pub.publication}, {headers: this.header});
}
userpub(userlogin){
	return this.http.get('/bdpub/pub/_search?q=userLogin:'+userlogin,{headers: this.header});
}
profilpub(){
	return this.http.get('/bdpub/pub/_search?q=userLogin:'+localStorage.getItem('login'),{headers: this.header});
}
delete(id){
	let url= '/bdpub/pub/'+id;
	return this.http.delete( url,{headers:this.header});


}
}
