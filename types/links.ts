interface Link {
  label: string
  href: string
  external?: boolean
}

interface Social extends Link{
  icon: string
}
