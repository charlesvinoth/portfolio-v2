export type SkillItem = {
  label: string
  name: string
}

export type ExperienceItem = {
  id: string
  jobTitle: string
  company: string
  period: string
  roles: string[]
}

export type ProjectItem = {
  name: string
  folder: string
  description: {
    short: string
    long: string
  }
  technologies: string[]
  link: string
  screenshotsCount: number
  type: string
}
