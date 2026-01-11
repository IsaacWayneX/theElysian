import { NextRequest, NextResponse } from 'next/server'
import { supabase, BookingInsert } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received consultation request:', { 
      name: body.name, 
      email: body.email, 
      phone: body.phone,
      hasMessage: !!body.message 
    })
    
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
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
      return NextResponse.json(
        { 
          success: false, 
          error: error.message || 'Failed to save consultation request to database',
          details: error.details || null,
          code: error.code || null
        },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      console.error('No data returned from Supabase insert')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to retrieve inserted data' 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Consultation request submitted successfully!',
      data: data[0]
    })
    
  } catch (error: any) {
    console.error('Server-side consultation submission error:', error)
    console.error('Error stack:', error?.stack)
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || 'Failed to submit consultation request',
        type: error?.name || 'UnknownError'
      },
      { status: 500 }
    )
  }
}
