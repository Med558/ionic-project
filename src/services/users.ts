import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable()

export class UserProvider{
header : HttpHeaders;
constructor (public http: HttpClient){
this.header=new HttpHeaders();
this.header=this.header.append('Content-Type','application/json');
this.header=this.header.append('Accept','application/json');

}

all(){
return this.http.get( '/bdd/users/_search',{headers:this.header});
}

add(users){
	let url= '/bdd/users/'+ users.id;
	return this.http.post(url,{"login":users.login,"name":users.nom,"prenom":users.prenom,"tel":users.tel,"email":users.email,
	"password":users.password,"image":users.avatar}, {headers: this.header});
}
login(users)
    {return this.http.get('/bdd/users/_search?q=login:'+users.login,{headers: this.header});
	}

userprofil()
    {return this.http.get('/bdd/users/_search?q=login:'+localStorage.getItem('login'),{headers: this.header});
	}
	
fillForm(id){
		let url= '/bdd/users/'+id;
		return this.http.get( url,{headers:this.header});


}
addpub(user){
	let url= '/bdd/publication/'+user.id;
	return this.http.post(url,{"login":localStorage.getItem('login'),"publication":user.publication}, {headers: this.header});
}
}
