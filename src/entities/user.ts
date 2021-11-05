interface IUserGeo {
  lat: string,
  lng: string
}

export interface IUserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IUserGeo
}

export interface IUserCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: IUserAddress
  phone: string
  website: string
  company: IUserCompany
}

export class User implements IUser {
  address: IUserAddress
  company: IUserCompany
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string

  constructor (address: IUserAddress, company: IUserCompany, email: string, id: number, name: string, phone: string, username: string, website: string) {
    this.address = address
    this.company = company
    this.email = email
    this.id = id
    this.name = name
    this.phone = phone
    this.username = username
    this.website = website
  }
}
