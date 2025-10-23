# Supabase Setup Instructions

## 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

## 2. Environment Variables

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Supabase Table Structure

### Exhibitors Table

The `exhibitors` table should have the following columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| id | uuid | Primary key (auto-generated) |
| company_name | text | Company name |
| contact_person | text | Contact person name |
| email | text | Email address |
| phone_number | text | Phone number |
| website | text | Company website (optional) |
| industry | text | Industry sector |
| preferred_booth_size | text | Preferred booth size |
| company_description | text | Company description |
| special_requirements | text | Special requirements (optional) |
| status | text | Registration status (default: 'pending') |
| created_at | timestamp with time zone | Created timestamp (auto-generated) |
| updated_at | timestamp with time zone | Updated timestamp (auto-generated) |

### Bookings Table

The `bookings` table should have the following columns:

| Column Name | Type | Description |
|-------------|------|-------------|
| id | uuid | Primary key (auto-generated) |
| name | text | Contact person name |
| email | text | Email address |
| phone_number | text | Phone number |
| message | text | Consultation message |
| status | text | Booking status (default: 'pending') |
| exhibitor_id | uuid | Optional link to exhibitor (nullable) |
| created_at | timestamp with time zone | Created timestamp (auto-generated) |
| updated_at | timestamp with time zone | Updated timestamp (auto-generated) |

## 4. Database Setup

### Create the exhibitors table:

```sql
CREATE TABLE exhibitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  website TEXT,
  industry TEXT NOT NULL,
  preferred_booth_size TEXT NOT NULL,
  company_description TEXT NOT NULL,
  special_requirements TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_exhibitors_email ON exhibitors(email);

-- Create an index on status for filtering
CREATE INDEX idx_exhibitors_status ON exhibitors(status);
```

### Create the bookings table:

```sql
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  exhibitor_id UUID REFERENCES exhibitors(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_bookings_email ON bookings(email);

-- Create an index on status for filtering
CREATE INDEX idx_bookings_status ON bookings(status);

-- Create an index on exhibitor_id for linking
CREATE INDEX idx_bookings_exhibitor_id ON bookings(exhibitor_id);
```

### Enable Row Level Security (RLS):

```sql
-- Enable RLS on the exhibitors table
ALTER TABLE exhibitors ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON exhibitors
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads (for admin access)
CREATE POLICY "Allow authenticated reads" ON exhibitors
  FOR SELECT USING (auth.role() = 'authenticated');

-- Enable RLS on the bookings table
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts (for consultation form submissions)
CREATE POLICY "Allow public inserts" ON bookings
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads (for admin access)
CREATE POLICY "Allow authenticated reads" ON bookings
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 5. API Usage

### Exhibitor Registration API

The API endpoint `/api/submit-exhibitor` now:

- Validates all required fields
- Validates email format
- Inserts data into the Supabase `exhibitors` table
- Returns success/error responses
- Sets default status to 'pending'

### Consultation Booking API

The API endpoint `/api/submit-consultation` now:

- Validates all required fields (name, email, phone, message)
- Validates email format
- Inserts data into the Supabase `bookings` table
- Returns success/error responses
- Sets default status to 'pending'
- Sets exhibitor_id to null (not linked to any specific exhibitor initially)

## 6. Form Data Mapping

### Exhibitor Registration Form

The exhibitor form data is mapped to the database columns as follows:

| Form Field | Database Column |
|------------|----------------|
| companyName | company_name |
| contactPerson | contact_person |
| email | email |
| phone | phone_number |
| website | website |
| industry | industry |
| boothSize | preferred_booth_size |
| description | company_description |
| specialRequirements | special_requirements |

### Consultation Booking Form

The consultation form data is mapped to the database columns as follows:

| Form Field | Database Column |
|------------|----------------|
| name | name |
| email | email |
| phone | phone_number |
| message | message |

## 7. Testing

After setup, test both form submissions to ensure data is properly saved to the Supabase database:

1. **Exhibitor Registration Form**: Test the multi-step exhibitor registration form
2. **Consultation Booking Form**: Test the consultation booking form

Both forms should successfully submit data to their respective tables (`exhibitors` and `bookings`) with proper validation and error handling.
