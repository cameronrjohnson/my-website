import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ukklxojprfpvtwiknvtj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVra2x4b2pwcmZwdnR3aWtudnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNjA2OTksImV4cCI6MjAzNjczNjY5OX0.IzfHPI2GZ1fVbY5QoJgxyvHOQ4B_4WZvjEkuwS66akw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)