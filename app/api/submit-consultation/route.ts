import { NextRequest, NextResponse } from 'next/server'
import { supabase, BookingInsert } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'message']
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
    const bookingData: BookingInsert = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone_number: body.phone.trim(),
      message: body.message.trim(),
      status: 'pending', // Default status for new consultation requests
      exhibitor_id: null // Not linked to any specific exhibitor initially
    }

    // Insert into Supabase bookings table
    const { data, error } = await supabase
      .from('bookings')
      .insert([bookingData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to save consultation request to database' },
        { status: 500 }
      )
    }

      return NextResponse.json({ 
        success: true, 
      message: 'Consultation request submitted successfully!',
      data: data[0]
      })
    
  } catch (error) {
    console.error('Server-side consultation submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit consultation request' },
      { status: 500 }
    )
  }
}
