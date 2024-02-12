export interface CriteriaData {
  id: string
  name: string
  weight: number
  created_at: string
}

export interface SubCriteriaData {
  id: string
  criteria: string
  name: string
  weight: number
  created_at: string
}
