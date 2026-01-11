import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Fetch booths from the booths table with all columns:
    // id, name, size, is_available, price, created_at, updated_at
    // Filter to only available booths, ordered by price
    const { data, error } = await supabase
      .from('booths')
      .select('id, name, size, is_available, price, created_at, updated_at')
      .eq('is_available', true)
      .order('price', { ascending: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to fetch booths' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: data || []
    })
    
  } catch (error) {
    console.error('Server-side error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch booths' },
      { status: 500 }
    )
  }
}

