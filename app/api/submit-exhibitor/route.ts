import { NextRequest, NextResponse } from 'next/server'
import { supabase, ExhibitorInsert } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['companyName', 'contactPerson', 'email', 'phone', 'industry', 'boothSize', 'description']
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare data for Supabase
    const exhibitorData: ExhibitorInsert = {
      company_name: body.companyName.trim(),
      contact_person: body.contactPerson.trim(),
      email: body.email.trim().toLowerCase(),
      phone_number: body.phone.trim(),
      website: body.website?.trim() || null,
      industry: body.industry,
      preferred_booth_size: body.boothSize,
      company_description: body.description.trim(),
      special_requirements: body.specialRequirements?.trim() || null,
      status: 'pending' // Default status for new registrations
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('exhibitors')
      .insert([exhibitorData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to save registration to database' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully!',
      data: data[0]
    })
    
  } catch (error) {
    console.error('Server-side submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}
