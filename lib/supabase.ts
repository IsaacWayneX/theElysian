import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zmqbulkhecxxfrtxgmyi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcWJ1bGtoZWN4eGZydHhnbXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyNjI1NjcsImV4cCI6MjA3NTgzODU2N30.3dCtxhmcpz5hK8Xf8qlqEyAlvEPHapUHxF5KmdisvVU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for the exhibitors table
export interface Exhibitor {
  id?: string
  company_name: string
  contact_person: string
  email: string
  phone_number: string
  website?: string
  industry: string
  preferred_booth_size: string
  company_description: string
  special_requirements?: string
  status?: string
  created_at?: string
  updated_at?: string
}

export interface ExhibitorInsert {
  company_name: string
  contact_person: string
  email: string
  phone_number: string
  website?: string
  industry: string
  preferred_booth_size: string
  company_description: string
  special_requirements?: string
  status?: string
}

// Types for the bookings table
export interface Booking {
  id?: string
  name: string
  email: string
  phone_number: string
  message: string
  status?: string
  exhibitor_id?: string
  created_at?: string
  updated_at?: string
}

export interface BookingInsert {
  name: string
  email: string
  phone_number: string
  message: string
  status?: string
  exhibitor_id?: string
}
