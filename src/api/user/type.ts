export interface loginFormData{
  username:string,
  password:string
}

export interface loginResponseData{
  token:string
}

interface dataType{
  token:string
}

export interface userInfoReponseData{
  code:number,
  data:dataType
}

interface user {
  checkUser: userInfo
}

interface userInfo{
  userId: string,
  avatar:string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string,
}