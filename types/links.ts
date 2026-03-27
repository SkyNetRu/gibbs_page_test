interface ILink {
  label: string
  href: string
  external?: boolean
}

interface ISocial extends ILink {
  icon: string
}
