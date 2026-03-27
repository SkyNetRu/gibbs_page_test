export interface ILink {
  label: string
  href: string
  external?: boolean
}

export interface ISocial extends ILink {
  icon: string
}
