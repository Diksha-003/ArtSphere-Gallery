export function isAuthenticated(){
    return getToken() ? true:false;
}

export function getToken(){
    return localStorage.getItem("token");
}

export function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("artist");
}

export function isArtist() {
    return localStorage.getItem("artist") === "true"; 
  }