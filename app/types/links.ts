export interface ILink {
  label: string
  href: string
  external?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ISocial extends ILink {
  icon: string
}
