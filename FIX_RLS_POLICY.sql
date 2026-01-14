-- Fix for Row Level Security (RLS) Policy Issu
-- Run this SQL in your Supabase SQL Editor

-- First, check if the bookings table exists
-- If it doesn't, create it first using the SQL from SUPABASE_SETUP.md

-- Step 1: Check if RLS is enabled on the bookings table
-- You can see this in Supabase Dashboard > Table Editor > bookings > Settings

-- Step 2: Drop existing policy if it exists (to recreate it properly)
DROP POLICY IF EXISTS "Allow public inserts" ON bookings;

-- Step 3: Create a new policy that allows public inserts
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Step 4: Verify the policy was created
-- You should see the policy in: Supabase Dashboard > Authentication > Policies > bookings

-- Alternative: If the above doesn't work, you can temporarily disable RLS for testing:
-- ALTER TABLE bookings DISABLE ROW LEVEL SECURITY;
-- (NOT RECOMMENDED for production - re-enable RLS after fixing the policy)

