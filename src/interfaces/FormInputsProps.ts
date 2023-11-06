export interface FormInputsProps {
  firstName: string
  lastName: string
  birthDate: Date
  startDate: Date
  street: string
  city: string
  state: { value: string; label: string }
  zip: number
  department: { value: string; label: string }
}
